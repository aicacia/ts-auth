<svelte:options immutable />

<script lang="ts">
	import type { Application } from '$lib/openapi/auth';
	import type { ApplicationConfig } from '$lib/openapi/auth/models/ApplicationConfig';
	import ApplicationEditor from './ApplicationEditor.svelte';
	import JWT from './JWT.svelte';
	import URI from './URI.svelte';

	export let application: Application;
	export let configs: { [uri: string]: ApplicationConfig };

	function onUpdate(updatedApplication: Application) {
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
		<URI id={application.id} bind:uri={configs['uri'].value} />
	</div>
</div>

<div class="flex flex-col justify-end md:justify-start px-4">
	<div
		class="flex flex-col flex-shrink w-full max-w-6xl mx-auto mt-4 bg-white dark:bg-gray-800 shadow p-4"
	>
		<JWT
			id={application.id}
			bind:jwt={configs['jwt.secret'].value}
			bind:expiresInSeconds={configs['jwt.expires_in_seconds'].value}
		/>
	</div>
</div>
