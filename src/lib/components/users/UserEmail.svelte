<script lang="ts" module>
	import { handleError } from '$lib/errors';
	import { userApi } from '$lib/openapi';
	import type { User, UserEmail } from '$lib/openapi/auth';

	export interface UserEmailProps {
		applicationId: number;
		user: User;
		email: UserEmail;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Pencil from 'lucide-svelte/icons/pencil';
	import Trash from 'lucide-svelte/icons/trash';
	import Spinner from '../Spinner.svelte';
	import UserEmailForm from './UserEmailForm.svelte';
	import DeleteUserEmail from './DeleteUserEmail.svelte';
	import Modal from '../Modal.svelte';

	let { applicationId, user = $bindable(), email = $bindable() }: UserEmailProps = $props();

	let editEmail = $state(email.email);
	let editEmailPrimary = $state(email.primary);
	let editEmailVerified = $state(email.verified);

	let editing = $state(false);
	function onEditEmail(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		editing = !editing;
	}

	let deleting = $state(false);
	function onOpenDeleteEmail(e: Event) {
		e.preventDefault();
		e.stopPropagation();
		deleting = !deleting;
	}
	function onDeleteEmail() {
		if (email.primary) {
			user.email = null;
		} else {
			const index = user.emails.findIndex((e) => e.id === email.id);
			user.emails.splice(index, 1);
		}
	}

	let editEmailForm = $state<UserEmailForm>();
	let valid = $state(false);
	let loading = $state(false);
	let disabled = $derived(loading || !valid);
	async function onNewEmailSubmit(e: Event) {
		e.preventDefault();
		editEmailForm?.validateAll();
		if (valid) {
			try {
				loading = true;
				const updatedEmail = await userApi.updateUserEmail(
					user.id,
					email.id,
					{ email: editEmail, primary: editEmailPrimary, verified: editEmailVerified },
					applicationId
				);
				editing = false;
				if (email.primary !== updatedEmail.primary) {
					if (user.email && user.email.id !== updatedEmail.id) {
						const index = user.emails.findIndex((e) => e.id === updatedEmail.id);
						user.emails.splice(index, 1);
						user.email.primary = false;
						user.emails.push(user.email);
					}
					user.email = updatedEmail;
				} else {
					const index = user.emails.findIndex((e) => e.id === updatedEmail.id);
					if (index !== -1) {
						user.emails[index] = updatedEmail;
					}
				}
				email = updatedEmail;
			} catch (error) {
				handleError(error);
			} finally {
				loading = false;
			}
		}
	}
</script>

<div class="flex flex-row justify-between items-center mb-2" class:hidden={editing}>
	<div class="flex flex-col">
		<p class="m-0">{email.email}</p>
		<div class="flex flex-row items-center">
			<label for="primary">
				{m.user_emails_primary_label()}
				<input type="checkbox" name="primary" readonly bind:checked={email.primary} />
			</label>
			<label for="verified">
				{m.user_emails_verified_label()}
				<input type="checkbox" name="verified" readonly bind:checked={email.verified} />
			</label>
		</div>
	</div>
	<div class="flex flex-row items-center">
		<button class="btn primary icon" onclick={onEditEmail}>
			<Pencil />
		</button>
		<button class="btn danger icon ms-2" onclick={onOpenDeleteEmail}>
			<Trash />
		</button>
	</div>
</div>
<form onsubmit={onNewEmailSubmit} class:hidden={!editing}>
	<UserEmailForm
		bind:this={editEmailForm}
		bind:email={editEmail}
		bind:primary={editEmailPrimary}
		bind:verified={editEmailVerified}
		bind:valid
	/>
	<div class="flex flex-row justify-end">
		<div class="flex flex-row">
			<button class="btn secondary flex flex-shrink" onclick={onEditEmail}>
				{m.user_emails_edit_cancel()}
			</button>
			<button type="submit" class="btn primary flex flex-shrink" {disabled}>
				{#if loading}<div class="mr-2 flex flex-row justify-center">
						<div class="inline-block h-6 w-6"><Spinner /></div>
					</div>{/if}
				{m.user_emails_edit_submit()}
			</button>
		</div>
	</div>
</form>

<Modal bind:open={deleting}>
	{#snippet title()}
		<h3>
			{m.user_emails_delete_email({ email: email.email })}
		</h3>
	{/snippet}
	{#if deleting}
		<DeleteUserEmail
			{applicationId}
			userId={user.id}
			emailId={email.id}
			email={email.email}
			onDelete={onDeleteEmail}
		/>
	{/if}
</Modal>
