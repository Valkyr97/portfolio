<script lang="ts">
	import type { PageData } from './$types';
	export let data: PageData;
	const project = data.projects.find((pr) => pr.prId === data.id);
</script>

<div class="w-full grid grid-cols-12">
	<!-- svelte-ignore a11y-media-has-caption -->
	<video class="col-start-3 col-span-8 w-full h-full" id="player" playsinline controls poster={project?.poster}>
		<source src={project?.demo} type="video/webm" />
	</video>
</div>
