require('./gameboard.css')
import $ from '../helpers/$'
import colors from '../helpers/colors'
import findPath from '../helpers/pathfinding'
import NextDisplay from './NextDisplay'
import PointCounter from './PointCounter'

class GameBoard {
	private DOM: HTMLElement
	private size: number = 9
	private vBoard: string[][] = []
	private domBoard: HTMLElement[][] = []
	private lastUpdate: number[] | null = null
	private nextDisplay: NextDisplay = new NextDisplay('next-display')
	private pointCounter: PointCounter = new PointCounter('score-display')
	private selectedField: string | null = null
	private path: number[][] | null = null
	constructor(private boardID: string) {
		const tmpBoard: HTMLElement | null = $.id(boardID)
		if (!tmpBoard) throw new Error('Invalid DOM element ID')
		this.DOM = tmpBoard

		// create board
		for (let i = 0; i < this.size; i++) {
			this.vBoard[i] = []
			for (let j = 0; j < this.size; j++) {
				this.vBoard[i][j] = 'empty'
			}
		}
		console.table(this.vBoard)
		this.nextDisplay.colors = colors.randomTab

		this.fieldClickHandler = this.fieldClickHandler.bind(this)
		this.highlightPath = this.highlightPath.bind(this)
	}

	private get getRandomRow(): number {
		return Math.floor(Math.random() * this.size)
	}

	private get getRrandomFiled() {
		const _this = this
		enum Field {
			w = _this.getRandomRow,
			h = _this.getRandomRow,
		}
		return Field
	}

	private countFields(value: string): number {
		return this.vBoard.reduce((reducer, el) => reducer + el.filter(x => x == value).length, 0)
	}

	public spawnNewBalls() {
		console.log('adding new balls')
		console.log(this.nextDisplay.colors)
		for (const color of this.nextDisplay.colors) {
			let empty = null
			while (empty === null) {
				const x = this.getRrandomFiled
				if (this.vBoard[x.w][x.h] == 'empty') empty = x
			}
			this.vBoard[empty.w][empty.h] = color
			this.checkAfterMove(empty.w, empty.h)
			if (this.countFields('empty') == 0) {
				// game over
				window.alert('game over')
				break
			}
		}

		this.nextDisplay.renderWithColors(colors.randomTab)
		this.render()
	}

	private checkAround(x: number, y: number) {
		let emptyFields = 0
		if (this.vBoard[x - 1] && this.vBoard[x - 1][y] == 'empty') emptyFields++
		if (this.vBoard[x + 1] && this.vBoard[x + 1][y] == 'empty') emptyFields++
		if (this.vBoard[x][y - 1] == 'empty') emptyFields++
		if (this.vBoard[x][y + 1] == 'empty') emptyFields++
		return emptyFields > 0
	}

	private fieldClickHandler(e: any) {
		this.path = null
		const field: HTMLElement = e.currentTarget
		const row: string = `${field.dataset.row}`
		const col: string = `${field.dataset.col}`
		const rowN = parseInt(row, 10)
		const colN = parseInt(col, 10)

		// flield with ball
		if (this.vBoard[rowN][colN] != 'empty') {
			console.log(row)
			console.log(col)
			if (this.selectedField == row + col) this.selectedField = null
			else this.selectedField = row + col
			if (!this.checkAround(rowN, colN)) this.selectedField = null
			this.render()
		}
		//empty field
		else {
			console.log('moving to empty field')
			const x = parseInt(row, 10)
			const y = parseInt(col, 10)
			if (this.selectedField == null || this.selectedField[0] == null || this.selectedField[1] == null) throw new Error('invalid values')
			const way = findPath(JSON.parse(JSON.stringify(this.vBoard)), { x: parseInt(this.selectedField[0], 10), y: parseInt(this.selectedField[1], 10) }, { x, y })
			if (way == null) return
			this.path = null
			this.moveTo(x, y)
		}
	}

	private highlightPath(e: any) {
		if (this.selectedField == null || this.selectedField[0] == null || this.selectedField[1] == null) return
		const field: HTMLElement = e.currentTarget
		const x: number = parseInt(`${field.dataset.row}`, 10)
		const y: number = parseInt(`${field.dataset.col}`, 10)
		if (this.vBoard[x][y] != 'empty') return
		if (this.lastUpdate && this.lastUpdate[0] == x && this.lastUpdate[1] == y) return
		const way = findPath(JSON.parse(JSON.stringify(this.vBoard)), { x: parseInt(this.selectedField[0], 10), y: parseInt(this.selectedField[1], 10) }, { x, y })
		if (!way) return
		this.lastUpdate = [x, y]
		console.log('updating path')
		this.path = way.path
		this.render()
	}

	private moveTo(col: number, row: number) {
		console.log(col, row)
		if (this.vBoard[col][row] != 'empty') throw new Error('Attempted to move to non-empty field')
		if (this.selectedField == null) throw new Error('Attempted to move with no field selected')

		const selCol = this.selectedField[0]
		const selRow = this.selectedField[1]

		const color: string = this.vBoard[parseInt(selCol, 10)][parseInt(selRow, 10)]
		if (color == 'empty') throw new Error('Selecetd field is empty')
		this.vBoard[parseInt(selCol, 10)][parseInt(selRow, 10)] = 'empty'
		this.vBoard[col][row] = color

		this.selectedField = null

		const gotPoints = this.checkAfterMove(col, row)
		console.log('got points:', gotPoints)
		if (!gotPoints) this.spawnNewBalls()

		this.render()
	}

	private clearBalls(params: { i: number; j: number; left: number; right: number; top: number; bot: number; rtop: number; ltop: number; rbot: number; lbot: number }) {
		console.log('removing with params:', params)
		let points = 1
		const { i, j, left, right, top, bot, rtop, rbot, ltop, lbot } = params
		const b = this.vBoard
		b[i][j] = 'empty'

		// horizontal
		for (let x = i - left; x <= i + right; x++) {
			if (x == i) continue // skip central point
			b[x][j] = 'empty'
			points++
		}
		// vertical
		for (let x = j - top; x <= j + bot; x++) {
			if (x == j) continue // skip central point
			b[i][x] = 'empty'
			points++
		}
		// rbot
		for (let x = 1; x <= rbot; x++) {
			b[i + x][j + x] = 'empty'
			points++
		}
		// ltop
		for (let x = 1; x <= ltop; x++) {
			b[i - x][j - x] = 'empty'
			points++
		}
		// rtop
		for (let x = 1; x <= rtop; x++) {
			b[i + x][j - x] = 'empty'
			points++
		}
		// lbot
		for (let x = 1; x <= lbot; x++) {
			b[i - x][j + x] = 'empty'
			points++
		}

		this.render()

		this.pointCounter.addPoints(points)
	}

	private checkAfterMove(i: number, j: number): boolean {
		const el = this.vBoard[i][j]
		console.log(`Placed ${el} on [${i}, ${j}]`)
		// horizontal
		let left: number = 0
		for (let x = i - 1; x >= 0; x--) {
			if (this.vBoard[x][j] == el) left++
			else break
		}
		let right: number = 0
		for (let x = i + 1; x < this.size; x++) {
			if (this.vBoard[x][j] == el) right++
			else break
		}
		// vertical
		let top: number = 0
		for (let x = j - 1; x >= 0; x--) {
			if (this.vBoard[i][x] == el) top++
			else break
		}
		let bot: number = 0
		for (let x = j + 1; x < this.size; x++) {
			if (this.vBoard[i][x] == el) bot++
			else break
		}
		// l top
		let ltop: number = 0
		for (let x = 1; true; x++) {
			let ti = i - x
			let tj = j - x
			if (ti < 0 || tj < 0 || ti >= this.size || tj >= this.size) break

			if (this.vBoard[ti][tj] == el) ltop++
			else break
		}
		// l bot
		let lbot: number = 0
		for (let x = 1; true; x++) {
			let ti = i - x
			let tj = j + x
			if (ti < 0 || tj < 0 || ti >= this.size || tj >= this.size) break

			if (this.vBoard[ti][tj] == el) lbot++
			else break
		}
		// r bot
		let rbot: number = 0
		for (let x = 1; true; x++) {
			let ti = i + x
			let tj = j + x
			if (ti < 0 || tj < 0 || ti >= this.size || tj >= this.size) break

			if (this.vBoard[ti][tj] == el) rbot++
			else break
		}
		// r top
		let rtop: number = 0
		for (let x = 1; true; x++) {
			let ti = i + x
			let tj = j - x
			if (ti < 0 || tj < 0 || ti >= this.size || tj >= this.size) break

			if (this.vBoard[ti][tj] == el) rtop++
			else break
		}

		if (left + right < 4) {
			left = 0
			right = 0
		}
		if (top + bot < 4) {
			top = 0
			bot = 0
		}
		if (ltop + rbot < 4) {
			ltop = 0
			rbot = 0
		}
		if (rtop + lbot < 4) {
			rtop = 0
			lbot = 0
		}
		let rmCount = left + right + top + bot + rtop + ltop + rbot + lbot
		if (rmCount > 0) this.clearBalls({ i, j, left, right, top, bot, ltop, lbot, rtop, rbot })
		return rmCount > 0
	}

	public render() {
		console.log('rendring')
		// console.table(this.vBoard)

		//render table
		this.DOM.innerHTML = ''
		this.domBoard = []
		this.vBoard.forEach(row => this.domBoard.push([]))

		this.vBoard.forEach((row, i) => {
			row.forEach((el, j) => {
				const x = $.ce('div')
				x.classList.add('board-field')
				x.dataset.row = i.toString()
				x.dataset.col = j.toString()
				x.addEventListener('mouseenter', this.highlightPath)
				this.DOM.appendChild(x)
				this.domBoard[i][j] = x

				if (el != 'empty' || this.selectedField != null) {
					x.classList.add('board-field-active')
					x.addEventListener('click', this.fieldClickHandler)
				}

				//ball render
				if (colors.tab.includes(el)) {
					const c = $.ce('div')
					c.classList.add('board-field-ball')
					if (this.selectedField == `${i}${j}`) c.classList.add('board-field-ball-selected')
					c.style.background = el
					x.appendChild(c)
				}
			})
		})

		if (this.path) {
			for (const [x, y] of this.path) {
				this.domBoard[x][y].classList.add('path')
			}
		}
	}
}

export default GameBoard
