require('./gameboard.css')
import $ from '../helpers/$'
import colors from '../helpers/colors'
import NextDisplay from './NextDisplay'

class GameBoard {
	private DOM: HTMLElement
	private size: number = 9
	private vBoard: string[][] = []
	private nextDisplay: NextDisplay = new NextDisplay('next-display')
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

	public render() {
		console.log('rendring')
		console.table(this.vBoard)

		//render table
		this.DOM.innerHTML = ''

		for (const row of this.vBoard) {
			for (const el of row) {
				const x = $.ce('div')
				x.classList.add('board-field')
				this.DOM.appendChild(x)

				//ball render
				if (colors.tab.includes(el)) {
					const c = $.ce('div')
					c.classList.add('board-field-ball')
					c.style.background = el
					x.appendChild(c)
				}
			}
		}
	}
}

export default GameBoard
