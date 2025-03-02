<script lang="ts" module>
	const DEFAULT_SIZE = 20;
</script>

<script lang="ts">
	import { applicationApi } from '$lib/openapi';
	import type { Application } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import Plus from 'lucide-svelte/icons/plus';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import ExternalLink from 'lucide-svelte/icons/external-link';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { base } from '$app/paths';
	import Modal from '$lib/components/Modal.svelte';
	import NewApplication from '$lib/components/applications/NewApplication.svelte';
	import DeleteApplication from '$lib/components/applications/DeleteApplication.svelte';
	import EditApplication from '$lib/components/applications/EditApplication.svelte';

	let applications = $state<Application[]>([]);
	let page = $state(0);
	let hasMore = $state(true);

	onMount(loadMore);

	async function loadMore() {
		if (!hasMore) {
			return;
		}
		const pagniation = await applicationApi.allApplications(page * DEFAULT_SIZE, DEFAULT_SIZE);
		hasMore = pagniation.hasMore;
		page += 1;
		applications.push(...pagniation.items);
	}

	let createApplicationOpen = $state(false);
	function onCreate() {
		createApplicationOpen = true;
	}
	function onCreateApplication(application: Application) {
		applications.unshift(application);
		createApplicationOpen = false;
	}

	let editApplication = $state<Application | undefined>();
	let editApplicationOpen = $state(false);
	function createOnEdit(application: Application) {
		return () => {
			editApplication = application;
			editApplicationOpen = true;
		};
	}

	function onEditApplication(application: Application) {
		const index = applications.findIndex((a) => a.id === application?.id);
		if (index !== -1) {
			applications[index] = application;
		}
		editApplication = undefined;
		editApplicationOpen = false;
	}

	let deleteApplication = $state<Application | undefined>();
	let deleteApplicationOpen = $state(false);
	function createOnDelete(application: Application) {
		return () => {
			deleteApplication = application;
			deleteApplicationOpen = true;
		};
	}

	function onDeleteApplication() {
		const index = applications.findIndex((a) => a.id === deleteApplication?.id);
		if (index !== -1) {
			applications.splice(index, 1);
		}
		deleteApplication = undefined;
		deleteApplicationOpen = false;
	}
</script>

<svelte:head>
	<title>{m.application_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-end">
			<button class="btn primary icon lg" onclick={onCreate}>
				<Plus />
			</button>
		</div>
		<table class="table-auto w-full">
			<thead>
				<tr class="text-left border-b">
					<th>{m.application_table_id_label()}</th>
					<th>{m.application_table_name_label()}</th>
					<th>{m.application_table_updated_ts_label()}</th>
					<th>{m.application_table_created_ts_label()}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each applications as application, index (application.id)}
					<tr class="group" class:border-b={index < applications.length - 1}>
						<td>{application.id}</td>
						<td>{application.name}</td>
						<td>{application.updatedAt.toLocaleString()}</td>
						<td>{application.createdAt.toLocaleString()}</td>
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
										href={`${base}/applications/${application.id}/users`}
									>
										<ExternalLink /><span class="ms-4">{m.application_open_users()}</span>
									</a>
									<a
										class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
										href={`${base}/applications/${application.id}/service-accounts`}
									>
										<ExternalLink /><span class="ms-4">{m.application_open_service_accounts()}</span
										>
									</a>
									<a
										class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
										href={`${base}/applications/${application.id}/tenants`}
									>
										<ExternalLink /><span class="ms-4">{m.application_open_tenants()}</span>
									</a>
									<button
										class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
										onclick={createOnEdit(application)}
									>
										<Pencil /><span class="ms-4">{m.application_edit()}</span>
									</button>
									<button
										class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
										onclick={createOnDelete(application)}
									>
										<Trash /><span class="ms-4">{m.application_delete()}</span>
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

<Modal bind:open={createApplicationOpen}>
	{#snippet title()}
		<h3>{m.application_new_application()}</h3>
	{/snippet}
	<NewApplication onCreate={onCreateApplication} />
</Modal>

<Modal bind:open={editApplicationOpen}>
	{#snippet title()}
		<h3>{m.application_edit_application({ name: editApplication?.name || '' })}</h3>
	{/snippet}
	{#if editApplication}
		<EditApplication
			applicationId={editApplication.id}
			name={editApplication.name}
			onEdit={onEditApplication}
		/>
	{/if}
</Modal>

<Modal bind:open={deleteApplicationOpen}>
	{#snippet title()}
		<h3>{m.application_delete_application({ name: deleteApplication?.name || '' })}</h3>
	{/snippet}
	{#if deleteApplication}
		<DeleteApplication
			applicationId={deleteApplication.id}
			name={deleteApplication.name}
			onDelete={onDeleteApplication}
		/>
	{/if}
</Modal>
