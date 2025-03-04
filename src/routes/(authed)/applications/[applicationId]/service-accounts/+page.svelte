<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface Props {
		data: PageData;
	}
</script>

<script lang="ts">
	import { serviceAccountApi } from '$lib/openapi';
	import type { ServiceAccount } from '$lib/openapi/auth';
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
	import CreateServiceAccount from '$lib/components/serviceAccounts/CreateServiceAccount.svelte';
	import NewServiceAccount from '$lib/components/serviceAccounts/NewServiceAccount.svelte';
	import DeleteServiceAccount from '$lib/components/serviceAccounts/DeleteServiceAccount.svelte';
	import EditServiceAccount from '$lib/components/serviceAccounts/EditServiceAccount.svelte';
	import type { PageData } from './$types';

	let { data }: Props = $props();

	let serviceAccounts = $state<ServiceAccount[]>([]);
	let page = $state(0);
	let hasMore = $state(true);

	onMount(loadMore);

	async function loadMore() {
		if (!hasMore) {
			return;
		}
		const pagniation = await serviceAccountApi.allServiceAccounts(
			page * DEFAULT_SIZE,
			DEFAULT_SIZE,
			data.applicationId
		);
		hasMore = pagniation.hasMore;
		page += 1;
		serviceAccounts.push(...pagniation.items);
	}

	let createServiceAccountOpen = $state(false);
	function onCreate() {
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

<svelte:head>
	<title>{m.service_account_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-between">
			<a class="flex flex-row items-center" href={`${base}/`}>
				<button class="btn primary icon">
					<ChevronLeft />
				</button>
				<span class="ms-2">{m.service_account_back()}</span>
			</a>

			<button class="btn primary icon lg" onclick={onCreate}>
				<Plus />
			</button>
		</div>
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
	</div>
</div>

<Modal bind:open={createServiceAccountOpen}>
	{#snippet title()}
		<h3>{m.service_account_new_service_account()}</h3>
	{/snippet}
	<CreateServiceAccount applicationId={data.applicationId} onCreate={onCreateServiceAccount} />
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
			applicationId={data.applicationId}
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
			applicationId={data.applicationId}
			serviceAccountId={deleteServiceAccount.id}
			name={deleteServiceAccount.name}
			onDelete={onDeleteServiceAccount}
		/>
	{/if}
</Modal>
