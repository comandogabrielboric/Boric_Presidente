import Vue from 'vue'
import Antd from 'ant-design-vue/lib'

function notificar (titulo, mensaje, tipo = 'open') {
	if (!'open success info warning error'.split(' ').includes(tipo)) {
		console.error(`Notificación de tipo "${tipo}" no existe`)
		return
	}
	this.$notification[tipo]({
		message: titulo,
		description: mensaje,
		style: {
			width: '100%',
			top: '0px',
			marginLeft: '0px',
			marginRight: '0px'
		}
	})
}

Vue.use(Antd)

Vue.prototype.$notificar = notificar
