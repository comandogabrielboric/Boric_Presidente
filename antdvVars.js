const colorMarca = '#A82CD0'

const colorError = '#FE6159'
const colorExito = '#59D078'

const fontSize = 18
const textoColor = '#402673'

const linkColor = colorMarca

const vars = {
	'primary-color': colorMarca, // primary color for all components
	'link-color': linkColor, // link color
	'success-color': colorExito, // success state color
	'warning-color': '#5E4C2B', // warning state color
	'error-color': colorError, // error state color
	'highlight-color': colorError, // error state color
	'heading-color': '#1E212B', // heading text color

	'text-color': textoColor, // major text color
	'text-color-secondary': 'rgba(0, 0, 0, 0.45)', // secondary text color

	'disabled-color': 'rgba(0, 0, 0, 0.25)', // disable state color
	'border-color-base': '#d9d9d9', // major border color
	'border-radius-base': 0, // major border radius
	'border-width-base': '0',
	'box-shadow-base': '0 0 0 rgba(0, 0, 0, 0)', // major shadow for layers
	'font-family': '"Roboto Slab", -apple-system, BlinkMacSystemFont, Meiryo, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
	'font-size-base': `${fontSize}px`,
	'font-size-lg': '20px',
	'font-size-sm': '13px',
	'padding-lg': '28px',
	'padding-md': '20px',
	'padding-sm': '16px',
	'padding-xs': '12px',

	'@component-background': '#fafafa'
}

const botones = {
	'btn-default-color': textoColor,
	'btn-default-bg': '#f0f0f0',
	// 'btn-default-bg': botonPrincipalFondo,
	'btn-height-base': '40px',
	'btn-height-lg': '48px',
	'btn-height-sm': '32px',

	'btn-border-width': '0',
	'btn-shadow': '0 0 0 rgba(0, 0, 0, 0)',

	'btn-primary-shadow': '0 0 0 rgba(0, 0, 0, 0)',
	'btn-primary-bg': colorMarca
}

const input = {
	// 'input-bg': `#f00`
}

const checkbox = {
	'checkbox-size': `${fontSize * 1.2}px`
}

const todo = Object.assign({}, vars, botones, input, checkbox)

export default todo
