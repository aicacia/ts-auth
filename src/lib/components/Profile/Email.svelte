<svelte:options immutable />

<script lang="ts">
	import Dropdown from '$lib/components/Dropdown.svelte';
	import type { Email } from '$lib/openapi/auth';
	import MoreVertical from 'lucide-svelte/dist/svelte/icons/more-vertical.svelte';
	import CheckCircle2 from 'lucide-svelte/dist/svelte/icons/check-circle-2.svelte';
	import Send from 'lucide-svelte/dist/svelte/icons/send.svelte';
	import Mail from 'lucide-svelte/dist/svelte/icons/mail.svelte';
	import Trash from 'lucide-svelte/dist/svelte/icons/trash.svelte';
	import { userApi } from '$lib/openapi';
	import { handleError } from '$lib/errors';
	import { createNotification } from '$lib/stores/notifications';
	import Modal from '$lib/components/Modal.svelte';
	import { setPrimaryEmail, deleteEmail, confirmEmail } from '$lib/stores/user';

	export let email: Email;
	export let primary = false;

	let open = false;

	async function onSetPrimary() {
		try {
			await setPrimaryEmail(email.id);
			open = false;
		} catch (error) {
			await handleError(error);
		}
	}
	async function onDeleteEmail() {
		try {
			await deleteEmail(email.id);
			deleteEmailOpen = false;
		} catch (error) {
			await handleError(error);
		}
	}

	let sentEmailConfirmation = false;
	let emailConfirmation: string;
	async function onSendConfirmation() {
		try {
			await userApi.sendConfirmationEmail(email.id);
			open = false;
			sentEmailConfirmation = true;
			createNotification('sent_email_confirmation', 'info');
		} catch (error) {
			await handleError(error);
		}
	}
	async function onConfirmEmail() {
		try {
			await confirmEmail(email.id, emailConfirmation.trim());
			sentEmailConfirmation = false;
			createNotification('email_confirm', 'success');
		} catch (error) {
			await handleError(error);
		}
	}

	let deleteEmailOpen = false;
	function onDeleteEmailOpen() {
		deleteEmailOpen = true;
		open = false;
	}
</script>

<div class="flex flex-row flex-grow items-center justify-between">
	<div class="flex flex-grow">
		<div class="relative">
			<input type="email" value={email.email} readonly />
			{#if email.confirmed}
				<span class="absolute top-0 right-0 mt-1 me-1 text-green-600 cursor-help" title="Confirmed"
					><CheckCircle2 size={22} /></span
				>
			{/if}
		</div>
	</div>
	{#if !primary || !email.confirmed}
		<div class="flex flex-shrink">
			<Dropdown bind:open>
				<MoreVertical slot="button" />
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				{#if !email.confirmed}
					<li
						class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						on:click={onSendConfirmation}
					>
						<Mail /><span class="ms-4">Send Confirmation Email</span>
					</li>
				{:else}
					<li
						class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
						on:click={onSetPrimary}
					>
						<Send /><span class="ms-4">Set as Primary</span>
					</li>
				{/if}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<li
					class="flex flex-row justify-between p-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-600"
					on:click={onDeleteEmailOpen}
				>
					<Trash /><span class="ms-4">Delete</span>
				</li>
			</Dropdown>
		</div>
	{/if}
</div>

<Modal bind:open={sentEmailConfirmation}>
	<h4 slot="title">Check your Email</h4>
	<form on:submit|preventDefault={onConfirmEmail}>
		<div class="flex flex-col">
			<input
				type="text"
				class="flex flex-grow"
				placeholder="Confirmation Token"
				bind:value={emailConfirmation}
			/>
		</div>
		<div class="flex flex-row justify-end mt-2">
			<button class="btn primary" type="submit">Confirm</button>
		</div>
	</form>
</Modal>

<Modal bind:open={deleteEmailOpen}>
	<h4 slot="title">Delete {email.email}?</h4>
	<form on:submit|preventDefault={onDeleteEmail}>
		<div class="flex flex-row justify-end">
			<button class="btn danger" type="submit">Delete</button>
		</div>
	</form>
</Modal>
