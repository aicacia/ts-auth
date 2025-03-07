<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Plus from 'lucide-svelte/icons/plus';
	import ApplicationsTable from '$lib/components/applications/ApplicationsTable.svelte';

	let applicationsTable = $state<ApplicationsTable>();
</script>

<svelte:head>
	<title>{m.application_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-end">
			<button class="btn primary icon lg" onclick={applicationsTable?.onCreate}>
				<Plus />
			</button>
		</div>
		<ApplicationsTable bind:this={applicationsTable} />
	</div>
</div>
