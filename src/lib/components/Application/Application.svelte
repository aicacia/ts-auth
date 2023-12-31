<svelte:options immutable />

<script lang="ts" context="module">
	function createApplicationConfig(
		applicationId: string,
		key: string,
		value?: any
	): ApplicationConfig {
		return {
			application_id: applicationId,
			key,
			value,
			created_at: new Date(),
			updated_at: new Date()
		};
	}
</script>

<script lang="ts">
	import type { ApplicationWithSecret } from '$lib/openapi/auth';
	import type { ApplicationConfig } from '$lib/openapi/auth/models/ApplicationConfig';
	import ApplicationEditor from './ApplicationEditor.svelte';
	import ApplicationSecret from './ApplicationSecret.svelte';
	import DeleteApplication from './DeleteApplication.svelte';
	import JWT from './JWT.svelte';
	import URI from './URI.svelte';

	export let application: ApplicationWithSecret;
	export let configs: { [key: string]: ApplicationConfig };

	$: uri = configs['uri'] || (configs['uri'] = createApplicationConfig(application.id, 'uri'));
	$: jwtSecret =
		configs['jwt.secret'] ||
		(configs['jwt.secret'] = createApplicationConfig(application.id, 'uri'));

	function onUpdate(updatedApplication: ApplicationWithSecret) {
		application = updatedApplication;
	}
</script>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<ApplicationEditor
			id={application.id}
			name={application.name}
			uri={application.uri}
			onDone={onUpdate}
		/>
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<ApplicationSecret id={application.id} secret={application.secret} onDone={onUpdate} />
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<URI id={application.id} bind:uri={uri.value} />
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<JWT id={application.id} bind:jwt={jwtSecret.value} />
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<DeleteApplication id={application.id} originalUri={application.uri} />
	</div>
</div>
