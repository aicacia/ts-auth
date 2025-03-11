<script lang="ts" module>
	import { create, test, enforce, only } from 'vest';

	export interface EditUserProps {
		applicationId: number;
		user: User;
		onEdit(user: User): void;
	}

	type EditUserForm = {
		username: string;
		active: boolean;
	};

	const createSuite = () =>
		create((data: EditUserForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			test('username', m.errors_message_required(), () => {
				enforce(data.username).isNotBlank();
			});
			test('active', m.errors_message_required(), () => {
				enforce(data.active).isNotBlank();
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
	import type { User } from '$lib/openapi/auth';
	import { userApi } from '$lib/openapi';
	import UserInfoForm from './UserInfoForm.svelte';
	import EditUserEmails from './EditUserEmails.svelte';

	let { applicationId, user = $bindable(), onEdit }: EditUserProps = $props();

	let username = $state(user.username);
	let active = $state(user.active);

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
	let userInfoValid = $state(false);

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
		suite({ username, active }, Array.from(fields)).done((r) => {
			result = r;
		});
		fields.clear();
	}, 300);
	function validateAll() {
		fields.add('username');
		fields.add('active');
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
			username = username.trim();
			validateAll();
			if (result.isValid()) {
				const updatedUser = await userApi.updateUser(user.id, { username, active }, applicationId);
				updatedUser.info = await userApi.updateUserInfo(
					updatedUser.id,
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
				onEdit(await userApi.updateUser(user.id, { username, active }, applicationId));
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
		<label for="username"> {m.user_username_label()}</label>
		<input
			class="w-full {cn('username')}"
			type="text"
			name="username"
			placeholder={m.user_username_placeholder()}
			bind:value={username}
			oninput={onChange}
		/>
		<InputResults name="username" {result} />
	</div>
	<div class="mb-2">
		<label for="active">
			{m.user_active_label()}
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
	<EditUserEmails {applicationId} bind:user />
	<UserInfoForm
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
		bind:valid={userInfoValid}
	/>
	<div class="flex flex-row justify-end">
		<button type="submit" class="btn primary flex flex-shrink" {disabled}>
			{#if loading}<div class="mr-2 flex flex-row justify-center">
					<div class="inline-block h-6 w-6"><Spinner /></div>
				</div>{/if}
			{m.user_edit_submit()}
		</button>
	</div>
</form>
