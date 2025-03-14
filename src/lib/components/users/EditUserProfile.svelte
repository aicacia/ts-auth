<script lang="ts" module>
	export interface EditUserProfileProps {
		applicationId: number;
		user: User;
		onEdit(user: User): void;
	}
</script>

<script lang="ts">
	import type { User } from '$lib/openapi/auth';
	import EditUserEmails from './EditUserEmails.svelte';
	import EditUserInfo from './EditUserInfo.svelte';
	import EditUser from './EditUser.svelte';

	let { applicationId, user = $bindable(), onEdit }: EditUserProfileProps = $props();
</script>

<EditUser {applicationId} bind:user {onEdit} />

<hr class="my-2" />

<EditUserEmails {applicationId} bind:user {onEdit} />

<hr class="my-2" />

<EditUserInfo {applicationId} bind:user {onEdit} />
