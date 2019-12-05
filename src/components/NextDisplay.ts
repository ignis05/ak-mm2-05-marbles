require('./gameboard.css')
import $ from '../helpers/$'
import colors from '../helpers/colors'

class NextDisplay {
	private DOM: HTMLElement
	public colors: string[] = []
	constructor(private displayID: string) {
		const tmp: HTMLElement | null = $.id(displayID)
		if (!tmp) throw new Error('Invalid DOM element ID')
		this.DOM = tmp
	}

	public renderWithColors(colTab: string[]) {
		this.colors = colTab
		this.render()
	}

	public render() {
		this.DOM.innerHTML = ''
		for (const color of this.colors) {
			const c = $.ce('div')
			c.classList.add('nextDisplay-ball')
			c.style.background = color
			this.DOM.appendChild(c)
		}
	}
}

export default NextDisplay
