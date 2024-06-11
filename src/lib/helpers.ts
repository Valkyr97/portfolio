export function generatePointsInSphere(
	radius: number,
	numPoints: number
): [number, number, number][] {
	const points: [number, number, number][] = [];

	// Distribuir los puntos en la esfera utilizando la secuencia de Fibonacci
	const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // Ángulo dorado
	for (let i = 0; i < numPoints; i++) {
		const y = 1 - (i / (numPoints - 1)) * 2; // Rango [-1, 1]
		const radiusAtY = Math.sqrt(1 - y * y) * radius;

		const theta = phi * i; // Ángulo azimutal
		const x = Math.cos(theta) * radiusAtY;
		const z = Math.sin(theta) * radiusAtY;

		points.push([x, y * radius, z]);
	}

	return points;
}
