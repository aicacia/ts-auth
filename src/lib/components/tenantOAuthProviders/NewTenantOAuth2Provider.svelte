<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface NewTenantOAuth2ProviderProps {
		applicationId: number;
		tenantId: number;
		onCreate(tenantOAuth2Provider: TenantOAuth2Provider): void;
	}

	type NewTenantOAuth2ProviderForm = {
		provider: string;
	};

	const createSuite = () =>
		create((data: Partial<NewTenantOAuth2ProviderForm> = {}, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('provider', m.errors_message_required(), () => {
				enforce(data.provider).isNotBlank();
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
	import type { TenantOAuth2Provider } from '$lib/openapi/auth';
	import { tenantOauth2ProviderApi } from '$lib/openapi';

	let { applicationId, tenantId, onCreate }: NewTenantOAuth2ProviderProps = $props();

	let provider = $state('');
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
		suite({ provider }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('provider');
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
			provider = provider.trim();
			validateAll();
			if (result.isValid()) {
				onCreate(
					await tenantOauth2ProviderApi.createTenantOauth2Provider(
						tenantId,
						{ provider },
						applicationId
					)
				);
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
			class="w-full {cn('provider')}"
			type="text"
			name="provider"
			placeholder={m.tenant_oauth2_provider_provider_placeholder()}
			bind:value={provider}
			oninput={onChange}
		/>
		<InputResults name="provider" {result} />
	</div>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.tenant_oauth2_provider_new_submit()}
		</button>
	</div>
</form>
