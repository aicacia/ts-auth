<script lang="ts" module>
	import type { FormEventHandler } from 'svelte/elements';

	export interface PasswordProps {
		containerClass?: string;
		class?: string;
		hidden?: boolean;
		name?: string;
		readonly?: boolean;
		placeholder?: string;
		textarea?: boolean;
		value?: string | null;
		oninput?: FormEventHandler<HTMLInputElement | HTMLTextAreaElement>;
	}
</script>

<script lang="ts">
	import Eye from 'lucide-svelte/icons/eye';
	import EyeOff from 'lucide-svelte/icons/eye-off';

	let {
		containerClass,
		class: className,
		placeholder,
		name,
		readonly,
		hidden = $bindable(true),
		textarea = false,
		value = $bindable(),
		oninput
	}: PasswordProps = $props();

	function toggleHide(e: Event) {
		e.stopPropagation();
		e.preventDefault();
		hidden = !hidden;
	}
</script>

<div class="flex flex-row relative {containerClass || ''}">
	<input
		class="flex flex-grow {className || ''} {hidden ? '' : 'hidden'}"
		type="password"
		{name}
		{readonly}
		{placeholder}
		bind:value
		{oninput}
	/>
	{#if textarea}
		<textarea
			class="flex flex-grow {className || ''} {hidden ? 'hidden' : ''}"
			{name}
			{readonly}
			{placeholder}
			bind:value
			{oninput}
		></textarea>
	{:else}
		<input
			class="flex flex-grow {className || ''} {hidden ? 'hidden' : ''}"
			type="text"
			{name}
			{readonly}
			{placeholder}
			bind:value
			{oninput}
		/>
	{/if}
	<button class="btn icon secondary flex flex-shrink" onclick={toggleHide}>
		{#if hidden}
			<EyeOff />
		{:else}
			<Eye />
		{/if}
	</button>
</div>
