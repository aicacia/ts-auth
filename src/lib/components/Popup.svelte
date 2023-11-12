<svelte:options immutable />

<script lang="ts" context="module">
	export type Position = 'top-left' | 'top-right' | 'bottom-right' | 'bottom-left';
</script>

<script lang="ts">
	export let anchor: HTMLElement;
	export let position: Position = 'bottom-right';
	export let open = false;

	let child: HTMLElement;

	$: if (anchor && child && open) {
		const anchorRect = anchor.getBoundingClientRect();
		switch (position) {
			case 'top-left': {
				child.style.top = `${anchorRect.top}px`;
				child.style.left = `${anchorRect.left}px`;
				break;
			}
			case 'top-right': {
				child.style.top = `${anchorRect.top}px`;
				child.style.right = `${anchor.ownerDocument.body.offsetWidth - anchorRect.right}px`;
				break;
			}
			case 'bottom-right': {
				child.style.top = `${anchorRect.bottom}px`;
				child.style.right = `${anchor.ownerDocument.body.offsetWidth - anchorRect.right}px`;
				break;
			}
			case 'bottom-left': {
				child.style.top = `${anchorRect.bottom}px`;
				child.style.left = `${anchorRect.left}px`;
				break;
			}
		}
	}
</script>

<div
	class="absolute shadow-md border border-gray-300 dark:border-gray-600 bg-gray-50 dark:bg-gray-700 focus:outline-none z-[1001]"
	bind:this={child}
	role="menu"
	class:scale-0={!open}
	class:scale-100={open}
	tabindex="-1"
>
	<slot />
</div>
