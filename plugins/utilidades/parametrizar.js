const Caracteres = {
	LATIN_MAP: { À: 'A', Á: 'A', Â: 'A', Ã: 'A', Ä: 'A', Å: 'A', Æ: 'AE', Ç: 'C', È: 'E', É: 'E', Ê: 'E', Ë: 'E', Ì: 'I', Í: 'I', Î: 'I', Ï: 'I', Ð: 'D', Ñ: 'N', Ò: 'O', Ó: 'O', Ô: 'O', Õ: 'O', Ö: 'O', Ő: 'O', Ø: 'O', Ù: 'U', Ú: 'U', Û: 'U', Ü: 'U', Ű: 'U', Ý: 'Y', Þ: 'TH', ß: 'ss', à: 'a', á: 'a', â: 'a', ã: 'a', ä: 'a', å: 'a', æ: 'ae', ç: 'c', è: 'e', é: 'e', ê: 'e', ë: 'e', ì: 'i', í: 'i', î: 'i', ï: 'i', ð: 'd', ñ: 'n', ò: 'o', ó: 'o', ô: 'o', õ: 'o', ö: 'o', ő: 'o', ø: 'o', ù: 'u', ú: 'u', û: 'u', ü: 'u', ű: 'u', ý: 'y', þ: 'th', ÿ: 'y' },
	LATIN_SYMBOLS_MAP: { '©': '(c)' },
	GREEK_MAP: { α: 'a', β: 'b', γ: 'g', δ: 'd', ε: 'e', ζ: 'z', η: 'h', θ: '8', ι: 'i', κ: 'k', λ: 'l', μ: 'm', ν: 'n', ξ: '3', ο: 'o', π: 'p', ρ: 'r', σ: 's', τ: 't', υ: 'y', φ: 'f', χ: 'x', ψ: 'ps', ω: 'w', ά: 'a', έ: 'e', ί: 'i', ό: 'o', ύ: 'y', ή: 'h', ώ: 'w', ς: 's', ϊ: 'i', ΰ: 'y', ϋ: 'y', ΐ: 'i', Α: 'A', Β: 'B', Γ: 'G', Δ: 'D', Ε: 'E', Ζ: 'Z', Η: 'H', Θ: '8', Ι: 'I', Κ: 'K', Λ: 'L', Μ: 'M', Ν: 'N', Ξ: '3', Ο: 'O', Π: 'P', Ρ: 'R', Σ: 'S', Τ: 'T', Υ: 'Y', Φ: 'F', Χ: 'X', Ψ: 'PS', Ω: 'W', Ά: 'A', Έ: 'E', Ί: 'I', Ό: 'O', Ύ: 'Y', Ή: 'H', Ώ: 'W', Ϊ: 'I', Ϋ: 'Y' },
	TURKISH_MAP: { ş: 's', Ş: 'S', ı: 'i', İ: 'I', ç: 'c', Ç: 'C', ü: 'u', Ü: 'U', ö: 'o', Ö: 'O', ğ: 'g', Ğ: 'G' },
	RUSSIAN_MAP: { а: 'a', б: 'b', в: 'v', г: 'g', д: 'd', е: 'e', ё: 'yo', ж: 'zh', з: 'z', и: 'i', й: 'j', к: 'k', л: 'l', м: 'm', н: 'n', о: 'o', п: 'p', р: 'r', с: 's', т: 't', у: 'u', ф: 'f', х: 'h', ц: 'c', ч: 'ch', ш: 'sh', щ: 'sh', ъ: '', ы: 'y', ь: '', э: 'e', ю: 'yu', я: 'ya', А: 'A', Б: 'B', В: 'V', Г: 'G', Д: 'D', Е: 'E', Ё: 'Yo', Ж: 'Zh', З: 'Z', И: 'I', Й: 'J', К: 'K', Л: 'L', М: 'M', Н: 'N', О: 'O', П: 'P', Р: 'R', С: 'S', Т: 'T', У: 'U', Ф: 'F', Х: 'H', Ц: 'C', Ч: 'Ch', Ш: 'Sh', Щ: 'Sh', Ъ: '', Ы: 'Y', Ь: '', Э: 'E', Ю: 'Yu', Я: 'Ya' },
	UKRAINIAN_MAP: { Є: 'Ye', І: 'I', Ї: 'Yi', Ґ: 'G', є: 'ye', і: 'i', ї: 'yi', ґ: 'g' },
	CZECH_MAP: { č: 'c', ď: 'd', ě: 'e', ň: 'n', ř: 'r', š: 's', ť: 't', ů: 'u', ž: 'z', Č: 'C', Ď: 'D', Ě: 'E', Ň: 'N', Ř: 'R', Š: 'S', Ť: 'T', Ů: 'U', Ž: 'Z' },
	POLISH_MAP: { ą: 'a', ć: 'c', ę: 'e', ł: 'l', ń: 'n', ó: 'o', ś: 's', ź: 'z', ż: 'z', Ą: 'A', Ć: 'C', Ę: 'e', Ł: 'L', Ń: 'N', Ó: 'o', Ś: 'S', Ź: 'Z', Ż: 'Z' },
	LATVIAN_MAP: { ā: 'a', č: 'c', ē: 'e', ģ: 'g', ī: 'i', ķ: 'k', ļ: 'l', ņ: 'n', š: 's', ū: 'u', ž: 'z', Ā: 'A', Č: 'C', Ē: 'E', Ģ: 'G', Ī: 'i', Ķ: 'k', Ļ: 'L', Ņ: 'N', Š: 'S', Ū: 'u', Ž: 'Z' }
}

const ALL_DOWNCODE_MAPS = []
ALL_DOWNCODE_MAPS[0] = Caracteres.LATIN_MAP
ALL_DOWNCODE_MAPS[1] = Caracteres.LATIN_SYMBOLS_MAP
ALL_DOWNCODE_MAPS[2] = Caracteres.GREEK_MAP
ALL_DOWNCODE_MAPS[3] = Caracteres.TURKISH_MAP
ALL_DOWNCODE_MAPS[4] = Caracteres.RUSSIAN_MAP
ALL_DOWNCODE_MAPS[5] = Caracteres.UKRAINIAN_MAP
ALL_DOWNCODE_MAPS[6] = Caracteres.CZECH_MAP
ALL_DOWNCODE_MAPS[7] = Caracteres.POLISH_MAP
ALL_DOWNCODE_MAPS[8] = Caracteres.LATVIAN_MAP

const Downcoder = {}
Downcoder.Initialize = function () {
	if (Downcoder.map) return
	Downcoder.map = {}
	Downcoder.chars = ''
	for (const i in ALL_DOWNCODE_MAPS) {
		const lookup = ALL_DOWNCODE_MAPS[i]
		for (const c in lookup) {
			Downcoder.map[c] = lookup[c]
			Downcoder.chars += c
		}
	}
	Downcoder.regex = new RegExp('[' + Downcoder.chars + ']|[^' + Downcoder.chars + ']+', 'g')
}

const downcode = function (slug) {
	Downcoder.Initialize()
	let downcoded = ''
	const pieces = slug.match(Downcoder.regex)
	if (pieces) {
		for (let i = 0; i < pieces.length; i++) {
			if (pieces[i].length === 1) {
				const mapped = Downcoder.map[pieces[i]]
				if (mapped != null) {
					downcoded += mapped
					continue
				}
			}
			downcoded += pieces[i]
		}
	} else {
		downcoded = slug
	}
	return downcoded
}

const parameterize = function (stringPorProcesar, numChars, delimiter) {
	if (!stringPorProcesar) return stringPorProcesar
	if (typeof stringPorProcesar !== 'string') throw 'stringPorProcesar debe ser string'
	delimiter = delimiter || '-'

	// changes, e.g., "Petty theft" to "petty_theft"
	// remove all these words from the string before urlifying
	stringPorProcesar = downcode(stringPorProcesar)
	// if downcode doesn't hit, the char will be stripped here
	stringPorProcesar = stringPorProcesar.replace(/[^-\w\s\u4E00-\u9FA5]/g, '') // remove unneeded chars
	stringPorProcesar = stringPorProcesar.replace(/^\s+|\s+$/g, '') // trim leading/trailing spaces
	stringPorProcesar = stringPorProcesar.replace(/[-\s]+/g, delimiter) // convert spaces to hyphens
	stringPorProcesar = stringPorProcesar.toLowerCase() // convert to lowercase
	return stringPorProcesar.substring(0, numChars)// trim to first numChars chars
}


export default parameterize
