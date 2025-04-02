<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	type SignInForm = {
		clientId: string;
		clientSecret: string;
	};

	const createSuite = () =>
		create((data: Partial<SignInForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

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
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Spinner from '$lib/components/Spinner.svelte';
	import { signIn } from '$lib/state/token.svelte';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';

	let clientId = $state('');
	let clientSecret = $state('');
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
		suite({ clientId, clientSecret }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('clientId');
		fields.add('clientSecret');
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
			clientId = clientId.trim();
			clientSecret = clientSecret.trim();
			validateAll();
			if (result.isValid()) {
				await signIn(clientId, clientSecret);
				await goto(`${base}/`);
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{m.auth_sign_in()}</title>
</svelte:head>

<div class="flex flex-grow flex-col justify-end p-4 sm:justify-start">
	<div class="card mx-auto my-10 flex w-full flex-shrink flex-col sm:w-72">
		<h1 class="mb-1">{m.auth_sign_in()}</h1>
		<form onsubmit={onSubmit}>
			<div class="mb-2">
				<input
					class="w-full {cn('clientId')}"
					type="text"
					name="clientId"
					autocomplete="username"
					placeholder={m.auth_client_id_placeholder()}
					bind:value={clientId}
					oninput={onChange}
				/>
				<InputResults name="clientId" {result} />
			</div>
			<div class="mb-2">
				<input
					class="w-full {cn('clientSecret')}"
					type="password"
					name="clientSecret"
					autocomplete="current-password"
					placeholder={m.auth_client_secret_placeholder()}
					bind:value={clientSecret}
					oninput={onChange}
				/>
				<InputResults name="clientSecret" {result} />
			</div>
			<div class="flex flex-row justify-end">
				<button type="submit" class="btn primary flex flex-shrink" {disabled}>
					{#if loading}<div class="mr-2 flex flex-row justify-center">
							<div class="inline-block h-6 w-6"><Spinner /></div>
						</div>{/if}
					{m.auth_sign_in()}
				</button>
			</div>
		</form>
	</div>
</div>
