<svelte:options immutable />

<script lang="ts">
	import type { PageData } from './$types';
	import Pencil from 'lucide-svelte/dist/svelte/icons/pencil.svelte';

	export let data: PageData;

	$: applications = data.pagination.data;
</script>

<svelte:head>
	<title>Applications</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow p-4">
		<table class="table-auto w-full">
			<thead>
				<tr class="text-left border-b">
					<th class="">Id</th>
					<th>Name</th>
					<th>Created</th>
					<th>Updated</th>
					<th />
				</tr>
			</thead>
			<tbody>
				{#each applications as application, index (application.id)}
					<tr class="group" class:border-b={index < applications.length - 1}>
						<td>{application.id}</td>
						<td>{application.name}</td>
						<td>{application.created_at.toLocaleString()}</td>
						<td>{application.updated_at.toLocaleString()}</td>
						<td class="transition-opacity opacity-0 group-hover:opacity-100">
							<button class="btn primary icon"><Pencil /></button>
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
</div>
