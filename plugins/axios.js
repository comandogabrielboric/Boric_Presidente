import Vue from 'vue'
import axios from 'axios'
import _ from 'lodash'

async function solicitar (url, errorHandler) {
	const headers = { Accept: 'application/json' }
	const ops = _.merge({}, { url }, { headers })
	const r = await axios(ops).then(r => {
		return r.data
	}).catch(errorHandler || capturadorErrorSolicitud)
	return r
}

Vue.prototype.$solicitar = solicitar

function capturadorErrorSolicitud (error) {
	if (error.response) {
		const { status, data } = error.response
		console.error('Status fuera del rango 2XX', { status, data })
	} else if (error.request) {
		console.error('Sin respuesta (capturadorErrorSolicitud)')
	} else {
		console.error('Error inesperado (capturadorErrorSolicitud)', error.message)
	}
	console.error(error.config)
	throw error
}

export default ({ app }, inject) => {
	inject('axios', axios)
	inject('olicitar', solicitar)
}
