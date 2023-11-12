<svelte:options immutable />

<script lang="ts">
	import { fly } from 'svelte/transition';
	import { flip } from 'svelte/animate';
	import { notifications } from '$lib/stores/notifications';
	import Notification from './Notification.svelte';
</script>

<div class="fixed top-0 left-0 z-[100000] w-full">
	<div class="container flex flex-col items-center mx-auto">
		{#each $notifications as notification (notification.id)}
			<div animate:flip in:fly={{ y: -64, duration: 300 }} out:fly={{ y: -64, duration: 300 }}>
				<Notification {notification} />
			</div>
		{/each}
	</div>
</div>
