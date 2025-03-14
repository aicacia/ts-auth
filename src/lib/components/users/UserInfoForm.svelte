<script lang="ts" module>
	import { create, test, enforce, only, omitWhen } from 'vest';
	import 'vest/enforce/isURL';

	export interface UserInfoFormProps {
		name?: string | null;
		givenName?: string | null;
		familyName?: string | null;
		middleName?: string | null;
		nickname?: string | null;
		profilePicture?: string | null;
		website?: string | null;
		gender?: string | null;
		birthdate?: Date | null;
		zoneInfo?: string | null;
		locale?: string | null;
		address?: string | null;
		valid: boolean;
	}

	type UserInfoForm = {
		name?: string | null;
		givenName?: string | null;
		familyName?: string | null;
		middleName?: string | null;
		nickname?: string | null;
		profilePicture?: string | null;
		website?: string | null;
		gender?: string | null;
		birthdate?: Date | null;
		zoneInfo?: string | null;
		locale?: string | null;
		address?: string | null;
	};

	const createSuite = () =>
		create((data: UserInfoForm, fields: string[]) => {
			if (!fields.length) {
				return;
			}
			only(fields);

			omitWhen(!data.name, () => {
				test('name', m.errors_message_required(), () => {
					enforce(data.name).isNotBlank();
				});
			});
			omitWhen(!data.givenName, () => {
				test('givenName', m.errors_message_required(), () => {
					enforce(data.givenName).isNotBlank();
				});
			});
			omitWhen(!data.familyName, () => {
				test('familyName', m.errors_message_required(), () => {
					enforce(data.familyName).isNotBlank();
				});
			});
			omitWhen(!data.middleName, () => {
				test('middleName', m.errors_message_required(), () => {
					enforce(data.middleName).isNotBlank();
				});
			});
			omitWhen(!data.nickname, () => {
				test('nickname', m.errors_message_required(), () => {
					enforce(data.nickname).isNotBlank();
				});
			});
			omitWhen(!data.gender, () => {
				test('gender', m.errors_message_required(), () => {
					enforce(data.gender).isNotBlank();
				});
			});
			omitWhen(!data.zoneInfo, () => {
				test('zoneInfo', m.errors_message_required(), () => {
					enforce(data.zoneInfo).isNotBlank();
				});
			});
			omitWhen(!data.locale, () => {
				test('locale', m.errors_message_required(), () => {
					enforce(data.locale).isNotBlank();
				});
			});
			omitWhen(!data.address, () => {
				test('address', m.errors_message_required(), () => {
					enforce(data.address).isNotBlank();
				});
			});
			omitWhen(!data.birthdate, () => {
				test('birthdate', m.errors_message_required(), () => {
					enforce(data.birthdate).isNotBlank();
				});
			});
			omitWhen(!data.profilePicture, () => {
				test('profilePicture', m.errors_message_invalid_url(), () => {
					enforce(data.profilePicture).isURL({
						require_tld: false,
						require_protocol: false,
						require_host: false,
						require_port: false,
						require_valid_protocol: false,
						allow_underscores: true,
						allow_trailing_dot: true,
						allow_protocol_relative_urls: true,
						allow_fragments: true,
						allow_query_components: true
					});
				});
			});
			omitWhen(!data.website, () => {
				test('website', m.errors_message_invalid_url(), () => {
					enforce(data.website).isURL({
						require_tld: false,
						require_protocol: false,
						require_host: false,
						require_port: false,
						require_valid_protocol: false,
						allow_underscores: true,
						allow_trailing_dot: true,
						allow_protocol_relative_urls: true,
						allow_fragments: true,
						allow_query_components: true
					});
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
		name = $bindable(),
		givenName = $bindable(),
		familyName = $bindable(),
		middleName = $bindable(),
		nickname = $bindable(),
		profilePicture = $bindable(),
		website = $bindable(),
		gender = $bindable(),
		birthdate = $bindable(),
		zoneInfo = $bindable(),
		locale = $bindable(),
		address = $bindable(),
		valid = $bindable(false)
	}: UserInfoFormProps = $props();

	let birthdateString = $state(birthdate?.toISOString().substring(0, 10));

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
			Array.from(fields)
		).done((r) => {
			result = r;
			valid = result.isValid();
		});
		fields.clear();
	}, 300);
	export function validateAll() {
		address = address?.trim();
		familyName = familyName?.trim();
		gender = gender?.trim();
		givenName = givenName?.trim();
		middleName = middleName?.trim();
		nickname = nickname?.trim();
		profilePicture = profilePicture?.trim();
		website = website?.trim();
		zoneInfo = zoneInfo?.trim();
		locale = locale?.trim();
		fields.add('name');
		fields.add('givenName');
		fields.add('familyName');
		fields.add('middleName');
		fields.add('nickname');
		fields.add('profilePicture');
		fields.add('website');
		fields.add('gender');
		fields.add('birthdate');
		fields.add('zoneInfo');
		fields.add('locale');
		fields.add('address');
		validate();
		validate.flush();
	}
	function onChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
	}
	function onBirthdateChange(e: Event & { currentTarget: HTMLInputElement | HTMLSelectElement }) {
		fields.add(e.currentTarget.name);
		validate();
		birthdate = new Date(birthdateString as string);
	}

	onMount(validateAll);
</script>

<div class="flex flex-row mb-2">
	<div class="mr-1 flex-grow">
		<label for="name"> {m.user_info_name_label()}</label>
		<input
			class="w-full {cn('name')}"
			type="text"
			name="name"
			placeholder={m.user_info_name_placeholder()}
			bind:value={name}
			oninput={onChange}
		/>
		<InputResults name="name" {result} />
	</div>
	<div class="ml-1 flex-grow">
		<label for="nickname"> {m.user_info_nickname_label()}</label>
		<input
			class="w-full {cn('nickname')}"
			type="text"
			name="nickname"
			placeholder={m.user_info_nickname_placeholder()}
			bind:value={nickname}
			oninput={onChange}
		/>
		<InputResults name="nickname" {result} />
	</div>
</div>
<div class="flex flex-row mb-2">
	<div class="mr-1 flex-grow">
		<label for="givenName"> {m.user_info_given_name_label()}</label>
		<input
			class="w-full {cn('givenName')}"
			type="text"
			name="givenName"
			placeholder={m.user_info_given_name_placeholder()}
			bind:value={givenName}
			oninput={onChange}
		/>
		<InputResults name="givenName" {result} />
	</div>
	<div class="mx-1 flex-grow">
		<label for="middleName"> {m.user_info_middle_name_label()}</label>
		<input
			class="w-full {cn('middleName')}"
			type="text"
			name="middleName"
			placeholder={m.user_info_middle_name_placeholder()}
			bind:value={middleName}
			oninput={onChange}
		/>
		<InputResults name="middleName" {result} />
	</div>
	<div class="ml-1 flex-grow">
		<label for="familyName"> {m.user_info_family_name_label()}</label>
		<input
			class="w-full {cn('familyName')}"
			type="text"
			name="familyName"
			placeholder={m.user_info_family_name_placeholder()}
			bind:value={familyName}
			oninput={onChange}
		/>
		<InputResults name="familyName" {result} />
	</div>
</div>
<div class="flex flex-row mb-2">
	<div class="mr-1 flex-grow">
		<label for="profilePicture"> {m.user_info_profile_picture_label()}</label>
		<input
			class="w-full {cn('profilePicture')}"
			type="text"
			name="profilePicture"
			placeholder={m.user_info_profile_picture_placeholder()}
			bind:value={profilePicture}
			oninput={onChange}
		/>
		<InputResults name="profilePicture" {result} />
	</div>
	<div class="ml-1 flex-grow">
		<label for="website"> {m.user_info_website_label()}</label>
		<input
			class="w-full {cn('website')}"
			type="text"
			name="website"
			placeholder={m.user_info_website_placeholder()}
			bind:value={website}
			oninput={onChange}
		/>
		<InputResults name="website" {result} />
	</div>
</div>
<div class="flex flex-row mb-2">
	<div class="mr-1 flex-grow">
		<label for="gender"> {m.user_info_gender_label()}</label>
		<select
			class="w-full {cn('gender')}"
			name="gender"
			placeholder={m.user_info_gender_placeholder()}
			bind:value={gender}
			oninput={onChange}
		>
			<option value={'male'}>{m.user_info_gender_male_label()}</option>
			<option value={'female'}>{m.user_info_gender_female_label()}</option>
		</select>
		<InputResults name="gender" {result} />
	</div>
	<div class="ml-1 flex-grow">
		<label for="birthdate"> {m.user_info_birthdate_label()}</label>
		<input
			class="w-full {cn('birthdate')}"
			type="date"
			name="birthdate"
			placeholder={m.user_info_birthdate_placeholder()}
			bind:value={birthdateString}
			oninput={onBirthdateChange}
		/>
		<InputResults name="birthdate" {result} />
	</div>
</div>
<div class="flex flex-row mb-2">
	<div class="mr-1 flex-grow">
		<label for="zoneInfo"> {m.user_info_zone_info_label()}</label>
		<input
			class="w-full {cn('zoneInfo')}"
			type="text"
			name="zoneInfo"
			placeholder={m.user_info_zone_info_placeholder()}
			bind:value={zoneInfo}
			oninput={onChange}
		/>
		<InputResults name="zoneInfo" {result} />
	</div>
	<div class="ml-1 flex-grow">
		<label for="locale"> {m.user_info_locale_label()}</label>
		<input
			class="w-full {cn('locale')}"
			type="text"
			name="locale"
			placeholder={m.user_info_locale_placeholder()}
			bind:value={locale}
			oninput={onChange}
		/>
		<InputResults name="locale" {result} />
	</div>
</div>
<div class="mb-2">
	<label for="address"> {m.user_info_address_label()}</label>
	<input
		class="w-full {cn('address')}"
		type="text"
		name="address"
		placeholder={m.user_info_address_placeholder()}
		bind:value={address}
		oninput={onChange}
	/>
	<InputResults name="address" {result} />
</div>
