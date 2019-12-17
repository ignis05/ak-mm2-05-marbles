export default function(grid: string[][], start: { x: number; y: number }, end: { x: number; y: number }): { dist: number; path: number[][] } | null {
	if (start.x == end.x && start.y == end.y) return null

	const queue: Array<{ coord: number[]; dist: number; path: number[][] }> = [{ coord: [start.x, start.y], dist: 0, path: [[start.x, start.y]] }]
	const directs = [[-1, 0], [0, 1], [1, 0], [0, -1]]
	const isValidCoord = (x: number, y: number) => x >= 0 && x < grid.length && y >= 0 && y < grid.length

	while (queue.length) {
		const { coord, dist, path } = queue.shift()!
		const [x, y] = coord

		// found end
		if (x == end.x && y == end.y) {
			return { dist, path }
		}

		// add move possible paths
		for (let [moveX, moveY] of directs) {
			const nextX: number = x + moveX
			const nextY: number = y + moveY

			if (isValidCoord(nextX, nextY) && grid[nextX][nextY] == 'empty') {
				queue.push({ coord: [nextX, nextY], dist: dist + 1, path: [...path, [nextX, nextY]] })
				grid[nextX][nextY] = 'visited'
			}
		}
	}
	return null
}
