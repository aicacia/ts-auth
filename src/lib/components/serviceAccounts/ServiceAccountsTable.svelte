<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface ServiceAccountTableProps {
		applicationId: number;
		serviceAccounts?: ServiceAccount[];
	}
</script>

<script lang="ts">
	import { serviceAccountApi } from '$lib/openapi';
	import type { ServiceAccount, ServiceAccountPagination } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import CreateServiceAccount from '$lib/components/serviceAccounts/CreateServiceAccount.svelte';
	import NewServiceAccount from '$lib/components/serviceAccounts/NewServiceAccount.svelte';
	import DeleteServiceAccount from '$lib/components/serviceAccounts/DeleteServiceAccount.svelte';
	import EditServiceAccount from '$lib/components/serviceAccounts/EditServiceAccount.svelte';

	let { applicationId, serviceAccounts = $bindable([]) }: ServiceAccountTableProps = $props();

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
			serviceAccounts = [];
			loadMore();
		}
	});

	async function loadMore() {
		if (!hasMore || loading) {
			return;
		}
		let pagniation: ServiceAccountPagination;
		loading = true;
		try {
			pagniation = await serviceAccountApi.allServiceAccounts(
				page * DEFAULT_SIZE,
				DEFAULT_SIZE,
				applicationId
			);
		} finally {
			loading = false;
		}
		hasMore = pagniation.hasMore;
		page += 1;
		serviceAccounts.push(...pagniation.items);
	}

	let createServiceAccountOpen = $state(false);
	export function onCreate() {
		createServiceAccountOpen = true;
	}
	function onCreateServiceAccount(serviceAccount: ServiceAccount) {
		newServiceAccountOpen = true;
		newServiceAccount = serviceAccount;
		createServiceAccountOpen = false;
	}

	let newServiceAccountOpen = $state(false);
	let newServiceAccount = $state<ServiceAccount | undefined>();
	function onNewServiceAccount() {
		if (newServiceAccount) {
			delete newServiceAccount.clientSecret;
			serviceAccounts.unshift(newServiceAccount);
			newServiceAccount = undefined;
			newServiceAccountOpen = false;
		}
	}

	let editServiceAccount = $state<ServiceAccount | undefined>();
	let editServiceAccountOpen = $state(false);
	function createOnEdit(serviceAccount: ServiceAccount) {
		return () => {
			editServiceAccount = serviceAccount;
			editServiceAccountOpen = true;
		};
	}

	function onEditServiceAccount(serviceAccount: ServiceAccount) {
		const index = serviceAccounts.findIndex((a) => a.id === serviceAccount?.id);
		if (index !== -1) {
			serviceAccounts[index] = serviceAccount;
		}
		editServiceAccount = undefined;
		editServiceAccountOpen = false;
	}

	let deleteServiceAccount = $state<ServiceAccount | undefined>();
	let deleteServiceAccountOpen = $state(false);
	function createOnDelete(serviceAccount: ServiceAccount) {
		return () => {
			deleteServiceAccount = serviceAccount;
			deleteServiceAccountOpen = true;
		};
	}

	function onDeleteServiceAccount() {
		const index = serviceAccounts.findIndex((a) => a.id === deleteServiceAccount?.id);
		if (index !== -1) {
			serviceAccounts.splice(index, 1);
		}
		deleteServiceAccount = undefined;
		deleteServiceAccountOpen = false;
	}
</script>

<table class="table-auto w-full">
	<thead>
		<tr class="text-left border-b">
			<th>{m.service_account_table_id_label()}</th>
			<th>{m.service_account_table_name_label()}</th>
			<th>{m.service_account_table_client_id_label()}</th>
			<th>{m.service_account_table_updated_ts_label()}</th>
			<th>{m.service_account_table_created_ts_label()}</th>
			<th></th>
		</tr>
	</thead>
	<tbody>
		{#each serviceAccounts as serviceAccount, index (serviceAccount.id)}
			<tr class="group" class:border-b={index < serviceAccounts.length - 1}>
				<td>{serviceAccount.id}</td>
				<td>{serviceAccount.name}</td>
				<td>{serviceAccount.clientId}</td>
				<td>{serviceAccount.updatedAt.toLocaleString()}</td>
				<td>{serviceAccount.createdAt.toLocaleString()}</td>
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
								onclick={createOnEdit(serviceAccount)}
							>
								<Pencil /><span class="ms-4">{m.service_account_edit()}</span>
							</button>
							<button
								class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
								onclick={createOnDelete(serviceAccount)}
							>
								<Trash /><span class="ms-4">{m.service_account_delete()}</span>
							</button>
						</Dropdown>
					</div>
				</td>
			</tr>
		{/each}
	</tbody>
</table>

<Modal bind:open={createServiceAccountOpen}>
	{#snippet title()}
		<h3>{m.service_account_new_service_account()}</h3>
	{/snippet}
	<CreateServiceAccount {applicationId} onCreate={onCreateServiceAccount} />
</Modal>

<Modal bind:open={newServiceAccountOpen} onClose={onNewServiceAccount}>
	{#snippet title()}
		<h3>{m.service_account_label()}</h3>
	{/snippet}
	{#if newServiceAccount}
		<NewServiceAccount serviceAccount={newServiceAccount} />
	{/if}
</Modal>

<Modal bind:open={editServiceAccountOpen}>
	{#snippet title()}
		<h3>{m.service_account_edit_service_account({ name: editServiceAccount?.name || '' })}</h3>
	{/snippet}
	{#if editServiceAccount}
		<EditServiceAccount
			{applicationId}
			serviceAccount={editServiceAccount}
			onEdit={onEditServiceAccount}
		/>
	{/if}
</Modal>

<Modal bind:open={deleteServiceAccountOpen}>
	{#snippet title()}
		<h3>
			{m.service_account_delete_service_account({ name: deleteServiceAccount?.name || '' })}
		</h3>
	{/snippet}
	{#if deleteServiceAccount}
		<DeleteServiceAccount
			{applicationId}
			serviceAccountId={deleteServiceAccount.id}
			name={deleteServiceAccount.name}
			onDelete={onDeleteServiceAccount}
		/>
	{/if}
</Modal>
