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

	let { onCreate }: NewApplicationProps = $props();

	let name = $state('');
	let suite = createSuite();
	let result = $state(suite.get());
	let loading = $state(false);
	let disabled = $derived(loading);
	let cn = $derived(
		classNames(result, {
			untested: 'untested',
			tested: 'tested',
			invalid: 'invalid',
			valid: 'valid',
			warning: 'warning'
		})
	);

	const fields = new Set<string>();
	const validate = debounce(() => {
		suite({ name }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('name');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			name = name.trim();
			validateAll();
			if (result.isValid()) {
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
	<div class="mb-2">
		<input
			class="w-full {cn('name')}"
			type="text"
			name="name"
			placeholder={m.application_name_placeholder()}
			bind:value={name}
			oninput={onChange}
		/>
		<InputResults name="name" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.application_new_submit()}
		</button>
	</div>
</form>
