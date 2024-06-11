<script lang="ts">
	// import Cloud from './Cloud.svelte';
	import personalPlaceholder from '$lib/assets/placeholder.jpg';
	import type { PageData } from './$types';
	import ProjectCard from './ProjectCard.svelte';

	export let data: PageData;
</script>

<div class="overflow-hidden pb-8">
	<div
		class="min-h-screen relative bg-gradient-to-br overflow-hidden w-screen from-[#B7F8DB] to-[#50A7C2] dark:from-[rgb(5,1,30)] dark:to-black pt-6 -z-10"
	>
		<div class="grid grid-cols-12 mb-80">
			<!-- <Main3dScene /> -->
			<div
				class="px-2 lg:px-0 lg:col-start-2 mt-[90%] md:mt-[60%] xl:mt-[45%] col-span-full lg:col-span-8 z-20"
			>
				<p class="text-4xl md:text-6xl lg:text-8xl">
					Hi, I'm <b>Janyel</b>
				</p>
				<p class="text-sm md:text-base lg:text-xl mt-4">
					a <b>full-stack web developer</b> with a passion for building solutions. I also dabble in
					<b>Android</b>
					development and <b>data analysis</b>
				</p>
				<p class="text-2xl md:text-3xl lg:text-5xl mt-1">
					I can assist in building robust web, mobile and desktop applications
				</p>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-12 w-screen">
		<div class="col-start-6 col-span-2 flex w-full place-content-center">
			<h1 class="text-3xl md:text-5xl font-semibold text-center py-12">About</h1>
		</div>
		<div class="col-span-full lg:col-start-4 lg:col-span-6 flex flex-col md:flex-row gap-x-12">
			<div class="flex flex-1">
				<img src={personalPlaceholder} alt="This is me" />
			</div>
			<div class="flex flex-1 flex-col gap-y-6">
				<p class="px-4 whitespace-pre-line">
					Hola soy ingeniero informático graduado y desarrollador web con 4 años de experiencia.
					Comencé a trabajar en el año xxxx como desarrollador full-stack para la empresa NTSprint y
					desde el año xxxx trabajo como desarrollador y project manager freelancer en un pequeño
					equipo de desarrollo.
				</p>
				<a class="text-emerald-600 font-semibold" href="/about">Checkout my resume</a>
				<div class="flex flex-col md:flex-row md:flex-wrap gap-x-4 w-full">
					<h3 class="w-full text-center text-lg uppercase font-semibold">Skills</h3>
					{#each data.skills as skill}
						<div class="flex gap-x-1">
							<img class="h-6 w-6" src={skill.icon} alt={skill.name} />
							<span class="uppercase">{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>

	<div class="h-80 custom-shadow mb-1" />

	<div
		class="w-full grid grid-cols-12 bg-gradient-to-b from-gray-200 to-gray-50 dark:from-gray-900 dark:to-black"
	>
		<div class="col-start-6 col-span-2 flex w-full place-content-center">
			<h1 class="text-5xl font-semibold text-center py-12">Projects</h1>
		</div>
		<div class="col-start-2 col-span-10">
			<div class="flex flex-wrap gap-x-4 gap-y-4 w-full place-content-between">
				{#each data.projects as pr}
					{@const sk = data.skills.reduce((acc, skill) => {
						if (pr.skills.includes(skill.id)) {
							//@ts-ignore
							acc.push({ name: skill.name, icon: skill.icon });
						}
						return acc;
					}, [])}
					<div class="h-[28rem] w-full sm:w-[45%] lg:w-[32%]">
						<ProjectCard img={pr.poster} description={pr.description} id={pr.id} skills={sk} />
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>

<style>
	/* :global(*) {
		overflow: hidden;
	} */
</style>
