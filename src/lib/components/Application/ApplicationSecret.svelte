<svelte:options immutable />

<script lang="ts">
	import EyeOff from 'lucide-svelte/dist/svelte/icons/eye-off.svelte';
	import Eye from 'lucide-svelte/dist/svelte/icons/eye.svelte';
	import RotateCCW from 'lucide-svelte/dist/svelte/icons/rotate-ccw.svelte';
	import Modal from '../Modal.svelte';
	import { applicationApi } from '$lib/openapi';
	import type { ApplicationWithSecret } from '$lib/openapi/auth';

	export let id: string;
	export let secret: string = '';
	export let onDone: (application: ApplicationWithSecret) => void;

	let show = false;
	function toggleShow() {
		show = !show;
	}
	let loading = false;
	$: disabled = loading;

	let resetOpen = false;
	function onResetOpen() {
		resetOpen = true;
	}

	function onCancel() {
		resetOpen = false;
	}
	async function onReset() {
		try {
			loading = true;
			const application = await applicationApi.resetSecret(id);
			onDone(application);
			resetOpen = false;
		} finally {
			loading = false;
		}
	}
</script>

<div class="flex flex-col flex-grow">
	<label for="application-id">Application Id</label>
	<input
		id="application-jwt"
		class="flex flex-grow pe-8"
		type="text"
		name="jwt"
		placeholder="id"
		readonly
		value={id}
	/>
	<label for="application-secret">Secret</label>
	<div class="flex flex-row">
		<div class="flex flex-grow relative">
			{#if show}
				<input
					id="application-secret"
					class="flex flex-grow pe-8"
					type="text"
					name="secret"
					placeholder="Secret"
					readonly
					value={secret}
				/>
			{:else}
				<input
					id="application-secret"
					class="flex flex-grow pe-8"
					type="password"
					name="secret"
					placeholder="Secret"
					bind:value={secret}
				/>
			{/if}
			<button
				type="submit"
				class="btn icon absolute inset-y-0 right-0"
				on:click|preventDefault={toggleShow}
			>
				{#if show}
					<EyeOff />
				{:else}
					<Eye />
				{/if}
			</button>
		</div>
		<div class="flex flex-shrink">
			<button class="btn icon secondary" title="Reset" on:click={onResetOpen}>
				<RotateCCW />
			</button>
		</div>
	</div>
</div>

<Modal bind:open={resetOpen}>
	<h4 slot="title">Reset Application Secret</h4>
	<p>Reset Application secret? this will invalidate anything using the old secret.</p>
	<div class="flex flex-row justify-end">
		<button class="btn secondary" {disabled} on:click={onCancel}>Cancel</button>
		<button class="btn danger" {disabled} on:click={onReset}>Reset</button>
	</div>
</Modal>
