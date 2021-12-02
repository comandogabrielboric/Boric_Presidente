// Como la consola pero funca solo en desarrollo

// const consol = {
// 	log: console.log,
// 	info: console.info,
// 	warn: console.warn,
// 	error: console.error
// }
const consoloff = {
	log: () => {},
	info: () => {},
	warn: () => {},
	error: () => {}
}

// if (!process.env.DEV) consol = consoloff

const consolo = (!process.env.DEV) ? console : consoloff

export default ({ app }, inject) => {
	inject('consolo', consolo)
}

export { consolo, consoloff }
