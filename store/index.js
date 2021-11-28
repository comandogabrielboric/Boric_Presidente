import axios from 'axios'
import _ from 'lodash'
import { sanitizar } from '../plugins/sanitizador'

export const state = () => {
	return {
		propuestas: [],
		actividades: []
	}
}

export const mutations = {
	propuestas (state, value) {
		state.propuestas = value.propuestas
	},
	actividades (state, value) {
		state.actividades = value.actividades
	},
	sanitizarYGuardar (state, { propuestas, actividades }) {
		state.propuestas = _.map(propuestas, pr => {
			pr.contenido = sanitizar(pr.contenido)
			return pr
		})
		state.actividades = _.map(actividades, pr => {
			pr.Descripcion = sanitizar(pr.Descripcion)
			return pr
		})
	}
}

export const actions = {
	async nuxtServerInit ({ commit }) {
		const propuestas = await axios.get(`${process.env.cmsURL}/programa`).then(r => r.data)

		const actividades = await axios.get(`${process.env.cmsURL}/actividades-en-terrenos`).then(r => r.data)
		commit('sanitizarYGuardar', { propuestas: propuestas.propuestas, actividades })
	}
}

export const getters = {
}
