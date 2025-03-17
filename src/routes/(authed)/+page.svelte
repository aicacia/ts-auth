<script lang="ts">
	import { base } from '$app/paths';
	import * as m from '$lib/paraglide/messages';
	import { application } from '$lib/stores/application.svelte';
</script>

<svelte:head>
	<title>{m.application_title()}</title>
</svelte:head>

<div class="container mx-auto">
	{#if application.current}
		<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg m-4">
			<h3 class="m-0">{application.current.name}</h3>
			<hr class="mb-2" />
			<div class="flex flex-row">
				<a class="btn primary" href={`${base}/applications/${application.current.id}/users`}
					>{m.user_title()}</a
				>
				<a
					class="btn primary ms-2"
					href={`${base}/applications/${application.current.id}/service-accounts`}
					>{m.service_account_title()}</a
				>
				<a class="btn primary ms-2" href={`${base}/applications/${application.current.id}/tenants`}
					>{m.tenant_title()}</a
				>
			</div>
		</div>
	{:else}
		<div class="flex flex-col justify-center items-center m-4">
			<h3>{m.application_select()}</h3>
		</div>
	{/if}
</div>
