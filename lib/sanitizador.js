import * as sanitizeHtml from 'sanitize-html'

function sanitizar (html) {
	// const demarcado = marked(markedMD)
	const opciones = {
		allowedAttributes: {
			a: ['href', 'name', 'target'],
			'*': ['href', 'align', 'alt', 'center', 'bgcolor', 'style', 'class'],
			img: ['src', 'srcset']
		}
	}
	// console.log('presanitizado', html)
	const sanitizado = sanitizeHtml(html, opciones)
	// console.log('sanitizado', sanitizado)
	return sanitizado
}

export default sanitizar
