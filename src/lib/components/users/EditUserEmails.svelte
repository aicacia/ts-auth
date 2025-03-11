<script lang="ts" module>
	import type { User } from '$lib/openapi/auth';

	export interface EditUserEmailsProps {
		applicationId: number;
		user: User;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Plus from 'lucide-svelte/icons/plus';
	import UserEmailForm from './UserEmailForm.svelte';
	import Spinner from '../Spinner.svelte';
	import { userApi } from '$lib/openapi';
	import { handleError } from '$lib/errors';

	let { applicationId, user = $bindable() }: EditUserEmailsProps = $props();

	function onAddEmail(e: Event) {
		e.preventDefault();
		newEmailOpen = true;
	}

	let newEmailForm = $state<UserEmailForm>();
	let newEmailOpen = $state(false);
	let newEmail = $state('');
	let newEmailPrimary = $state(false);
	let newEmailVerified = $state(false);
	let newEmailValid = $state(false);
	let newEmailLoading = $state(false);
	let newEmailDisabled = $derived(newEmailLoading || !newEmailValid);

	async function onNewEmailSubmit(e: Event) {
		e.preventDefault();
		newEmailForm?.validateAll();
		if (newEmailValid) {
			try {
				newEmailLoading = true;
				const email = await userApi.createUserEmail(
					user.id,
					{ email: newEmail, primary: newEmailPrimary, verified: newEmailVerified },
					applicationId
				);
				if (email.primary) {
					if (user.email) {
						user.emails.push(user.email);
					}
					user.email = email;
				} else {
					user.emails.push(email);
				}
			} catch (error) {
				handleError(error);
			} finally {
				newEmailLoading = false;
			}
		}
	}
</script>

<div class="flex flex-row justify-between">
	<h5>{m.user_emails_title()}</h5>
	<div class="flex flex-col justify-center">
		<button class="btn primary icon" onclick={onAddEmail}>
			<Plus />
		</button>
	</div>
</div>
{#if newEmailOpen}
	<form onsubmit={onNewEmailSubmit}>
		<UserEmailForm
			bind:this={newEmailForm}
			bind:email={newEmail}
			bind:primary={newEmailPrimary}
			bind:verified={newEmailVerified}
			bind:valid={newEmailValid}
		/>
		<div class="flex flex-row justify-end">
			<button type="submit" class="btn primary flex flex-shrink" disabled={newEmailDisabled}>
				{#if newEmailLoading}<div class="mr-2 flex flex-row justify-center">
						<div class="inline-block h-6 w-6"><Spinner /></div>
					</div>{/if}
				{m.user_emails_new_submit()}
			</button>
		</div>
	</form>
{/if}
<div class="flex flex-col">
	{#if user.email}
		<div>{user.email.email}</div>
	{/if}
	{#each user.emails as email (email.id)}
		<div>{email.email}</div>
	{/each}
</div>
