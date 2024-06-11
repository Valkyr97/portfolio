<script lang="ts">
	export let img: { src: string; alt?: string };
	export let description: string;
	export let id: string;
	export let skills: { name: string; icon: string }[];
</script>

<div
	class="flex flex-col h-full gap-y-1 border rounded p-2 bg-white dark:bg-black dark:border-gray-900 shadow dark:shadow-white/5"
>
	<img
		class="w-full p-2 rounded bg-slate-300 dark:bg-slate-900 shrink-0 object-contain object-center h-[65%]"
		src={img.src}
		alt={img.alt || description}
	/>
	<div class="p-2 flex flex-col h-full place-content-between">
		<p class="text-sm md:text-base">{@html description}</p>
		<div class="flex flex-wrap gap-x-2">
			{#each skills as skill}
				<div class="flex gap-x-0.5 items-center">
					<img class="h-5 w-5" src={skill.icon} alt={skill.name} />
					<span class="uppercase text-sm">{skill.name}</span>
				</div>
			{/each}
		</div>
		<div class="flex">
			<a class="text-emerald-600" href="project/{id}">Case Study</a>
		</div>
	</div>
</div>
