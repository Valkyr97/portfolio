<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';

	// Scene
	const scene = new THREE.Scene();
    scene.backgroundBlurriness = 1

	// Red Cube
	const geometry = new THREE.BoxGeometry(1, 1, 1, 1);
	const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
	const mesh = new THREE.Mesh(geometry, material);
	scene.add(mesh);

	// Sizes
	const sizes = {
		width: 800,
		height: 600
	};

	// Camera
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
	// @ts-ignore
	camera.position.z = 3;
	// @ts-ignore
	camera.position.x = 2;
	scene.add(camera);

	// Renderer
	let canvas: HTMLCanvasElement;

	onMount(() => {
		const renderer = new THREE.WebGLRenderer({
			canvas
		});
		renderer.setSize(sizes.width, sizes.height);
        renderer.setClearAlpha(0)
		renderer.render(scene, camera);
	});
</script>

<canvas bind:this={canvas} />
