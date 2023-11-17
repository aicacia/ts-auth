<svelte:options immutable />

<script lang="ts">
	import { base } from '$app/paths';
	import type { PageData } from './$types';
	import ArrowLeft from 'lucide-svelte/dist/svelte/icons/arrow-left.svelte';

	export let data: PageData;

	$: application = data.application;
</script>

<svelte:head>
	<title>Application ${application.name}</title>
</svelte:head>

<div class="container mx-auto my-4">
	<div class="bg-white dark:bg-gray-800 shadow p-4">
		<div class="flex flex-row">
			<a class="btn icon primary me-2" href={`${base}/applications`}>
				<ArrowLeft />
			</a>
			<h4>{application.name}</h4>
		</div>
	</div>
</div>
