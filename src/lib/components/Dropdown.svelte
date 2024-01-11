<svelte:options immutable />

<script lang="ts">
	import Popup from './Popup.svelte';

	export let name = '';
	export let open = false;

	function toggle(e: Event) {
		e.stopPropagation();
		open = !open;
	}

	let anchor: HTMLDivElement;
</script>

<div class="flex flex-col static" bind:this={anchor}>
	<button type="button" aria-label={name} class="flex-grow btn icon primary" on:click={toggle}>
		<slot name="button" />
	</button>
	<Popup {anchor} {open}>
		<slot />
	</Popup>
</div>
