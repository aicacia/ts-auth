<svelte:options immutable />

<script lang="ts" context="module">
	export type Position = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
</script>

<script lang="ts">
	import { clickoutside } from '@svelte-put/clickoutside';
	import { tick } from 'svelte';

	export let anchor: Element;
	export let position: Position = 'bottom-right';
	export let open = false;
	export let closeOnClickOutside = true;

	let child: HTMLElement;

	$: if (anchor && child && open) {
		resize();
	}

	async function resize() {
		const anchorRect = anchor.getBoundingClientRect();
		child.style.top = child.style.left = child.style.bottom = child.style.right = '';
		await tick();
		let isRightAligned = false;
		switch (position) {
			case 'top-left': {
				child.style.top = `${anchorRect.top}px`;
				child.style.left = `${anchorRect.left}px`;
				break;
			}
			case 'top-right': {
				child.style.top = `${anchorRect.top}px`;
				child.style.right = `${anchor.ownerDocument.body.offsetWidth - anchorRect.right}px`;
				isRightAligned = true;
				break;
			}
			case 'bottom-right': {
				child.style.top = `${anchorRect.bottom}px`;
				child.style.right = `${anchor.ownerDocument.body.offsetWidth - anchorRect.right}px`;
				isRightAligned = true;
				break;
			}
			case 'bottom-left': {
				child.style.top = `${anchorRect.bottom}px`;
				child.style.left = `${anchorRect.left}px`;
				break;
			}
		}
		await tick();
		const rect = child.getBoundingClientRect();
		if (rect.left < 0) {
			child.style.right = '';
			child.style.left = '0px';
		} else if (rect.right > anchor.ownerDocument.body.offsetWidth) {
			child.style.right = '0px';
			child.style.left = '';
		}
		if (rect.top < 0) {
			child.style.top = '0px';
		} else if (rect.top > anchor.ownerDocument.body.offsetHeight) {
			child.style.top = '';
			child.style.bottom = '0px';
		}
	}

	function onClickOutside() {
		if (closeOnClickOutside) {
			open = false;
		}
	}
</script>

<div
	class="absolute shadow-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none z-[1001] transition-transform"
	bind:this={child}
	use:clickoutside={{ event: 'mousedown' }}
	on:clickoutside={onClickOutside}
	role="menu"
	class:scale-0={!open}
	class:scale-100={open}
	class:origin-top-right={position === 'bottom-right'}
	class:origin-top-left={position === 'bottom-left'}
	class:origin-bottom-right={position === 'top-right'}
	class:origin-bottom-left={position === 'top-left'}
	tabindex="-1"
>
	<slot />
</div>
