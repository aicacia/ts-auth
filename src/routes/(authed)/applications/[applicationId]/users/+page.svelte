<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface Props {
		data: PageData;
	}
</script>

<script lang="ts">
	import { userApi } from '$lib/openapi';
	import type { User } from '$lib/openapi/auth';
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
	import NewUser from '$lib/components/users/NewUser.svelte';
	import DeleteUser from '$lib/components/users/DeleteUser.svelte';
	import EditUser from '$lib/components/users/EditUser.svelte';
	import type { PageData } from './$types';

	let { data }: Props = $props();

	let users = $state<User[]>([]);
	let page = $state(0);
	let hasMore = $state(true);

	onMount(loadMore);

	async function loadMore() {
		if (!hasMore) {
			return;
		}
		const pagniation = await userApi.allUsers(
			page * DEFAULT_SIZE,
			DEFAULT_SIZE,
			data.applicationId
		);
		hasMore = pagniation.hasMore;
		page += 1;
		users.push(...pagniation.items);
	}

	let createUserOpen = $state(false);
	function onCreate() {
		createUserOpen = true;
	}
	function onCreateUser(user: User) {
		users.unshift(user);
		createUserOpen = false;
	}

	let editUser = $state<User | undefined>();
	let editUserOpen = $state(false);
	function createOnEdit(user: User) {
		return () => {
			editUser = user;
			editUserOpen = true;
		};
	}

	function onEditUser(user: User) {
		const index = users.findIndex((a) => a.id === user?.id);
		if (index !== -1) {
			users[index] = user;
		}
		editUser = undefined;
		editUserOpen = false;
	}

	let deleteUser = $state<User | undefined>();
	let deleteUserOpen = $state(false);
	function createOnDelete(user: User) {
		return () => {
			deleteUser = user;
			deleteUserOpen = true;
		};
	}

	function onDeleteUser() {
		const index = users.findIndex((a) => a.id === deleteUser?.id);
		if (index !== -1) {
			users.splice(index, 1);
		}
		deleteUser = undefined;
		deleteUserOpen = false;
	}
</script>

<svelte:head>
	<title>{m.user_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-between">
			<a class="flex flex-row items-center" href={`${base}/`}>
				<button class="btn primary icon">
					<ChevronLeft />
				</button>
				<span class="ms-2">{m.user_back()}</span>
			</a>

			<button class="btn primary icon lg" onclick={onCreate}>
				<Plus />
			</button>
		</div>
		<table class="table-auto w-full">
			<thead>
				<tr class="text-left border-b">
					<th>{m.user_table_id_label()}</th>
					<th>{m.user_table_username_label()}</th>
					<th>{m.user_table_active_label()}</th>
					<th>{m.user_table_updated_ts_label()}</th>
					<th>{m.user_table_created_ts_label()}</th>
					<th></th>
				</tr>
			</thead>
			<tbody>
				{#each users as user, index (user.id)}
					<tr class="group" class:border-b={index < users.length - 1}>
						<td>{user.id}</td>
						<td>{user.username}</td>
						<td>{user.active}</td>
						<td>{user.updatedAt.toLocaleString()}</td>
						<td>{user.createdAt.toLocaleString()}</td>
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
										onclick={createOnEdit(user)}
									>
										<Pencil /><span class="ms-4">{m.user_edit()}</span>
									</button>
									<button
										class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
										onclick={createOnDelete(user)}
									>
										<Trash /><span class="ms-4">{m.user_delete()}</span>
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

<Modal bind:open={createUserOpen}>
	{#snippet title()}
		<h3>{m.user_new_user()}</h3>
	{/snippet}
	<NewUser applicationId={data.applicationId} onCreate={onCreateUser} />
</Modal>

<Modal bind:open={editUserOpen}>
	{#snippet title()}
		<h3>{m.user_edit_user({ username: editUser?.username || '' })}</h3>
	{/snippet}
	{#if editUser}
		<EditUser applicationId={data.applicationId} user={editUser} onEdit={onEditUser} />
	{/if}
</Modal>

<Modal bind:open={deleteUserOpen}>
	{#snippet title()}
		<h3>{m.user_delete_user({ username: deleteUser?.username || '' })}</h3>
	{/snippet}
	{#if deleteUser}
		<DeleteUser
			applicationId={data.applicationId}
			userId={deleteUser.id}
			username={deleteUser.username}
			onDelete={onDeleteUser}
		/>
	{/if}
</Modal>
