<script lang="ts" module>
	export interface TenantOAuth2ProvidersTableProps {
		applicationId: number;
		tenantId: number;
		tenant: Tenant;
	}
</script>

<script lang="ts">
	import type { Tenant, TenantOAuth2Provider } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import NewTenantOAuth2Provider from './NewTenantOAuth2Provider.svelte';
	import DeleteTenantOAuth2Provider from './DeleteTenantOAuth2Provider.svelte';
	import EditTenantOAuth2Provider from './EditTenantOAuth2Provider.svelte';
	import { base } from '$app/paths';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	let { applicationId, tenantId, tenant }: TenantOAuth2ProvidersTableProps = $props();

	let createTenantOAuth2ProviderOpen = $state(false);
	export function onCreate() {
		createTenantOAuth2ProviderOpen = true;
	}
	function onCreateTenantOAuth2Provider(tenantOAuth2Provider: TenantOAuth2Provider) {
		tenant.oauth2Providers.unshift(tenantOAuth2Provider);
		createTenantOAuth2ProviderOpen = false;
	}

	let editTenantOAuth2Provider = $state<TenantOAuth2Provider | undefined>();
	let editTenantOAuth2ProviderOpen = $state(false);
	function createOnEdit(tenantOAuth2Provider: TenantOAuth2Provider) {
		return () => {
			editTenantOAuth2Provider = tenantOAuth2Provider;
			editTenantOAuth2ProviderOpen = true;
		};
	}

	function onEditTenantOAuth2Provider(tenantOAuth2Provider: TenantOAuth2Provider) {
		const index = tenant.oauth2Providers.findIndex((oa) => oa.id === tenantOAuth2Provider?.id);
		if (index !== -1) {
			tenant.oauth2Providers[index] = tenantOAuth2Provider;
		}
		editTenantOAuth2Provider = undefined;
		editTenantOAuth2ProviderOpen = false;
	}

	let deleteTenantOAuth2Provider = $state<TenantOAuth2Provider | undefined>();
	let deleteTenantOAuth2ProviderOpen = $state(false);
	function createOnDelete(tenantOAuth2Provider: TenantOAuth2Provider) {
		return () => {
			deleteTenantOAuth2Provider = tenantOAuth2Provider;
			deleteTenantOAuth2ProviderOpen = true;
		};
	}

	function onDeleteTenantOAuth2Provider() {
		const index = tenant.oauth2Providers.findIndex(
			(oa) => oa.id === deleteTenantOAuth2Provider?.id
		);
		if (index !== -1) {
			tenant.oauth2Providers.splice(index, 1);
		}
		deleteTenantOAuth2Provider = undefined;
		deleteTenantOAuth2ProviderOpen = false;
	}
</script>

<table class="table-auto w-full">
	<thead>
		<tr class="text-left border-b">
			<th>{m.tenant_oauth2_provider_table_id_label()}</th>
			<th>{m.tenant_oauth2_provider_table_provider_label()}</th>
			<th>{m.tenant_oauth2_provider_table_updated_ts_label()}</th>
			<th>{m.tenant_oauth2_provider_table_created_ts_label()}</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each tenant.oauth2Providers as oauth2Provider, index (oauth2Provider.id)}
			<tr class="group" class:border-b={index < tenant.oauth2Providers.length - 1}>
				<td>{oauth2Provider.id}</td>
				<td>{oauth2Provider.provider}</td>
				<td>{oauth2Provider.updatedAt.toLocaleString()}</td>
				<td>{oauth2Provider.createdAt.toLocaleString()}</td>
				<td class="flex justify-end">
					<div class="flex flex-shrink">
						<Dropdown position="top-right" anchorPosition="bottom-right">
							{#snippet button()}
								<button class="btn secondary icon lg">
									<EllipsisVertical />
								</button>
							{/snippet}
							<oa
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								href={`${base}/applications/${applicationId}/tenant-oauth2-providers/${oauth2Provider.id}/oauth2-providers`}
							>
								<ExternalLink /><span class="ms-4">{m.tenant_oauth2_provider_title()}</span>
							</oa>
							<button
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								onclick={createOnEdit(oauth2Provider)}
							>
								<Pencil /><span class="ms-4">{m.tenant_edit()}</span>
							</button>
							<button
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								onclick={createOnDelete(oauth2Provider)}
							>
								<Trash /><span class="ms-4">{m.tenant_delete()}</span>
							</button>
						</Dropdown>
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<Modal bind:open={createTenantOAuth2ProviderOpen}>
	{#snippet title()}
		<h3>{m.tenant_new_tenant()}</h3>
	{/snippet}
	<NewTenantOAuth2Provider {applicationId} {tenantId} onCreate={onCreateTenantOAuth2Provider} />
</Modal>

<Modal bind:open={editTenantOAuth2ProviderOpen}>
	{#snippet title()}
		<h3>{m.tenant_edit_tenant({ issuer: editTenantOAuth2Provider?.provider || '' })}</h3>
	{/snippet}
	{#if editTenantOAuth2Provider}
		<EditTenantOAuth2Provider
			{applicationId}
			{tenantId}
			tenantOAuth2Provider={editTenantOAuth2Provider}
			onEdit={onEditTenantOAuth2Provider}
		/>
	{/if}
</Modal>

<Modal bind:open={deleteTenantOAuth2ProviderOpen}>
	{#snippet title()}
		<h3>{m.tenant_delete_tenant({ issuer: deleteTenantOAuth2Provider?.provider || '' })}</h3>
	{/snippet}
	{#if deleteTenantOAuth2Provider}
		<DeleteTenantOAuth2Provider
			{applicationId}
			{tenantId}
			tenantOAuth2ProviderId={deleteTenantOAuth2Provider.id}
			provider={deleteTenantOAuth2Provider.provider}
			onDelete={onDeleteTenantOAuth2Provider}
		/>
	{/if}
</Modal>
