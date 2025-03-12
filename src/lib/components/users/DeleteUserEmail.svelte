<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface DeleteEmailProps {
		applicationId: number;
		userId: number;
		emailId: number;
		email: string;
		onDelete(): void;
	}

	type DeleteEmailForm = {
		email: string;
		emailConfirm: string;
	};

	const createSuite = () =>
		create((data: Partial<DeleteEmailForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('emailConfirm', m.errors_message_required(), () => {
				enforce(data.emailConfirm).isNotBlank();
			});
			test('emailConfirm', m.errors_message_mismatch(), () => {
				enforce(data.email === data.emailConfirm).isTruthy();
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

	let { applicationId, userId, emailId, email, onDelete }: DeleteEmailProps = $props();

	let emailConfirm = $state('');
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
		suite({ email, emailConfirm }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('email');
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
			emailConfirm = emailConfirm.trim();
			validateAll();
			if (result.isValid()) {
				await userApi.deleteUserEmail(userId, emailId, applicationId);
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
	<p>{m.user_emails_delete_email_description()}</p>
	<div class="mb-2">
		<input
			class="w-full {cn('emailConfirm')}"
			type="text"
			name="emailConfirm"
			placeholder={m.user_emails_delete_email_confirm({ email })}
			bind:value={emailConfirm}
			oninput={onChange}
		/>
		<InputResults name="emailConfirm" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn danger flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_emails_delete_submit()}
		</button>
	</div>
</form>
