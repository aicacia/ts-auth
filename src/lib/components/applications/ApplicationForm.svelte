<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface ApplicationProps {
		name: string;
		valid: boolean;
	}

	type ApplicationForm = {
		name: string;
	};

	const createSuite = () =>
		create((data: Partial<ApplicationForm> = {}, fields: string[]) => {
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
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { onMount } from 'svelte';

	let { name = $bindable(), valid = $bindable(false) }: ApplicationProps = $props();

	let suite = createSuite();
	let result = $state(suite.get());
	let loading = $state(false);
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
			valid = result.isValid();
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

	onMount(validateAll);
</script>

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
