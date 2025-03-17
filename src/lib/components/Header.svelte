<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Dropdown from '$lib/components/Dropdown.svelte';
	import { signOut, token } from '$lib/stores/token.svelte';
	import LogIn from 'lucide-svelte/icons/log-in';
	import LogOut from 'lucide-svelte/icons/log-out';
	import Lock from 'lucide-svelte/icons/lock';
	import Server from 'lucide-svelte/icons/server';
	import ServerOff from 'lucide-svelte/icons/server-off';
	import Plus from 'lucide-svelte/icons/plus';
	import { page } from '$app/state';
	import { api, clearApi } from '$lib/stores/api.svelte';
	import { application, setApplication } from '$lib/stores/application.svelte';
	import Modal from './Modal.svelte';
	import ApplicationsTable from './applications/ApplicationsTable.svelte';
	import type { Application } from '$lib/openapi/auth';

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

	let open = $state(false);
	function onGoto() {
		open = false;
	}

	let applicationSelectOpen = $state(false);
	function onOpenApplicationSelect() {
		applicationSelectOpen = true;
	}

	let applicationsTable = $state<ApplicationsTable>();
	async function onApplicationSelect(application: Application) {
		await setApplication(application);
		applicationSelectOpen = false;
	}
</script>

<div
	class="flex flex-shrink flex-row justify-between border-b border-gray-100 bg-white dark:border-gray-900 dark:bg-gray-800"
>
	<div class="ms-2 flex flex-shrink flex-row items-center justify-center">
		<a class="btn icon" href={`${base}/`}>
			<Lock />
		</a>
		<button class="btn primary ms-2" onclick={onOpenApplicationSelect}>
			{#if application?.current}
				{application.current.name}
			{:else}
				{m.application_select()}
			{/if}
		</button>
	</div>
	<div class="me-2 flex flex-shrink flex-row">
		<div class="flex flex-col content-center justify-center m-1">
			<Dropdown bind:open>
				{#snippet button()}
					<button class="btn primary icon flex">
						{#if api.connected}
							<Server />
						{:else}
							<ServerOff />
						{/if}
					</button>
				{/snippet}
				{#if api.connected}
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
				{#if token.validToken}
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

<Modal bind:open={applicationSelectOpen}>
	{#snippet title()}
		<div class="flex flex-grow justify-between">
			<h3>{m.application_select()}</h3>
			<div class="flex flex-row justify-center items-start">
				<button class="btn primary icon lg" onclick={applicationsTable?.onCreate}>
					<Plus />
				</button>
			</div>
		</div>
	{/snippet}
	<ApplicationsTable onSelect={onApplicationSelect} bind:this={applicationsTable} />
</Modal>

<style lang="postcss">
	li.active,
	a.active {
		@apply bg-black bg-opacity-10;
	}
</style>
