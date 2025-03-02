<script lang="ts" module>
	export interface EditTenantProps {
		applicationId: number;
		tenant: Tenant;
		onEdit(tenant: Tenant): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { Algorithm, type Tenant } from '$lib/openapi/auth';
	import { tenantApi } from '$lib/openapi';
	import TenantForm from './TenantForm.svelte';

	let { applicationId, tenant = $bindable(), onEdit }: EditTenantProps = $props();

	let loading = $state(false);
	let valid = $state(false);
	let disabled = $derived(loading || !valid);
	let algorithm = $state<Algorithm>(tenant.algorithm);
	let audience = $state(tenant.audience);
	let clientId = $state(tenant.clientId);
	let expiresInSeconds = $state(tenant.expiresInSeconds);
	let issuer = $state(tenant.issuer);
	let privateKey = $state(tenant.privateKey);
	let publicKey = $state(tenant.publicKey);
	let refreshExpiresInSeconds = $state(tenant.refreshExpiresInSeconds);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onEdit(
					await tenantApi.updateTenant(
						tenant.id,
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
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_edit_submit()}
		</button>
	</div>
</form>
