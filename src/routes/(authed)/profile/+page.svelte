<svelte:options immutable />

<script lang="ts">
	import type { User } from '$lib/openapi/auth';
	import { user } from '$lib/stores/user';
	import Emails from './_Emails.svelte';
	import ResetPassword from './_ResetPassword.svelte';
	import Username from './_Username.svelte';

	$: currentUser = $user as User;
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div class="flex flex-col justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink mx-4 sm:container sm:mx-auto my-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Username user={currentUser} username={currentUser.username} />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink mx-4 sm:container sm:mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Emails user={currentUser} />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink mx-4 sm:container sm:mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<ResetPassword />
		</div>
	</div>
</div>
