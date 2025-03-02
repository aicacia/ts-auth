<script lang="ts" module>
	import { create, test, enforce, only, omitWhen } from 'vest';

	const NO_PUBLIC_KEY_ALGORITHMS = ['HS256', 'HS384', 'HS512'];

	export interface EditTenantProps {
		algorithm: Algorithm;
		audience?: string | null;
		clientId: string;
		expiresInSeconds: number;
		issuer: string;
		privateKey?: string | null;
		publicKey?: string | null;
		refreshExpiresInSeconds: number;
		valid: boolean;
		isNew?: boolean;
	}

	type TenantForm = {
		algorithm: Algorithm;
		audience?: string | null;
		clientId: string;
		expiresInSeconds: number;
		issuer: string;
		privateKey?: string | null;
		publicKey?: string | null;
		refreshExpiresInSeconds: number;
		isNew: boolean;
	};

	const createSuite = () =>
		create((data: TenantForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('algorithm', m.errors_message_required(), () => {
				enforce(data.algorithm).isNotBlank();
			});
			omitWhen(!data.audience, () => {
				test('audience', m.errors_message_required(), () => {
					enforce(data.audience).isNotBlank();
				});
			});
			test('expiresInSeconds', m.errors_message_required(), () => {
				enforce(data.expiresInSeconds).isNotBlank();
			});
			test('issuer', m.errors_message_required(), () => {
				enforce(data.issuer).isNotBlank();
			});
			omitWhen(data.isNew, () => {
				test('clientId', m.errors_message_required(), () => {
					enforce(data.clientId).isNotBlank();
				});
				test('privateKey', m.errors_message_required(), () => {
					enforce(data.privateKey).isNotBlank();
				});
			});
			omitWhen(NO_PUBLIC_KEY_ALGORITHMS.includes(data.algorithm), () => {
				test('publicKey', m.errors_message_required(), () => {
					enforce(data.publicKey).isNotBlank();
				});
			});
			test('refreshExpiresInSeconds', m.errors_message_required(), () => {
				enforce(data.refreshExpiresInSeconds).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { Algorithm } from '$lib/openapi/auth';
	import { onMount } from 'svelte';
	import Password from '../Password.svelte';

	let {
		algorithm = $bindable(Algorithm.Hs256),
		audience = $bindable(),
		clientId = $bindable(),
		expiresInSeconds = $bindable(86400),
		issuer = $bindable(''),
		privateKey = $bindable(''),
		publicKey = $bindable(),
		refreshExpiresInSeconds = $bindable(604800),
		isNew = false,
		valid = $bindable(false)
	}: EditTenantProps = $props();

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
				algorithm,
				audience,
				clientId,
				expiresInSeconds,
				issuer,
				privateKey,
				publicKey,
				refreshExpiresInSeconds,
				isNew
			},
			Array.from(fields)
		).done((r) => {
			result = r;
			valid = result.isValid();
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('algorithm');
		fields.add('audience');
		fields.add('clientId');
		fields.add('expiresInSeconds');
		fields.add('issuer');
		fields.add('privateKey');
		fields.add('publicKey');
		fields.add('refreshExpiresInSeconds');
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
	<label for="algorithm">{m.tenant_algorithm_label()}</label>
	<select
		class="w-full {cn('algorithm')}"
		name="algorithm"
		placeholder={m.tenant_algorithm_placeholder()}
		bind:value={algorithm}
		oninput={onChange}
	>
		{#each Object.values(Algorithm) as algorithm (algorithm)}
			<option value={algorithm}>{algorithm}</option>
		{/each}
	</select>
	<InputResults name="algorithm" {result} />
</div>
<div class="mb-2">
	<label for="audience">{m.tenant_audience_label()}</label>
	<input
		class="w-full {cn('audience')}"
		type="text"
		name="audience"
		placeholder={m.tenant_audience_placeholder()}
		bind:value={audience}
		oninput={onChange}
	/>
	<InputResults name="audience" {result} />
</div>
<div class="mb-2">
	<label for="clientId">{m.tenant_client_id_label()}</label>
	<input
		class="w-full {cn('clientId')}"
		type="text"
		name="clientId"
		placeholder={m.tenant_client_id_placeholder()}
		bind:value={clientId}
		oninput={onChange}
	/>
	<InputResults name="clientId" {result} />
</div>
<div class="mb-2">
	<label for="expiresInSeconds">{m.tenant_expires_in_seconds_label()}</label>
	<input
		class="w-full {cn('expiresInSeconds')}"
		type="number"
		min="0"
		name="expiresInSeconds"
		placeholder={m.tenant_expires_in_seconds_placeholder()}
		bind:value={expiresInSeconds}
		oninput={onChange}
	/>
	<InputResults name="expiresInSeconds" {result} />
</div>
<div class="mb-2">
	<label for="issuer">{m.tenant_issuer_label()}</label>
	<input
		class="w-full {cn('issuer')}"
		type="text"
		name="issuer"
		placeholder={m.tenant_issuer_placeholder()}
		bind:value={issuer}
		oninput={onChange}
	/>
	<InputResults name="issuer" {result} />
</div>
<div class="mb-2" hidden={NO_PUBLIC_KEY_ALGORITHMS.includes(algorithm)}>
	<label for="publicKey">{m.tenant_public_key_label()}</label>
	<input
		class="w-full {cn('publicKey')}"
		type="text"
		name="publicKey"
		placeholder={m.tenant_public_key_placeholder()}
		bind:value={publicKey}
		oninput={onChange}
	/>
	<InputResults name="publicKey" {result} />
</div>
<div class="mb-2">
	<label for="privateKey">{m.tenant_private_key_label()}</label>
	<Password
		class="w-full {cn('privateKey')}"
		name="privateKey"
		placeholder={m.tenant_private_key_placeholder()}
		bind:value={privateKey}
		oninput={onChange}
	/>
	<InputResults name="privateKey" {result} />
</div>
<div class="mb-2">
	<label for="refreshExpiresInSeconds">{m.tenant_refresh_expires_in_seconds_label()}</label>
	<input
		class="w-full {cn('refreshExpiresInSeconds')}"
		type="number"
		min="0"
		name="refreshExpiresInSeconds"
		placeholder={m.tenant_refresh_expires_in_seconds_placeholder()}
		bind:value={refreshExpiresInSeconds}
		oninput={onChange}
	/>
	<InputResults name="refreshExpiresInSeconds" {result} />
</div>
