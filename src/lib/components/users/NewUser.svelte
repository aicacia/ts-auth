<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface NewUserProps {
		applicationId: number;
		onCreate(user: User): void;
	}

	type NewUserForm = {
		username: string;
		active: boolean;
	};

	const createSuite = () =>
		create((data: Partial<NewUserForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('username', m.errors_message_required(), () => {
				enforce(data.username).isNotBlank();
			});
			test('active', m.errors_message_required(), () => {
				enforce(data.active).isNotBlank();
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
	import type { User } from '$lib/openapi/auth';
	import { userApi } from '$lib/openapi';

	let { applicationId, onCreate }: NewUserProps = $props();

	let username = $state('');
	let active = $state(true);
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
		suite({ username, active }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('username');
		fields.add('active');
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
			username = username.trim();
			validateAll();
			if (result.isValid()) {
				onCreate(await userApi.createUser({ active, username }, applicationId));
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
		<label for="username"> {m.user_username_label()}</label>
		<input
			class="w-full {cn('username')}"
			type="text"
			name="username"
			placeholder={m.user_username_placeholder()}
			bind:value={username}
			oninput={onChange}
		/>
		<InputResults name="username" {result} />
	</div>
	<div class="mb-2">
		<label for="active">
			{m.user_active_label()}
			<input
				class={cn('active')}
				type="checkbox"
				name="active"
				placeholder={m.user_active_placeholder()}
				bind:checked={active}
				oninput={onChange}
			/>
		</label>
		<InputResults name="active" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_new_submit()}
		</button>
	</div>
</form>
