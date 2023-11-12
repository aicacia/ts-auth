<svelte:options immutable />

<script lang="ts">
	import type { PageData } from './$types';
	import Emails from './_Emails.svelte';
	import ResetPassword from './_ResetPassword.svelte';
	import Username from './_Username.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>Profile</title>
</svelte:head>

<div class="flex flex-col justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink mx-4 sm:container sm:mx-auto my-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Username user={data.user} username={data.user.username} />
		</div>
	</div>
</div>
<div class="flex flex-col justify-end md:justify-start">
	<div
		class="flex flex-col flex-shrink mx-4 sm:container sm:mx-auto mb-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<div class="mb-2">
			<Emails user={data.user} />
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
