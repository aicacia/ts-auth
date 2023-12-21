<svelte:options immutable />

<script lang="ts" context="module">
	import { create, test, enforce, only } from 'vest';

	type JWTForm = {
		jwt: string;
	};

	const createSuite = () =>
		create((data: Partial<JWTForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('jwt', 'required', () => {
				enforce(data.jwt).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import classNames from 'vest/classnames';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import Spinner from '$lib/components/Spinner.svelte';
	import { applicationApi } from '$lib/openapi';
	import Undo from 'lucide-svelte/dist/svelte/icons/undo-2.svelte';
	import EyeOff from 'lucide-svelte/dist/svelte/icons/eye-off.svelte';
	import Eye from 'lucide-svelte/dist/svelte/icons/eye.svelte';
	import RotateCCW from 'lucide-svelte/dist/svelte/icons/rotate-ccw.svelte';
	import { fromUint8Array } from 'js-base64';
	import { fillBytes } from '@aicacia/rand';
	import { createNotification } from '$lib/stores/notifications';

	export let id: string;
	export let jwt: string = '';

	let initialJwt = jwt;
	const suite = createSuite();

	let show = false;
	function toggleShow() {
		show = !show;
	}

	let result = suite.get();
	$: disabled = loading;
	$: cn = classNames(result, {
		untested: 'untested',
		tested: 'tested',
		invalid: 'invalid',
		valid: 'valid',
		warning: 'warning'
	});

	const fields = new Set<string>();
	const validate = debounce(() => {
		suite({ jwt }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('jwt');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	function onReset() {
		jwt = initialJwt;
		suite.reset();
	}

	function onGenerateNew() {
		jwt = fromUint8Array(fillBytes(new Uint8Array(256)));
	}

	let loading = false;
	async function onSubmit() {
		try {
			loading = true;
			validateAll();
			if (result.isValid()) {
				await applicationApi.updateConfig(id, { key: 'jwt.secret', value: jwt });
				initialJwt = jwt;
				suite.reset();
				createNotification('invalidated_jwt', 'info');
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<form class="flex flex-col flex-grow" on:submit|preventDefault={onSubmit}>
	<label for="application-jwt">JWT Secret</label>
	<div class="flex flex-row">
		{#if jwt !== initialJwt}
			<div class="flex flex-shrink">
				<button
					type="submit"
					class="btn icon secondary"
					title="Undo"
					on:click|preventDefault={onReset}
				>
					<Undo />
				</button>
			</div>
		{/if}
		<div class="flex flex-grow relative">
			{#if show}
				<input
					id="application-jwt"
					class="flex flex-grow {cn('jwt')} pe-8"
					type="text"
					name="jwt"
					placeholder="JWT Secret"
					bind:value={jwt}
					on:input={onChange}
				/>
			{:else}
				<input
					id="application-jwt"
					class="flex flex-grow {cn('jwt')} pe-8"
					type="password"
					name="jwt"
					placeholder="JWT Secret"
					bind:value={jwt}
					on:input={onChange}
				/>
			{/if}
			<button
				type="submit"
				class="btn icon absolute inset-y-0 right-0"
				on:click|preventDefault={toggleShow}
			>
				{#if show}
					<EyeOff />
				{:else}
					<Eye />
				{/if}
			</button>
		</div>
		<div class="flex flex-shrink">
			<button
				type="submit"
				class="btn icon secondary"
				{disabled}
				on:click|preventDefault={onGenerateNew}
			>
				<RotateCCW />
			</button>
			<button type="submit" class="btn primary" {disabled}>
				{#if loading}<div class="flex flex-row justify-center mr-2">
						<div class="inline-block w-6 h-6"><Spinner /></div>
					</div>{/if}
				Update
			</button>
		</div>
	</div>
	<InputResults name="jwt" {result} />
</form>
