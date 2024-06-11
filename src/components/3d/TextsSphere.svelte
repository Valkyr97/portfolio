<script lang="ts">
	import { onMount } from 'svelte';
	import * as THREE from 'three';
	import { OrbitControls } from 'three/examples/jsm/Addons.js';
	import { generatePointsInSphere as generatePoints } from '$lib/helpers';

	export let texts: string[];
	export let radius = 15;

	/**
	 * Scene
	 */
	const scene = new THREE.Scene();

	/**
	 * Particles
	 */
	// Geometry
	const geometry = new THREE.BufferGeometry();

	// geometry.computeBoundingSphere();

	// Material
	const material = new THREE.PointsMaterial();
	material.size = 2;
	material.sizeAttenuation = false;

	// Points
	const particles = new THREE.Points(geometry, material);
	scene.add(particles);

	/**
	 * Sizes
	 */
	const sizes = {
		width: 800,
		height: 600
	};

	/**
	 *  Camera
	 */
	const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
	// @ts-ignore
	camera.position.z = 30;
	// @ts-ignore
	camera.position.x = 1;
	scene.add(camera);

	let canvas: HTMLCanvasElement;

	const clock = new THREE.Clock();

	onMount(async () => {
		let interestPoints = generatePoints(radius, texts.length).map((p, i) => {
			const el = document.createElement('p');
			el.append(texts[i]);
			el.className = 'absolute z-20 right-[50%] top-[50%]';
			return {
				position: new THREE.Vector3(...p),
				el
			};
		});

		if (interestPoints.length > 0) {
			const canvas = document.getElementById('sphere-canvas');
			interestPoints.forEach(({ el }) => {
				canvas?.appendChild(el);
			});
		}

		const vertices = new Float32Array(interestPoints?.flatMap((p) => p.position.toArray()));

		geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

		const renderer = new THREE.WebGLRenderer({
			canvas
		});
		renderer.setSize(sizes.width, sizes.height);

		const controls = new OrbitControls(camera, canvas);

		/**
		 * Animations
		 */
		const tick = async () => {
			const elapsedTime = clock.getElapsedTime();

			controls.update();

			// Object update
			// @ts-ignore
			particles.rotation.y = elapsedTime * Math.PI * 0.03;
			// @ts-ignore
			particles.rotation.x = elapsedTime * Math.PI * 0.02;

			// for (const point of interestPoints) {
			// 	const screenPosition = point.position.clone();
			// 	screenPosition.project(camera);
			// }

			// Renderer
			renderer.render(scene, camera);
			console.log(interestPoints[0].position.clone().project(camera));

			window.requestAnimationFrame(tick);
		};

		tick();
	});
</script>

<div class="relative">
	<canvas bind:this={canvas} />
	<div id="sphere-canvas" />
</div>
