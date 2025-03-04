<script lang="ts" module>
	export interface NewTenantProps {
		applicationId: number;
		onCreate(tenant: Tenant): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { Algorithm, type Tenant } from '$lib/openapi/auth';
	import { tenantApi } from '$lib/openapi';
	import TenantForm from './TenantForm.svelte';

	let { applicationId, onCreate }: NewTenantProps = $props();

	let loading = $state(false);
	let valid = $state(false);
	let disabled = $derived(loading || !valid);
	let algorithm = $state<Algorithm>(Algorithm.Hs256);
	let audience = $state('');
	let clientId = $state('');
	let expiresInSeconds = $state(86400);
	let issuer = $state('');
	let privateKey = $state('');
	let publicKey = $state('');
	let refreshExpiresInSeconds = $state(604800);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onCreate(
					await tenantApi.createTenant(
						{
							algorithm,
							audience,
							clientId: clientId ? clientId : undefined,
							expiresInSeconds,
							issuer,
							privateKey: privateKey ? privateKey : undefined,
							publicKey: publicKey ? publicKey : undefined,
							refreshExpiresInSeconds
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
	<TenantForm
		bind:algorithm
		bind:audience
		bind:clientId
		bind:expiresInSeconds
		bind:issuer
		bind:privateKey
		bind:publicKey
		bind:refreshExpiresInSeconds
		bind:valid
		isNew={true}
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_new_submit()}
		</button>
	</div>
</form>
