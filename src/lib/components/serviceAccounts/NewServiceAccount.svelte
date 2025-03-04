<script lang="ts" module>
	export interface NewServiceAccountProps {
		serviceAccount: ServiceAccount;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import type { ServiceAccount } from '$lib/openapi/auth';
	import Copy from 'lucide-svelte/icons/copy';
	import Password from '../Password.svelte';
	import { copyToClipboard } from '$lib/util';
	import { createNotification } from '$lib/stores/notifications.svelte';

	let { serviceAccount }: NewServiceAccountProps = $props();

	let copying = $state(false);
	function createCopyToClipboard(value: string) {
		return async () => {
			try {
				copying = true;
				await copyToClipboard(value);
				createNotification(m.notification_copied_to_clipboard(), 'success');
			} finally {
				copying = false;
			}
		};
	}
</script>

<div class="mb-2">
	<label for="name">{m.service_account_name_label()}</label>
	<input
		class="w-full"
		type="text"
		name="name"
		readonly
		placeholder={m.service_account_name_placeholder()}
		value={serviceAccount.name}
	/>
</div>
<div class="mb-2">
	<label for="clientId">{m.service_account_client_id_label()}</label>
	<div class="flex flex-row w-full">
		<input
			class="flex-grow"
			type="text"
			name="clientId"
			readonly
			placeholder={m.service_account_client_id_placeholder()}
			value={serviceAccount.clientId}
		/>
		<button
			class="btn icon secondary flex flex-shrink"
			disabled={copying}
			onclick={createCopyToClipboard(serviceAccount.clientId as string)}
		>
			<Copy />
		</button>
	</div>
</div>
<div class="mb-2">
	<label for="clientSecret">{m.service_account_client_secret_label()}</label>
	<div class="flex flex-row w-full">
		<Password
			name="clientSecret"
			containerClass="flex-grow"
			readonly
			placeholder={m.service_account_client_secret_placeholder()}
			value={serviceAccount.clientSecret}
		/>
		<button
			class="btn icon secondary flex flex-shrink"
			disabled={copying}
			onclick={createCopyToClipboard(serviceAccount.clientSecret as string)}
		>
			<Copy />
		</button>
	</div>
</div>
