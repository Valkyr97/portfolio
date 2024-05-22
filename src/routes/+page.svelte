<script lang="ts">
	// import Cloud from './Cloud.svelte';
	import personalPlaceholder from '$lib/assets/placeholder.jpg';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="overflow-hidden">
	<div
		class="min-h-screen relative bg-gradient-to-br overflow-hidden w-screen from-[#B7F8DB] to-[#50A7C2] dark:from-[rgb(5,1,30)] dark:to-black pt-6 -z-10"
	>
		<!-- <div class="-z-10 w-full relative">
			<Cloud speed={3} --ht="16rem" --top="60px" --right="0" />
			<Cloud speed={5} --ht="8rem" --top="450px" --right="0" />
			<Cloud speed={5} delay={15} --ht="12rem" --top="45px" --right="0" />
		</div> -->
		<div class="grid grid-cols-12 mb-80">
			<div class="col-start-2 mt-[45%] col-span-8 z-20">
				<p class="text-8xl">
					Hi, I'm <b>Janyel</b>
				</p>
				<p class="text-xl mt-4">
					a <b>full-stack web developer</b> with a passion for building solutions. I also dabble in Android
					development and data analysis
				</p>
				<p class="text-5xl mt-1">
					I can assist in building robust web, mobile and desktop applications
				</p>
			</div>
		</div>
	</div>

	<div class="grid grid-cols-12 w-screen">
		<div class="col-start-6 flex w-full place-content-center">
			<h1 class="text-5xl font-semibold text-center py-12">About</h1>
		</div>
		<div class="col-start-3 col-span-7 flex gap-x-12">
			<div class="flex flex-1">
				<img src={personalPlaceholder} alt="This is me" />
			</div>
			<div class="flex flex-1 flex-col gap-y-6">
				<p class="px-4">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam sed quas, ducimus autem
					necessitatibus mollitia recusandae error sapiente ipsam quisquam aliquam iste facilis ea
					aspernatur cupiditate harum ipsum, maiores est laudantium. Facere laudantium enim maiores
					quaerat nostrum fuga ipsam praesentium quam ex eum. Dolor quisquam ut provident expedita
					deleniti?
				</p>
				<div class="flex flex-col w-full">
					<h3 class="w-full text-center text-lg uppercase font-semibold">Skills</h3>
					{#each data.skills as skill}
						<div class="flex gap-x-2">
							<img class="h-6 w-6" src={skill.icon} alt={skill.name} />
							<span class="uppercase">{skill.name}</span>
						</div>
					{/each}
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	/* :global(*) {
		overflow: hidden;
	} */
</style>
