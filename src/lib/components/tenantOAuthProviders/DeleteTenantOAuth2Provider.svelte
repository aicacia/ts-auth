<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface DeleteTenantOAuth2ProviderProps {
		applicationId: number;
		tenantId: number;
		tenantOAuth2ProviderId: number;
		provider: string;
		onDelete(): void;
	}

	type DeleteTenantOAuth2ProviderForm = {
		provider: string;
		providerConfirm: string;
	};

	const createSuite = () =>
		create((data: Partial<DeleteTenantOAuth2ProviderForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('providerConfirm', m.errors_message_required(), () => {
				enforce(data.providerConfirm).isNotBlank();
			});
			test('providerConfirm', m.errors_message_mismatch(), () => {
				enforce(data.provider === data.providerConfirm).isTruthy();
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
	import { tenantOauth2ProviderApi } from '$lib/openapi';

	let {
		applicationId,
		tenantId,
		tenantOAuth2ProviderId,
		provider,
		onDelete
	}: DeleteTenantOAuth2ProviderProps = $props();

	let providerConfirm = $state('');
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
		suite({ provider, providerConfirm }, Array.from(fields)).done((r) => {
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
			providerConfirm = providerConfirm.trim();
			validateAll();
			if (result.isValid()) {
				await tenantOauth2ProviderApi.deleteTenantOauth2Provider(
					tenantId,
					tenantOAuth2ProviderId,
					applicationId
				);
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
	<p>{m.tenant_oauth2_provider_delete_tenant_oauth2_provider_description()}</p>
	<div class="mb-2">
		<input
			class="w-full {cn('providerConfirm')}"
			type="text"
			name="providerConfirm"
			placeholder={m.tenant_oauth2_provider_delete_provider_confirm({
				provider
			})}
			bind:value={providerConfirm}
			oninput={onChange}
		/>
		<InputResults name="providerConfirm" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn danger flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_oauth2_provider_delete_submit()}
		</button>
	</div>
</form>
