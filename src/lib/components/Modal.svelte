<svelte:options immutable />

<script lang="ts">
	import { portal } from 'svelte-portal';
	import X from 'lucide-svelte/dist/svelte/icons/x.svelte';
	import { createInsecureID } from '$lib/util';
	import { clickoutside } from '@svelte-put/clickoutside';

	export let onClose: () => void = () => undefined;
	export let small = false;
	export let open = false;
	export let backgroundClose = true;

	let key = createInsecureID();
	let prevOpen: boolean;
	$: if (prevOpen !== open) {
		key = createInsecureID();
		prevOpen = open;
	}

	function close() {
		open = false;
		onClose();
	}

	function onClickOutside() {
		if (!backgroundClose) {
			return;
		}
		open = false;
		onClose();
	}
</script>

<div use:portal class="relative z-[10000]" role="dialog" aria-modal="true">
	<div class="fixed inset-0 bg-black bg-opacity-25" class:hidden={!open} />
	<div class="fixed z-[10000] inset-0 overflow-y-auto" class:hidden={!open}>
		<div class="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-0">
			<div
				class="relative bg-white dark:bg-gray-900 shadow-xl sm:my-8 sm:w-full sm:max-w-lg"
				class:m-auto={small}
				use:clickoutside={{ event: 'mousedown' }}
				on:clickoutside={onClickOutside}
			>
				<div class="flex flex-row flex-shrink items-start justify-between px-4 pt-4">
					<div class="flex-grow">
						{#key key}
							{#if open}
								<slot name="title" />
							{/if}
						{/key}
					</div>
					<button
						class="bg-transparent border-0 text-gray-950 dark:text-white outline-none focus:outline-none"
						on:click={close}
					>
						<div class="w-6 h-6"><X /></div>
					</button>
				</div>
				<div class="relative p-4 flex-col flex-grow">
					{#key key}
						{#if open}
							<slot />
						{/if}
					{/key}
				</div>
			</div>
		</div>
	</div>
</div>
