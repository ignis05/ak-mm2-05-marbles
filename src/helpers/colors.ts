export default {
	tab: ['red', 'green', 'blue', 'cyan', 'magenta', 'yellow', 'black'],
	get random() {
		return this.tab[Math.floor(Math.random() * 7)]
	},
	get randomTab() {
		return [this.random, this.random, this.random]
	},
	validateFunc(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
		console.log(target, propertyKey, descriptor)
	},
}
