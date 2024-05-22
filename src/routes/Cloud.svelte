<script lang="ts">
	import cloud from '$lib/assets/cloud.png';

	export let speed: number;
	export let delay = 0;
</script>

<img
	class="cloud_animation translate-x-full dark:brightness-50"
	style="--spd:{speed}; --dly: {delay};"
	src={cloud}
	alt="A cloud"
/>

<style>
	@keyframes travel {
		100% {
			transform: translateX(-100vw);
		}
	}

	.cloud_animation {
		animation-duration: calc(40 / var(--spd) * 5s);
		animation-delay: calc(var(--dly) * 1s);
		animation-iteration-count: infinite;
		animation-name: travel;
		animation-timing-function: linear;
		position: absolute;
	}
</style>
