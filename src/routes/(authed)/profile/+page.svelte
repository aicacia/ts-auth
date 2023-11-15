<svelte:options immutable />

<script lang="ts">
	import type { Application } from '$lib/openapi/auth';
	import { user } from '$lib/stores/user';
	import { onMount } from 'svelte';
	import { userApi } from '$lib/openapi';
	import { handleError } from '$lib/errors';
	import Profile from '$lib/components/Profile/Profile.svelte';

	let applications: Application[] = [];
	onMount(async () => {
		try {
			applications = await userApi.applications();
		} catch (error) {
			await handleError(error);
		}
	});
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

{#if $user}
	<Profile user={$user} {applications} />
{/if}
