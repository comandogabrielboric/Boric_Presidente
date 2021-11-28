import Vue from 'vue'

let emitirEvento = function (eventName, variables) {
	window.dataLayer.push(Object.assign(variables, { event: eventName }))
}
const gTagManager = process.env.gTagManager
if (!gTagManager) emitirEvento = function () {}
// Vue.prototype.$gtmPush = emitirEvento
Vue.prototype.$gtm = {
	push: emitirEvento
}
