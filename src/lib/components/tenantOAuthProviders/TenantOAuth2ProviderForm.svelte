<script lang="ts" module>
	import { create, test, enforce, only, omitWhen } from 'vest';

	export interface TenantOAuth2ProviderFormProps {
		provider?: string;
		active?: boolean;
		authUrl?: string;
		callbackUrl?: string;
		clientId: string;
		clientSecret: string;
		redirectUrl: string;
		scope?: string;
		tokenUrl?: string;
		isNew: boolean;
		valid: boolean;
	}

	type TenantOAuth2ProviderForm = {
		provider?: string;
		active?: boolean;
		authUrl?: string;
		callbackUrl?: string;
		clientId: string;
		clientSecret: string;
		redirectUrl: string;
		scope?: string;
		tokenUrl?: string;
		isNew: boolean;
	};

	const createSuite = () =>
		create((data: TenantOAuth2ProviderForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('provider', m.errors_message_required(), () => {
				enforce(data.provider).isNotBlank();
			});
			test('active', m.errors_message_required(), () => {
				enforce(data.active).isNotBlank();
			});
			test('clientId', m.errors_message_required(), () => {
				enforce(data.clientId).isNotBlank();
			});
			test('clientSecret', m.errors_message_required(), () => {
				enforce(data.clientSecret).isNotBlank();
			});
			test('redirectUrl', m.errors_message_required(), () => {
				enforce(data.redirectUrl).isNotBlank();
			});
			omitWhen(data.isNew, () => {
				test('authUrl', m.errors_message_required(), () => {
					enforce(data.authUrl).isNotBlank();
				});
				test('callbackUrl', m.errors_message_required(), () => {
					enforce(data.callbackUrl).isNotBlank();
				});
				test('scope', m.errors_message_required(), () => {
					enforce(data.scope).isNotBlank();
				});
				test('tokenUrl', m.errors_message_required(), () => {
					enforce(data.tokenUrl).isNotBlank();
				});
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
		provider = $bindable(),
		active = $bindable(),
		authUrl = $bindable(),
		callbackUrl = $bindable(),
		clientId = $bindable(),
		clientSecret = $bindable(),
		redirectUrl = $bindable(),
		scope = $bindable(),
		tokenUrl = $bindable(),
		valid = $bindable(false),
		isNew
	}: TenantOAuth2ProviderFormProps = $props();

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
				provider,
				active,
				authUrl,
				callbackUrl,
				clientId,
				clientSecret,
				redirectUrl,
				scope,
				tokenUrl,
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
		fields.add('provider');
		fields.add('active');
		fields.add('authUrl');
		fields.add('callbackUrl');
		fields.add('clientId');
		fields.add('clientSecret');
		fields.add('redirectUrl');
		fields.add('scope');
		fields.add('tokenUrl');
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
	<label for="provider">{m.tenant_oauth2_provider_provider_label()}</label>
	<select
		class="w-full {cn('provider')}"
		name="provider"
		placeholder={m.tenant_oauth2_provider_provider_placeholder()}
		bind:value={provider}
		oninput={onChange}
	>
		<option value="google">{m.tenant_oauth2_provider_provider_google()}</option>
		<option value="facebook">{m.tenant_oauth2_provider_provider_facebook()}</option>
		<option value="github">{m.tenant_oauth2_provider_provider_github()}</option>
		<option value="microsoft">{m.tenant_oauth2_provider_provider_microsoft()}</option>
		<option value="x">{m.tenant_oauth2_provider_provider_x()}</option>
	</select>
	<InputResults name="provider" {result} />
</div>
<div class="mb-2">
	<label for="active">
		{m.tenant_oauth2_provider_active_label()}
		<input
			class={cn('active')}
			type="checkbox"
			name="active"
			bind:checked={active}
			oninput={onChange}
		/>
	</label>
	<InputResults name="active" {result} />
</div>
<div class="mb-2">
	<label for="clientId">{m.tenant_oauth2_provider_client_id_label()}</label>
	<input
		class="w-full {cn('clientId')}"
		type="text"
		name="clientId"
		placeholder={m.tenant_oauth2_provider_client_id_placeholder()}
		bind:value={clientId}
		oninput={onChange}
	/>
	<InputResults name="clientId" {result} />
</div>
<div class="mb-2">
	<label for="clientSecret">{m.tenant_oauth2_provider_client_secret_label()}</label>
	<input
		class="w-full {cn('clientSecret')}"
		type="text"
		name="clientSecret"
		placeholder={m.tenant_oauth2_provider_client_secret_placeholder()}
		bind:value={clientSecret}
		oninput={onChange}
	/>
	<InputResults name="clientSecret" {result} />
</div>
<div class="mb-2">
	<label for="redirectUrl">{m.tenant_oauth2_provider_redirect_url_label()}</label>
	<input
		class="w-full {cn('redirectUrl')}"
		type="text"
		name="redirectUrl"
		placeholder={m.tenant_oauth2_provider_redirect_url_placeholder()}
		bind:value={redirectUrl}
		oninput={onChange}
	/>
	<InputResults name="redirectUrl" {result} />
</div>
<div class="mb-2">
	<label for="authUrl">{m.tenant_oauth2_provider_auth_url_label()}</label>
	<input
		class="w-full {cn('authUrl')}"
		type="text"
		name="authUrl"
		placeholder={m.tenant_oauth2_provider_auth_url_placeholder()}
		bind:value={authUrl}
		oninput={onChange}
	/>
	<InputResults name="authUrl" {result} />
</div>
<div class="mb-2">
	<label for="callbackUrl">{m.tenant_oauth2_provider_callback_url_label()}</label>
	<input
		class="w-full {cn('callbackUrl')}"
		type="text"
		name="callbackUrl"
		placeholder={m.tenant_oauth2_provider_callback_url_placeholder()}
		bind:value={callbackUrl}
		oninput={onChange}
	/>
	<InputResults name="callbackUrl" {result} />
</div>
<div class="mb-2">
	<label for="scope">{m.tenant_oauth2_provider_scope_label()}</label>
	<input
		class="w-full {cn('scope')}"
		type="text"
		name="scope"
		placeholder={m.tenant_oauth2_provider_scope_placeholder()}
		bind:value={scope}
		oninput={onChange}
	/>
	<InputResults name="scope" {result} />
</div>
<div class="mb-2">
	<label for="tokenUrl">{m.tenant_oauth2_provider_token_url_label()}</label>
	<input
		class="w-full {cn('tokenUrl')}"
		type="text"
		name="tokenUrl"
		placeholder={m.tenant_oauth2_provider_token_url_placeholder()}
		bind:value={tokenUrl}
		oninput={onChange}
	/>
	<InputResults name="tokenUrl" {result} />
</div>
