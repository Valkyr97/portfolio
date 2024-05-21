<script>
	import '../app.css';

	let isOpen = false;
</script>

<nav class="w-full flex px-12 py-1">
	<button class="self-end absolute right-6 top-1" on:click={() => (isOpen = !isOpen)}>
		<svg class="w-6 h-6 fill-black" xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960">
			<path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
		</svg>
	</button>
	<a href="/">Home</a>
	{#if isOpen}
		<div class="flex flex-col absolute">
			<a href="/skills">Skills</a>
			<a href="/projects">Projects</a>
			<a href="/about">About</a>
		</div>
	{/if}
</nav>

<slot></slot>
