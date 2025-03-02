<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface DeleteUserProps {
		applicationId: number;
		userId: number;
		username: string;
		onDelete(): void;
	}

	type DeleteUserForm = {
		username: string;
		usernameConfirm: string;
	};

	const createSuite = () =>
		create((data: Partial<DeleteUserForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('usernameConfirm', m.errors_message_required(), () => {
				enforce(data.usernameConfirm).isNotBlank();
			});
			test('usernameConfirm', m.errors_message_mismatch(), () => {
				enforce(data.username === data.usernameConfirm).isTruthy();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { userApi } from '$lib/openapi';

	let { applicationId, userId, username, onDelete }: DeleteUserProps = $props();

	let usernameConfirm = $state('');
	let suite = createSuite();
	let result = $state(suite.get());
	let loading = $state(false);
	let disabled = $derived(loading);
	let cn = $derived(
		classNames(result, {
			untested: 'untested',
			tested: 'tested',
			invalid: 'invalid',
			valid: 'valid',
			warning: 'warning'
		})
	);

	const fields = new Set<string>();
	const validate = debounce(() => {
		suite({ username, usernameConfirm }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('name');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			usernameConfirm = usernameConfirm.trim();
			validateAll();
			if (result.isValid()) {
				await userApi.deleteUser(userId, applicationId);
				onDelete();
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form onsubmit={onSubmit}>
	<p>{m.user_delete_user_description()}</p>
	<div class="mb-2">
		<input
			class="w-full {cn('usernameConfirm')}"
			type="text"
			name="usernameConfirm"
			placeholder={m.user_delete_name_confirm_placeholder({ username })}
			bind:value={usernameConfirm}
			oninput={onChange}
		/>
		<InputResults name="usernameConfirm" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn danger flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_delete_submit()}
		</button>
	</div>
</form>
