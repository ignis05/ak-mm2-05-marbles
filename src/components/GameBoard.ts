import $ from '../helpers/$'
const css = require('./gameboard.css')

class GameBoard {
	private DOM: HTMLElement
	private size: number = 9
	private vBoard: string[][] = []
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
	}

	public render() {
		//render table
		this.DOM.innerHTML = ''

		for (let row of this.vBoard) {
			for (let el of row) {
				let x = $.ce('div')
				x.classList.add('board-field')
				this.DOM.appendChild(x)
			}
		}
	}
}

export default GameBoard
