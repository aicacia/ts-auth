<script lang="ts" module>
	import type { PageData } from './$types';

	interface Props {
		data: PageData;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import ChevronLeft from 'lucide-svelte/icons/chevron-left';
	import { base } from '$app/paths';

	let { data }: Props = $props();

	let application = data.application;
</script>

<svelte:head>
	<title>{application.name}: {m.service_accounts_title()}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow-lg p-4 rounded-lg">
		<div class="flex flex-grow justify-start">
			<a class="flex flex-row items-center" href={`${base}/`}>
				<button class="btn primary icon">
					<ChevronLeft />
				</button>
				<span class="ms-2">{m.application_back()}</span>
			</a>
		</div>
	</div>
</div>
