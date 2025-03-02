<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface DeleteTenantProps {
		applicationId: number;
		tenantId: number;
		issuer: string;
		onDelete(): void;
	}

	type DeleteTenantForm = {
		issuer: string;
		issuerConfirm: string;
	};

	const createSuite = () =>
		create((data: Partial<DeleteTenantForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('issuerConfirm', m.errors_message_required(), () => {
				enforce(data.issuerConfirm).isNotBlank();
			});
			test('issuerConfirm', m.errors_message_mismatch(), () => {
				enforce(data.issuer === data.issuerConfirm).isTruthy();
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
	import { tenantApi } from '$lib/openapi';

	let { applicationId, tenantId, issuer, onDelete }: DeleteTenantProps = $props();

	let issuerConfirm = $state('');
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
		suite({ issuer, issuerConfirm }, Array.from(fields)).done((r) => {
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
			issuerConfirm = issuerConfirm.trim();
			validateAll();
			if (result.isValid()) {
				await tenantApi.deleteTenant(tenantId, applicationId);
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
	<p>{m.tenant_delete_tenant_description()}</p>
	<div class="mb-2">
		<input
			class="w-full {cn('issuerConfirm')}"
			type="text"
			name="issuerConfirm"
			placeholder={m.tenant_delete_issuer_confirm({ issuer })}
			bind:value={issuerConfirm}
			oninput={onChange}
		/>
		<InputResults name="issuerConfirm" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn danger flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_delete_submit()}
		</button>
	</div>
</form>
