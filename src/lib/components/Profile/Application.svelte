<svelte:options immutable />

<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte';
	import type { Application } from '$lib/openapi/auth';
	import MoreVertical from 'lucide-svelte/dist/svelte/icons/more-vertical.svelte';
	import Trash from 'lucide-svelte/dist/svelte/icons/trash.svelte';

	export let application: Application;

	let open = false;
	function onRemove() {
		open = false;
	}
</script>

<div class="flex flex-row flex-grow items-center justify-between">
	<div class="flex flex-grow">
		<div class="relative">
			<h5>{application.name}</h5>
		</div>
	</div>
	<div class="flex flex-shrink">
		<Dropdown bind:open>
			<MoreVertical slot="button" />
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
			<li
				class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
				on:click={onRemove}
			>
				<Trash /><span class="ms-4">Remove</span>
			</li>
		</Dropdown>
	</div>
</div>
