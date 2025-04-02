<script lang="ts" module>
	export interface Props {
		data: PageData;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Plus from 'lucide-svelte/icons/plus';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import TenantsTable from '$lib/components/tenants/TenantsTable.svelte';

	let { data }: Props = $props();

	let tenantsTable = $state<TenantsTable>();
</script>

<svelte:head>
	<title>{m.tenant_title()}</title>
</svelte:head>

<div class="container mx-auto">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg m-4">
		<div class="flex flex-grow justify-between">
			<div class="flex flex-row items-center">
				<a class="flex flex-row items-center" href={`${base}/`}>
					<button class="btn primary icon">
						<ChevronLeft />
					</button>
				</a>
				<h3 class="m-0 ms-2">{data.application.name}</h3>
			</div>

			<button class="btn primary icon lg" onclick={tenantsTable?.onCreate}>
				<Plus />
			</button>
		</div>

		<TenantsTable bind:this={tenantsTable} applicationId={data.applicationId} />
	</div>
</div>
