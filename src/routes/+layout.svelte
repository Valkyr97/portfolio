<script>
	import { onMount } from 'svelte';
	import { isDarkMode } from '../stores/ui.store';
	import Header from './Header.svelte';

	import '../app.css';

	onMount(() => {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDarkMode.set(true);
			document.documentElement.classList.add('dark');
		} else {
			isDarkMode.set(false);
			document.documentElement.classList.remove('dark');
		}
	});
</script>

<!-- <svelte:head> -->
<!-- <link rel="stylesheet" href="../node_modules/plyr/dist/plyr.css" /> -->
<!-- </svelte:head> -->

<Header />
<slot></slot>
