<script lang="ts" module>
	import { create, test, enforce, only, skipWhen } from 'vest';
	import 'vest/enforce/isURL';

	type ApiForm = {
		url: string;
		tenant: string;
	};

	const createSuite = () =>
		create((data: ApiForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('url', m.errors_message_required(), () => {
				enforce(data.url).isNotBlank();
			});
			test('url', m.errors_message_invalid_url(), () => {
				enforce(data.url).isURL({
					protocols: ['http', 'https'],
					require_tld: false,
					require_protocol: true,
					require_host: true,
					require_port: false,
					require_valid_protocol: true,
					allow_underscores: false,
					allow_trailing_dot: false,
					allow_protocol_relative_urls: false,
					allow_fragments: false,
					allow_query_components: false
				});
			});
			skipWhen(
				(result) => result.hasErrors('url'),
				() => {
					test('url', m.errors_message_invalid_url(), async () => {
						const utilApi = new UtilApi(
							new Configuration({
								...configurationParameters,
								get basePath() {
									return api.url;
								}
							})
						);
						await utilApi.version();
					});
				}
			);
			test('url', m.errors_message_invalid_url(), async () => {});
			test('tenant', m.errors_message_required(), () => {
				enforce(data.tenant).isNotBlank();
			});
		});
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import classNames from 'vest/classnames';
	import { goto } from '$app/navigation';
	import { base } from '$app/paths';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import { debounce } from '@aicacia/debounce';
	import InputResults from '$lib/components/InputResults.svelte';
	import { api, setApi } from '$lib/state/api.svelte';
	import { Configuration, UtilApi } from '$lib/openapi/auth';
	import { configurationParameters } from '$lib/openapi';

	let url = $state(api.url || '');
	let tenant = $state(api.tenant || '');
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
	const validate = debounce(
		() =>
			new Promise<boolean>((resolve) => {
				suite({ url, tenant }, Array.from(fields)).done((r) => {
					result = r;
					resolve(result.isValid());
				});
				fields.clear();
			}),
		300
	);
	function validateAll() {
		fields.add('url');
		fields.add('tenant');
		validate();
		return validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			url = url.trim();
			tenant = tenant.trim();
			if (await validateAll()) {
				await setApi({ url, tenant });
				await goto(`${base}/signin`);
			}
		} catch (error) {
			await handleError(error);
		} finally {
			loading = false;
		}
	}
</script>

<svelte:head>
	<title>{m.api_set_title()}</title>
</svelte:head>

<div class="flex flex-grow flex-col justify-end p-4 sm:justify-start">
	<div class="card mx-auto my-10 flex w-full flex-shrink flex-col sm:w-72">
		<h1 class="mb-1">{m.api_set_title()}</h1>
		<form onsubmit={onSubmit}>
			<div class="mb-2">
				<input
					class="w-full {cn('url')}"
					type="url"
					name="url"
					placeholder={m.api_url_placeholder()}
					bind:value={url}
					oninput={onChange}
				/>
				<InputResults name="url" {result} />
			</div>
			<div class="mb-2">
				<input
					class="w-full {cn('tenant')}"
					type="text"
					name="tenant"
					placeholder={m.api_tenant_placeholder()}
					bind:value={tenant}
					oninput={onChange}
				/>
				<InputResults name="tenant" {result} />
			</div>
			<div class="flex flex-row justify-end">
				<button type="submit" class="btn primary flex flex-shrink" {disabled}>
					{#if loading}<div class="mr-2 flex flex-row justify-center">
							<div class="inline-block h-6 w-6"><Spinner /></div>
						</div>{/if}
					{m.api_set()}
				</button>
			</div>
		</form>
	</div>
</div>
