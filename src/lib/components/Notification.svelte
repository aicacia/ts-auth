<svelte:options immutable />

<script lang="ts">
	import { removeNotification, type INotification } from '$lib/stores/notifications';
	import XCircle from 'lucide-svelte/dist/svelte/icons/x-circle.svelte';
	import CheckCircle2 from 'lucide-svelte/dist/svelte/icons/check-circle-2.svelte';
	import Info from 'lucide-svelte/dist/svelte/icons/info.svelte';
	import AlertTriangle from 'lucide-svelte/dist/svelte/icons/alert-triangle.svelte';

	export let notification: INotification;

	function onDelete() {
		removeNotification(notification.id);
	}
</script>

<button
	class="flex flex-row flex-grow items-center py-2 px-3 m-1 cursor-pointer shadow"
	class:bg-green-600={notification.type === 'success'}
	class:bg-red-600={notification.type === 'error'}
	class:bg-blue-600={notification.type === 'info'}
	class:bg-yellow-600={notification.type === 'warning'}
	on:click={onDelete}
>
	<div class="w-6 h-6 mr-2 text-white">
		{#if notification.type === 'error'}
			<XCircle />
		{:else if notification.type === 'success'}
			<CheckCircle2 />
		{:else if notification.type === 'info'}
			<Info />
		{:else if notification.type === 'warning'}
			<AlertTriangle />
		{/if}
	</div>
	<div class="text-white flex-grow text-left">{notification.message}</div>
</button>
