<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface EditServiceAccountProps {
		name: string;
		clientId: string;
		clientSecret?: string | null;
		valid: boolean;
	}

	type ServiceAccountForm = {
		name: string;
		clientId: string;
		clientSecret?: string | null;
	};

	const createSuite = () =>
		create((data: ServiceAccountForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('name', m.errors_message_required(), () => {
				enforce(data.name).isNotBlank();
			});
			test('clientId', m.errors_message_required(), () => {
				enforce(data.clientId).isNotBlank();
			});
			test('clientSecret', m.errors_message_required(), () => {
				enforce(data.clientSecret).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { onMount } from 'svelte';
	import Password from '../Password.svelte';

	let {
		name = $bindable(),
		clientId = $bindable(),
		clientSecret = $bindable(),
		valid = $bindable(false)
	}: EditServiceAccountProps = $props();

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
				name,
				clientId,
				clientSecret
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
		fields.add('clientId');
		fields.add('clientSecret');
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
</script>

<div class="mb-2">
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
</div>
<div class="mb-2">
	<label for="clientId">{m.service_account_client_id_label()}</label>
	<input
		class="w-full {cn('clientId')}"
		type="text"
		name="clientId"
		placeholder={m.service_account_client_id_placeholder()}
		bind:value={clientId}
		oninput={onChange}
	/>
	<InputResults name="clientId" {result} />
</div>
<div class="mb-2">
	<label for="clientSecret">{m.service_account_client_secret_label()}</label>
	<Password
		class={cn('clientSecret')}
		name="clientSecret"
		placeholder={m.service_account_client_secret_placeholder()}
		bind:value={clientSecret}
		oninput={onChange}
	/>
	<InputResults name="clientSecret" {result} />
</div>
