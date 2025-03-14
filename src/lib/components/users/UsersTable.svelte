<script lang="ts" module>
	const DEFAULT_SIZE = 20;

	export interface UsersTableProps {
		applicationId: number;
		users?: User[];
	}
</script>

<script lang="ts">
	import { userApi } from '$lib/openapi';
	import type { User, UserPagination } from '$lib/openapi/auth';
	import * as m from '$lib/paraglide/messages';
	import { onMount } from 'svelte';
	import Pencil from 'lucide-svelte/icons/pencil';
	import EllipsisVertical from 'lucide-svelte/icons/ellipsis-vertical';
	import Trash from 'lucide-svelte/icons/trash';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import Modal from '$lib/components/Modal.svelte';
	import NewUser from '$lib/components/users/NewUser.svelte';
	import DeleteUser from '$lib/components/users/DeleteUser.svelte';
	import EditUserProfile from '$lib/components/users/EditUserProfile.svelte';

	let { applicationId, users = $bindable([]) }: UsersTableProps = $props();

	let page = $state(0);
	let hasMore = $state(true);
	let loading = $state(false);

	onMount(loadMore);

	export async function loadMore() {
		if (!hasMore || loading) {
			return;
		}
		let pagniation: UserPagination;
		loading = true;
		try {
			pagniation = await userApi.allUsers(page * DEFAULT_SIZE, DEFAULT_SIZE, applicationId);
		} finally {
			loading = false;
		}
		hasMore = pagniation.hasMore;
		page += 1;
		users.push(...pagniation.items);
	}

	let createUserOpen = $state(false);
	export function onCreate() {
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
				<td
					>{#if user.active}{m.user_table_true()}{:else}{m.user_table_false()}{/if}</td
				>
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

<Modal bind:open={createUserOpen}>
	{#snippet title()}
		<h3>{m.user_new_user()}</h3>
	{/snippet}
	<NewUser {applicationId} onCreate={onCreateUser} />
</Modal>

<Modal bind:open={editUserOpen}>
	{#snippet title()}
		<h3>{m.user_edit_user({ username: editUser?.username || '' })}</h3>
	{/snippet}
	{#if editUser}
		<EditUserProfile {applicationId} user={editUser} onEdit={onEditUser} />
	{/if}
</Modal>

<Modal bind:open={deleteUserOpen}>
	{#snippet title()}
		<h3>{m.user_delete_user({ username: deleteUser?.username || '' })}</h3>
	{/snippet}
	{#if deleteUser}
		<DeleteUser
			{applicationId}
			userId={deleteUser.id}
			username={deleteUser.username}
			onDelete={onDeleteUser}
		/>
	{/if}
</Modal>
