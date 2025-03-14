<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface UserEmailFormProps {
		email?: string;
		primary?: boolean;
		verified?: boolean;
		valid: boolean;
	}

	type UserEmailFormForm = {
		email: string;
		primary: boolean;
		verified: boolean;
	};

	const createSuite = () =>
		create((data: UserEmailFormForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('email', m.errors_message_required(), () => {
				enforce(data.email).isNotBlank();
			});
			test('primary', m.errors_message_required(), () => {
				enforce(data.primary).isNotBlank();
			});
			test('verified', m.errors_message_required(), () => {
				enforce(data.verified).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { onMount } from 'svelte';

	let {
		email = $bindable(''),
		primary = $bindable(false),
		verified = $bindable(false),
		valid = $bindable(false)
	}: UserEmailFormProps = $props();

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
		suite({ email, primary, verified }, Array.from(fields)).done((r) => {
			result = r;
			valid = result.isValid();
		});
		fields.clear();
	}, 300);
	export function validateAll() {
		email = email?.trim();
		fields.add('email');
		fields.add('primary');
		fields.add('verified');
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
	<label for="email"> {m.user_emails_email_label()}</label>
	<input
		class="w-full {cn('email')}"
		type="email"
		name="email"
		placeholder={m.user_emails_email_placeholder()}
		bind:value={email}
		oninput={onChange}
	/>
	<InputResults name="email" {result} />
</div>
<div class="flex flex-row mb-2">
	<div>
		<label for="primary">
			{m.user_emails_primary_label()}
			<input
				class={cn('primary')}
				type="checkbox"
				name="primary"
				bind:checked={primary}
				oninput={onChange}
			/>
		</label>
		<InputResults name="primary" {result} />
	</div>
	<div class="ml-2">
		<label for="verified">
			{m.user_emails_verified_label()}
			<input
				class={cn('verified')}
				type="checkbox"
				name="verified"
				bind:checked={verified}
				oninput={onChange}
			/>
		</label>
		<InputResults name="verified" {result} />
	</div>
</div>
