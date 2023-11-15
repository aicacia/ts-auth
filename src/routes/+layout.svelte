<svelte:options immutable />

<script lang="ts" context="module">
	import '../app.postcss';
	import '$lib/stores/theme';
</script>

<script lang="ts">
	import Notifications from '$lib/components/Notifications.svelte';
	import Header from '$lib/components/Header.svelte';
</script>

<div class="flex flex-col w-full h-full">
	<Header />
	<div class="flex flex-col flex-grow overflow-x-hidden overflow-y-auto">
		<slot />
	</div>
</div>

<Notifications />
