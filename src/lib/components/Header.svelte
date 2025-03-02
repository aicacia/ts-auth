<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { signOut, isValidToken } from '$lib/stores/token.svelte';
	import LogIn from 'lucide-svelte/icons/log-in';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Menu from 'lucide-svelte/icons/menu';
	import { page } from '$app/state';
	import { api, clearApi, hasApi } from '$lib/stores/api.svelte';

	async function onSignOut() {
		signOut();
		onGoto();
		await goto(`${base}/signin`);
	}

	async function onAPISignOut() {
		clearApi();
		signOut();
		onGoto();
		await goto(`${base}/api`);
	}

	let open = false;
	function onGoto() {
		open = false;
	}
</script>

<div
	class="flex flex-shrink flex-row justify-between border-b border-gray-100 bg-white dark:border-gray-900 dark:bg-gray-800"
>
	<div class="ms-2 flex flex-shrink flex-row items-center justify-center">
		<a class="btn flex flex-row items-center justify-cente text-lg leading-4 m-0" href={`${base}/`}>
			{m.app_title()}
		</a>
	</div>
	<div class="me-2 flex flex-shrink flex-row">
		<div class="flex flex-col content-center justify-center m-1">
			<Dropdown bind:open>
				{#snippet button()}
					<button class="btn primary icon flex">
						<Menu />
					</button>
				{/snippet}
				{#if hasApi()}
					<div class="flex flex-col">
						<div class="flex flex-row justify-between content-center m-1">
							<span class="mr-2">{m.api_url_label()}</span><code class="px-1 rounded bg-gray-950"
								>{api.url}</code
							>
						</div>
						<div class="flex flex-row justify-between content-center m-1">
							<span class="mr-2">{m.api_tenant_label()}</span><code class="px-1 rounded bg-gray-950"
								>{api.tenant}</code
							>
						</div>
					</div>
					<button
						class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
						onclick={onAPISignOut}
					>
						<LogOut /><span class="ms-4">{m.api_sign_out()}</span>
					</button>
				{/if}
				<hr class="my-1" />
				{#if isValidToken()}
					<button
						class="flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
						onclick={onSignOut}
					>
						<LogOut /><span class="ms-4">{m.auth_sign_out()}</span>
					</button>
				{:else}
					<a
						href={`${base}/signin`}
						class="default flex cursor-pointer flex-row justify-between p-2 hover:bg-gray-200 dark:hover:bg-gray-600"
						class:active={page.route.id === '/[locale=locale]/(redirect)/signin'}
						onclick={onGoto}
					>
						<LogIn /><span class="ms-4">{m.auth_sign_in()}</span>
					</a>
				{/if}
			</Dropdown>
		</div>
	</div>
</div>

<style lang="postcss">
	li.active,
	a.active {
		@apply bg-black bg-opacity-10;
	}
</style>
