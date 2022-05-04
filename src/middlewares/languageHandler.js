import { i18Messages, i18Errors } from '../i18n.config.js'

const languageHandler = (request, response, next) => {
	const language = request.headers['accept-language']
	const acceptedLanguages = ['en', 'es']
	if (acceptedLanguages.includes(language)) {
		i18Messages.setLocale(language)
		i18Errors.setLocale(language)
	}
	next()
}

export default languageHandler