<script lang="ts" module>
	export interface EditApplicationProps {
		applicationId: number;
		name: string;
		onEdit(application: Application): void;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { Application } from '$lib/openapi/auth';
	import { applicationApi } from '$lib/openapi';
	import ApplicationForm from './ApplicationForm.svelte';

	let { applicationId, name = $bindable(''), onEdit }: EditApplicationProps = $props();

	let valid = $state(false);
	let loading = $state(false);
	let disabled = $derived(loading || !valid);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onEdit(await applicationApi.updateApplication(applicationId, { name }));
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form onsubmit={onSubmit}>
	<ApplicationForm bind:name bind:valid />
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.application_edit_submit()}
		</button>
	</div>
</form>
