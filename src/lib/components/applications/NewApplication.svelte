<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface NewApplicationProps {
		onCreate(application: Application): void;
	}

	type NewApplicationForm = {
		name: string;
	};

	const createSuite = () =>
		create((data: Partial<NewApplicationForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('name', m.errors_message_required(), () => {
				enforce(data.name).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import type { Application } from '$lib/openapi/auth';
	import { applicationApi } from '$lib/openapi';
	import ApplicationForm from './ApplicationForm.svelte';

	let { onCreate }: NewApplicationProps = $props();

	let name = $state('');
	let suite = createSuite();
	let result = $state(suite.get());
	let valid = $state(false);
	let loading = $state(false);
	let disabled = $derived(loading || !valid);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onCreate(await applicationApi.createApplication({ name }));
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
			{m.application_new_submit()}
		</button>
	</div>
</form>
