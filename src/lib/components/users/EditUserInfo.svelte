<script lang="ts" module>
	export interface EditUserProps {
		applicationId: number;
		user: User;
	}
</script>

<script lang="ts">
	import * as m from '$lib/paraglide/messages';
	import Spinner from '$lib/components/Spinner.svelte';
	import { handleError } from '$lib/errors';
	import type { User } from '$lib/openapi/auth';
	import { userApi } from '$lib/openapi';
	import UserInfoForm from './UserInfoForm.svelte';

	let { applicationId, user = $bindable() }: EditUserProps = $props();

	let address = $state(user.info.address);
	let familyName = $state(user.info.familyName);
	let gender = $state(user.info.gender);
	let givenName = $state(user.info.givenName);
	let locale = $state(user.info.locale);
	let middleName = $state(user.info.middleName);
	let name = $state(user.info.name);
	let nickname = $state(user.info.nickname);
	let profilePicture = $state(user.info.profilePicture);
	let website = $state(user.info.website);
	let birthdate = $state(user.info.birthdate);
	let zoneInfo = $state(user.info.zoneInfo);

	let userInfoForm = $state<UserInfoForm>();
	let valid = $state(false);
	let loading = $state(false);
	let disabled = $derived(loading || !valid);

	async function onSubmit(e: SubmitEvent) {
		e.preventDefault();
		try {
			loading = true;
			userInfoForm?.validateAll();
			if (valid) {
				user.info = await userApi.updateUserInfo(
					user.id,
					{
						name,
						givenName,
						familyName,
						middleName,
						nickname,
						profilePicture,
						website,
						gender,
						birthdate,
						zoneInfo,
						locale,
						address
					},
					applicationId
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
	<UserInfoForm
		bind:this={userInfoForm}
		bind:address
		bind:familyName
		bind:gender
		bind:givenName
		bind:locale
		bind:middleName
		bind:name
		bind:nickname
		bind:profilePicture
		bind:birthdate
		bind:website
		bind:zoneInfo
		bind:valid
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_info_edit_submit()}
		</button>
	</div>
</form>
