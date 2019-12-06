require('./gameboard.css')
import $ from '../helpers/$'

class PointCounter {
	private DOM: HTMLElement
	public points: number = 0
	constructor(displayID: string) {
		const tmp: HTMLElement | null = $.id(displayID)
		if (!tmp) throw new Error('Invalid DOM element ID')
		this.DOM = tmp
		this.render()
	}

	public addPoints(points: number) {
		this.points += points
		this.render()
	}

	public render() {
		this.DOM.innerHTML = this.points.toString()
	}
}

export default PointCounter
