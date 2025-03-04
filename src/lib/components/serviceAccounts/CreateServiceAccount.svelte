<script lang="ts" module>
	import { create, test, enforce, only, omitWhen } from 'vest';

	export interface NewServiceAccountProps {
		applicationId: number;
		onCreate(serviceAccount: ServiceAccount): void;
	}

	type NewServiceAccountForm = {
		name: string;
	};

	const createSuite = () =>
		create((data: NewServiceAccountForm, fields: string[]) => {
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
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { ServiceAccount } from '$lib/openapi/auth';
	import { serviceAccountApi } from '$lib/openapi';
	import { onMount } from 'svelte';
	import InputResults from '../InputResults.svelte';
	import { debounce } from '@aicacia/debounce';
	import classNames from 'vest/classnames';

	let { applicationId, onCreate }: NewServiceAccountProps = $props();

	let loading = $state(false);
	let valid = $state(false);
	let disabled = $derived(loading || !valid);
	let name = $state('');

	let suite = createSuite();
	let result = $state(suite.get());
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
		suite(
			{
				name
			},
			Array.from(fields)
		).done((r) => {
			result = r;
			valid = result.isValid();
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('name');
		validate();
		validate.flush();
	}
	function onChange(
		e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement }
	) {
		fields.add(e.currentTarget.name);
		validate();
	}

	onMount(validateAll);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			if (valid) {
				onCreate(await serviceAccountApi.createServiceAccount({ name }, applicationId));
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form onsubmit={onSubmit}>
	<label for="name">{m.service_account_name_label()}</label>
	<input
		class="w-full {cn('name')}"
		type="text"
		name="name"
		placeholder={m.service_account_name_placeholder()}
		bind:value={name}
		oninput={onChange}
	/>
	<InputResults name="name" {result} />
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.service_account_new_submit()}
		</button>
	</div>
</form>
