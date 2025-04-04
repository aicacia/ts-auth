<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface EditUserProps {
		applicationId: number;
		user: User;
		onEdit(user: User): void;
	}

	type EditUserForm = {
		username: string;
		active: boolean;
	};

	const createSuite = () =>
		create((data: EditUserForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('username', m.errors_message_required(), () => {
				enforce(data.username).isNotBlank();
			});
			test('active', m.errors_message_required(), () => {
				enforce(data.active).isNotBlank();
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
	import type { User } from '$lib/openapi/auth';
	import { userApi } from '$lib/openapi';
	import { onMount } from 'svelte';

	let { applicationId, user = $bindable(), onEdit }: EditUserProps = $props();

	let username = $state(user.username);
	let active = $state(user.active);

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
		suite({ username, active }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		username = username?.trim();
		fields.add('username');
		fields.add('active');
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
			validateAll();
			if (result.isValid()) {
				user = await userApi.updateUser(user.id, { username, active }, applicationId);
				onEdit(user);
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}

	onMount(validateAll);
</script>

<form onsubmit={onSubmit}>
	<div class="mb-2">
		<label for="username"> {m.user_username_label()}</label>
		<input
			class="w-full {cn('username')}"
			type="text"
			name="username"
			placeholder={m.user_username_placeholder()}
			bind:value={username}
			oninput={onChange}
		/>
		<InputResults name="username" {result} />
	</div>
	<div>
		<label for="active" class="m-0">
			{m.user_active_label()}
			<input
				class={cn('active')}
				type="checkbox"
				name="active"
				bind:checked={active}
				oninput={onChange}
			/>
		</label>
		<InputResults name="active" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_edit_submit()}
		</button>
	</div>
</form>
