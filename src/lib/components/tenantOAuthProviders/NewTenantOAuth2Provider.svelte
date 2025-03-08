<script lang="ts" module>
	export interface NewTenantOAuth2ProviderProps {
		applicationId: number;
		tenantId: number;
		onCreate(tenantOAuth2Provider: TenantOAuth2Provider): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { TenantOAuth2Provider } from '$lib/openapi/auth';
	import { tenantOauth2ProviderApi } from '$lib/openapi';
	import TenantOAuth2ProviderForm from './TenantOAuth2ProviderForm.svelte';

	let { applicationId, tenantId, onCreate }: NewTenantOAuth2ProviderProps = $props();

	let provider = $state<string>('google');
	let active = $state(true);
	let authUrl = $state<string | undefined>();
	let callbackUrl = $state<string | undefined>();
	let clientId = $state<string>('');
	let clientSecret = $state<string>('');
	let redirectUrl = $state<string>('');
	let scope = $state<string | undefined>();
	let tokenUrl = $state<string | undefined>();

	let loading = $state(false);
	let disabled = $derived(loading);
	let valid = $state(false);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onCreate(
					await tenantOauth2ProviderApi.createTenantOauth2Provider(
						tenantId,
						{
							provider,
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
		isNew={true}
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_oauth2_provider_new_submit()}
		</button>
	</div>
</form>
