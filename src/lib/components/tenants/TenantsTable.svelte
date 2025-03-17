<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface TenantsTableProps {
		applicationId: number;
		tenants?: Tenant[];
	}
</script>

<script lang="ts">
	import { tenantApi } from '$lib/openapi';
	import type { Tenant, TenantPagination } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import NewTenant from '$lib/components/tenants/NewTenant.svelte';
	import DeleteTenant from '$lib/components/tenants/DeleteTenant.svelte';
	import EditTenant from '$lib/components/tenants/EditTenant.svelte';
	import { base } from '$app/paths';
	import ExternalLink from 'lucide-svelte/icons/external-link';

	let { applicationId, tenants = $bindable([]) }: TenantsTableProps = $props();

	let page = $state(0);
	let hasMore = $state(true);
	let loading = $state(false);

	let lastApplicationId = $state<number | undefined>();
	$effect(() => {
		if (lastApplicationId !== applicationId) {
			lastApplicationId = applicationId;
			page = 0;
			hasMore = true;
			loading = false;
			tenants = [];
			loadMore();
		}
	});

	async function loadMore() {
		if (!hasMore || loading) {
			return;
		}
		let pagniation: TenantPagination;
		loading = true;
		try {
			pagniation = await tenantApi.allTenants(
				page * DEFAULT_SIZE,
				DEFAULT_SIZE,
				true,
				applicationId
			);
		} finally {
			loading = false;
		}
		hasMore = pagniation.hasMore;
		page += 1;
		tenants.push(...pagniation.items);
	}

	let createTenantOpen = $state(false);
	export function onCreate() {
		createTenantOpen = true;
	}
	function onCreateTenant(tenant: Tenant) {
		tenants.unshift(tenant);
		createTenantOpen = false;
	}

	let editTenant = $state<Tenant | undefined>();
	let editTenantOpen = $state(false);
	function createOnEdit(tenant: Tenant) {
		return () => {
			editTenant = tenant;
			editTenantOpen = true;
		};
	}

	function onEditTenant(tenant: Tenant) {
		const index = tenants.findIndex((a) => a.id === tenant?.id);
		if (index !== -1) {
			tenants[index] = tenant;
		}
		editTenant = undefined;
		editTenantOpen = false;
	}

	let deleteTenant = $state<Tenant | undefined>();
	let deleteTenantOpen = $state(false);
	function createOnDelete(tenant: Tenant) {
		return () => {
			deleteTenant = tenant;
			deleteTenantOpen = true;
		};
	}

	function onDeleteTenant() {
		const index = tenants.findIndex((a) => a.id === deleteTenant?.id);
		if (index !== -1) {
			tenants.splice(index, 1);
		}
		deleteTenant = undefined;
		deleteTenantOpen = false;
	}
</script>

<table class="table-auto w-full">
	<thead>
		<tr class="text-left border-b">
			<th>{m.tenant_table_id_label()}</th>
			<th>{m.tenant_table_issuer_label()}</th>
			<th>{m.tenant_table_client_id_label()}</th>
			<th>{m.tenant_table_updated_ts_label()}</th>
			<th>{m.tenant_table_created_ts_label()}</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each tenants as tenant, index (tenant.id)}
			<tr class="group" class:border-b={index < tenants.length - 1}>
				<td>{tenant.id}</td>
				<td>{tenant.issuer}</td>
				<td>{tenant.clientId}</td>
				<td>{tenant.updatedAt.toLocaleString()}</td>
				<td>{tenant.createdAt.toLocaleString()}</td>
				<td class="flex justify-end">
					<div class="flex flex-shrink">
						<Dropdown position="top-right" anchorPosition="bottom-right">
							{#snippet button()}
								<button class="btn secondary icon lg">
									<EllipsisVertical />
								</button>
							{/snippet}
							<a
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								href={`${base}/applications/${applicationId}/tenants/${tenant.id}/oauth2-providers`}
							>
								<ExternalLink /><span class="ms-4">{m.tenant_oauth2_provider_title()}</span>
							</a>
							<button
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								onclick={createOnEdit(tenant)}
							>
								<Pencil /><span class="ms-4">{m.tenant_edit()}</span>
							</button>
							<button
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								onclick={createOnDelete(tenant)}
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

<Modal bind:open={createTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_new_tenant()}</h3>
	{/snippet}
	<NewTenant {applicationId} onCreate={onCreateTenant} />
</Modal>

<Modal bind:open={editTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_edit_tenant({ issuer: editTenant?.issuer || '' })}</h3>
	{/snippet}
	{#if editTenant}
		<EditTenant {applicationId} tenant={editTenant} onEdit={onEditTenant} />
	{/if}
</Modal>

<Modal bind:open={deleteTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_delete_tenant({ issuer: deleteTenant?.issuer || '' })}</h3>
	{/snippet}
	{#if deleteTenant}
		<DeleteTenant
			{applicationId}
			tenantId={deleteTenant.id}
			issuer={deleteTenant.issuer}
			onDelete={onDeleteTenant}
		/>
	{/if}
</Modal>
