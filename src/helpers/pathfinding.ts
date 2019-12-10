export default function(grid: string[][], start: { x: number; y: number }, end: { x: number; y: number }): { dist: number; path: number[][] } | null {
	console.log('searching for path')
	console.log(arguments)
	if (start.x == end.x && start.y == end.y) throw new Error('bruh')

	grid[start.x][start.y] = 'START'
	grid[end.x][end.y] = 'END'

	const queue: Array<{ coord: number[]; dist: number; path: number[][] }> = [{ coord: [start.x, start.y], dist: 0, path: [[start.x, start.y]] }]
	const directs = [
		[-1, 0],
		[0, 1],
		[1, 0],
		[0, -1],
	]
	const isValidCoord = (x: number, y: number) => x >= 0 && x < grid.length && y >= 0 && y < grid.length

	while (queue.length) {
		let tmp = queue.shift()
		console.log(tmp)
		if (tmp == undefined) throw new Error('this error will never throw, typescript is retarded')
		const x: number = tmp.coord[0]
		const y: number = tmp.coord[1]
		const dist: number = tmp.dist
		const path: number[][] = tmp.path

		// found end
		if (x == end.x && y == end.y) {
			let way = { dist, path }
			console.log('found:', way)
			return way
		}

		// add move possible paths
		for (let [moveX, moveY] of directs) {
			const nextX: number = x + moveX
			const nextY: number = y + moveY

			if (isValidCoord(nextX, nextY) && (grid[nextX][nextY] == 'empty' || grid[nextX][nextY] == 'END')) {
				queue.push({ coord: [nextX, nextY], dist: dist + 1, path: [...path, [nextX, nextY]] })
				grid[nextX][nextY] = 'visited'
			}
		}
	}

	console.log('not found')
	return null
}
