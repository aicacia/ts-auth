<script lang="ts" module>
	export interface EditTenantOAuth2ProviderProps {
		applicationId: number;
		tenantId: number;
		tenantOAuth2Provider: TenantOAuth2Provider;
		onEdit(tenantOAuth2Provider: TenantOAuth2Provider): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { TenantOAuth2Provider } from '$lib/openapi/auth';
	import { tenantOauth2ProviderApi } from '$lib/openapi';
	import TenantOAuth2ProviderForm from './TenantOAuth2ProviderForm.svelte';

	let {
		applicationId,
		tenantId,
		tenantOAuth2Provider = $bindable(),
		onEdit
	}: EditTenantOAuth2ProviderProps = $props();

	let provider = $state(tenantOAuth2Provider.provider);
	let active = $state(tenantOAuth2Provider.active);
	let authUrl = $state(tenantOAuth2Provider.authUrl);
	let callbackUrl = $state(tenantOAuth2Provider.callbackUrl);
	let clientId = $state(tenantOAuth2Provider.clientId);
	let clientSecret = $state(tenantOAuth2Provider.clientSecret);
	let redirectUrl = $state(tenantOAuth2Provider.redirectUrl);
	let scope = $state(tenantOAuth2Provider.scope);
	let tokenUrl = $state(tenantOAuth2Provider.tokenUrl);

	let loading = $state(false);
	let disabled = $derived(loading);
	let valid = $state(false);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onEdit(
					await tenantOauth2ProviderApi.updateTenantOauth2Provider(
						tenantId,
						tenantOAuth2Provider.id,
						{
							active,
							authUrl,
							callbackUrl,
							clientId,
							clientSecret,
							redirectUrl,
							scope,
							tokenUrl
						},
						applicationId
					)
				);
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form onsubmit={onSubmit}>
	<TenantOAuth2ProviderForm
		bind:valid
		bind:provider
		bind:active
		bind:authUrl
		bind:callbackUrl
		bind:clientId
		bind:clientSecret
		bind:redirectUrl
		bind:scope
		bind:tokenUrl
		isNew={false}
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_oauth2_provider_edit_submit()}
		</button>
	</div>
</form>
