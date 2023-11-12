<svelte:options immutable />

<script lang="ts">
	import Popup from './Popup.svelte';
	import { clickoutside } from '@svelte-put/clickoutside';

	export let open = false;

	function toggle() {
		open = !open;
	}

	function onClickOutside() {
		open = false;
	}

	let anchor: HTMLDivElement;
</script>

<div
	class="flex flex-col static"
	bind:this={anchor}
	use:clickoutside={{ event: 'mousedown' }}
	on:clickoutside={onClickOutside}
>
	<button type="button" class="flex-grow btn icon primary" on:click={toggle}>
		<slot name="button" />
	</button>
	<Popup {anchor} {open}>
		<slot />
	</Popup>
</div>
