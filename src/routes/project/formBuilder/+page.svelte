<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="w-full grid grid-cols-12">
	<div class="col-start-3 col-span-8 flex gap-x-12">
		<div class="flex-1 flex-shrink-0 h-full items-center place-content-center">
			<p>
				Dnodarse es un sitio dedicado a la oferta de servicios entre los que se encuentra una tienda
				online. Para el dueño del negocio era de vital importancia la posibilidad de crear y editar
				los formularios a través de los cuáles los potenciales clientes podrían alquilar sus
				servicios
			</p>
		</div>
		<div class="flex-1">
			<img class="object-contain object-center" src={data.landing} alt="" />
		</div>
	</div>
	<!-- svelte-ignore a11y-media-has-caption -->
	<video
		class="col-start-3 col-span-8 w-full h-full"
		id="player"
		playsinline
		controls
		poster={data.poster}
	>
		<source src={data.demo} type="video/webm" />
	</video>
</div>
