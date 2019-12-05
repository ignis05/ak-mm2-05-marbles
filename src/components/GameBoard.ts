require('./gameboard.css')
import $ from '../helpers/$'
import colors from '../helpers/colors'
import NextDisplay from './NextDisplay'

class GameBoard {
	private DOM: HTMLElement
	private size: number = 9
	private vBoard: string[][] = []
	private nextDisplay: NextDisplay = new NextDisplay('next-display')
	private selectedField: string | null = null
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
			if (this.countFields('empty') == 1) {
				// game over
				window.alert('game over')
				break
			}
			let empty = null
			while (empty === null) {
				const x = this.getRrandomFiled
				if (this.vBoard[x.w][x.h] == 'empty') empty = x
			}
			this.vBoard[empty.w][empty.h] = color
		}

		this.nextDisplay.renderWithColors(colors.randomTab)
	}

	private fieldClickHandler(e: any) {
		const field: HTMLElement = e.currentTarget
		const row: string = `${field.dataset.row}`
		const col: string = `${field.dataset.col}`

		// flield with ball
		if (this.vBoard[parseInt(row, 10)][parseInt(col, 10)] != 'empty') {
			console.log(row)
			console.log(col)
			if (this.selectedField == row + col) this.selectedField = null
			else this.selectedField = row + col
			this.render()
		}
		//empty field
		else {
			console.log('moving to empty field')
			this.moveTo(parseInt(row, 10), parseInt(col, 10))
		}
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
		this.render()
	}

	public render() {
		console.log('rendring')
		console.table(this.vBoard)

		//render table
		this.DOM.innerHTML = ''

		this.vBoard.forEach((row, i) => {
			row.forEach((el, j) => {
				const x = $.ce('div')
				x.classList.add('board-field')
				x.dataset.row = i.toString()
				x.dataset.col = j.toString()
				this.DOM.appendChild(x)

				if (el != 'empty' || this.selectedField != null) {
					x.classList.add('board-field-active')
					x.onclick = this.fieldClickHandler
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
	}
}

export default GameBoard
