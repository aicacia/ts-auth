<svelte:options immutable />

<script lang="ts">
	import type { User } from '$lib/openapi/auth';

	export let user: User;
</script>

<h3 class="mb-1">Emails</h3>
<div class="flex flex-col">
	{#if user.email}
		<div class="flex flex-row flex-grow items-center">
			<div class="flex flex-shrink">
				<input type="email" value={user.email.email} readonly />
			</div>
			<div class="flex flex-shrink">
				<input
					id="confirmed-email-{user.email.id}"
					type="checkbox"
					checked={user.email.confirmed}
					on:click|preventDefault
				/>
				<label for="confirmed-email-{user.email.id}">Primary</label>
			</div>
			<div class="flex flex-grow">
				<input
					id="confirmed-email-{user.email.id}"
					type="checkbox"
					checked={user.email.confirmed}
					on:click|preventDefault
				/>
				<label for="confirmed-email-{user.email.id}">Confirmed</label>
			</div>
		</div>
		{#if user.emails.length}
			<hr class="my-1" />
		{/if}
	{/if}
	{#each user.emails as email, index (email.id)}
		<div class="flex flex-row flex-grow items-center">
			<div class="flex flex-shrink">
				<input type="email" value={email.email} readonly />
			</div>
			<div class="flex flex-shrink">
				<input
					id="confirmed-email-{email.id}"
					type="checkbox"
					checked={email.confirmed}
					on:click|preventDefault
				/>
				<label for="confirmed-email-{email.id}">Confirmed</label>
			</div>
			<div class="flex flex-grow justify-end">
				{#if email.confirmed}
					<button class="btn primary">Set Primary</button>
				{:else}
					<button class="btn primary">Send Confirmation Email</button>
				{/if}
			</div>
		</div>
		{#if index < user.emails.length - 1}
			<hr class="my-1" />
		{/if}
	{/each}
</div>
