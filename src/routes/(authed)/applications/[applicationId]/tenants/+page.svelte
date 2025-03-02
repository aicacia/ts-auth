<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface Props {
		data: PageData;
	}
</script>

<script lang="ts">
	import { tenantApi } from '$lib/openapi';
	import type { Tenant } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { base } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';
	import NewTenant from '$lib/components/tenants/NewTenant.svelte';
	import DeleteTenant from '$lib/components/tenants/DeleteTenant.svelte';
	import EditTenant from '$lib/components/tenants/EditTenant.svelte';
	import type { PageData } from './$types';

	let { data }: Props = $props();

	let tenants = $state<Tenant[]>([]);
	let page = $state(0);
	let hasMore = $state(true);

	onMount(loadMore);

	async function loadMore() {
		if (!hasMore) {
			return;
		}
		const pagniation = await tenantApi.allTenants(
			page * DEFAULT_SIZE,
			DEFAULT_SIZE,
			true,
			data.applicationId
		);
		hasMore = pagniation.hasMore;
		page += 1;
		tenants.push(...pagniation.items);
	}

	let createTenantOpen = $state(false);
	function onCreate() {
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

<svelte:head>
	<title>{m.tenant_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-between">
			<a class="flex flex-row items-center" href={`${base}/`}>
				<button class="btn primary icon">
					<ChevronLeft />
				</button>
				<span class="ms-2">{m.tenant_back()}</span>
			</a>

			<button class="btn primary icon lg" onclick={onCreate}>
				<Plus />
			</button>
		</div>
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
	</div>
</div>

<Modal bind:open={createTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_new_tenant()}</h3>
	{/snippet}
	<NewTenant applicationId={data.applicationId} onCreate={onCreateTenant} />
</Modal>

<Modal bind:open={editTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_edit_tenant({ issuer: editTenant?.issuer || '' })}</h3>
	{/snippet}
	{#if editTenant}
		<EditTenant applicationId={data.applicationId} tenant={editTenant} onEdit={onEditTenant} />
	{/if}
</Modal>

<Modal bind:open={deleteTenantOpen}>
	{#snippet title()}
		<h3>{m.tenant_delete_tenant({ issuer: deleteTenant?.issuer || '' })}</h3>
	{/snippet}
	{#if deleteTenant}
		<DeleteTenant
			applicationId={data.applicationId}
			tenantId={deleteTenant.id}
			issuer={deleteTenant.issuer}
			onDelete={onDeleteTenant}
		/>
	{/if}
</Modal>
