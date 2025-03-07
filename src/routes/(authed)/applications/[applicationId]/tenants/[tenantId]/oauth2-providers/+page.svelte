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
	import TenantOAuth2sTable from '$lib/components/tenantOAuthProviders/TenantOAuth2sTable.svelte';

	let { data }: Props = $props();

	let tenantOAuth2sTable = $state<TenantOAuth2sTable>();
</script>

<svelte:head>
	<title>{m.tenant_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-between">
			<a
				class="flex flex-row items-center"
				href={`${base}/applications/${data.applicationId}/tenants`}
			>
				<button class="btn primary icon">
					<ChevronLeft />
				</button>
				<span class="ms-2">{m.tenant_back()}</span>
			</a>
			<button class="btn primary icon lg" onclick={tenantOAuth2sTable?.onCreate}>
				<Plus />
			</button>
		</div>
		<TenantOAuth2sTable
			bind:this={tenantOAuth2sTable}
			applicationId={data.applicationId}
			tenant={data.tenant}
		/>
	</div>
</div>
