import marked from 'marked'
import * as sanitizeHtml from 'sanitize-html'

function demarcar (markedMD) {
	const demarcado = marked(markedMD)
	const sanitizado = sanitizeHtml(demarcado)
	// console.log('sanitizado', sanitizado)
	return sanitizado
}

export default ({ app }, inject) => {
	inject('demarcar', demarcar)
}
