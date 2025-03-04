<script lang="ts" module>
	export interface EditServiceAccountProps {
		applicationId: number;
		serviceAccount: ServiceAccount;
		onEdit(serviceAccount: ServiceAccount): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { ServiceAccount } from '$lib/openapi/auth';
	import { serviceAccountApi } from '$lib/openapi';
	import ServiceAccountForm from './ServiceAccountForm.svelte';

	let { applicationId, serviceAccount = $bindable(), onEdit }: EditServiceAccountProps = $props();

	let loading = $state(false);
	let valid = $state(false);
	let disabled = $derived(loading || !valid);
	let name = $state(serviceAccount.name);
	let clientId = $state(serviceAccount.clientId);
	let clientSecret = $state(serviceAccount.clientSecret);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onEdit(
					await serviceAccountApi.updateServiceAccount(
						serviceAccount.id,
						{
							name,
							clientId: clientId ? clientId : undefined,
							clientSecret: clientSecret ? clientSecret : undefined
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
	<ServiceAccountForm bind:name bind:clientId bind:clientSecret bind:valid />
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.service_account_edit_submit()}
		</button>
	</div>
</form>
