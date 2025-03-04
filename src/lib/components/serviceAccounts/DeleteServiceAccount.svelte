<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface DeleteServiceAccountProps {
		applicationId: number;
		serviceAccountId: number;
		name: string;
		onDelete(): void;
	}

	type DeleteServiceAccountForm = {
		name: string;
		nameConfirm: string;
	};

	const createSuite = () =>
		create((data: Partial<DeleteServiceAccountForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('nameConfirm', m.errors_message_required(), () => {
				enforce(data.nameConfirm).isNotBlank();
			});
			test('nameConfirm', m.errors_message_mismatch(), () => {
				enforce(data.name === data.nameConfirm).isTruthy();
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
	import { serviceAccountApi } from '$lib/openapi';

	let { applicationId, serviceAccountId, name, onDelete }: DeleteServiceAccountProps = $props();

	let nameConfirm = $state('');
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
		suite({ name, nameConfirm }, Array.from(fields)).done((r) => {
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
			nameConfirm = nameConfirm.trim();
			validateAll();
			if (result.isValid()) {
				await serviceAccountApi.deleteServiceAccount(serviceAccountId, applicationId);
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
	<p>{m.service_account_delete_service_account_description()}</p>
	<div class="mb-2">
		<input
			class="w-full {cn('nameConfirm')}"
			type="text"
			name="nameConfirm"
			placeholder={m.service_account_delete_name_confirm({ name })}
			bind:value={nameConfirm}
			oninput={onChange}
		/>
		<InputResults name="nameConfirm" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn danger flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.service_account_delete_submit()}
		</button>
	</div>
</form>
