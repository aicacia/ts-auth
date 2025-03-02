<script lang="ts" module>
	import '../app.css';

	interface Props {
		children: Snippet<[]>;
	}
</script>

<script lang="ts">
	import Notifications from '$lib/components/Notifications.svelte';
	import type { Snippet } from 'svelte';
	import { ParaglideJS } from '@inlang/paraglide-sveltekit';
	import { i18n } from '$lib/i18n';
	import Header from '$lib/components/Header.svelte';

	let { children }: Props = $props();

	$effect(() => {
		document.body.classList.add('hydrated');
	});
</script>

<ParaglideJS {i18n}>
	<Header />

	{@render children()}

	<Notifications />
</ParaglideJS>
