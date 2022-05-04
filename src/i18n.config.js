import { I18n } from 'i18n'
import path from 'path'

export const i18Errors = new I18n({
	locales: ['en', 'es'],
	defaultLocale: 'es',
	queryParameter: 'lang',
	directory: path.join('./', 'src', 'locales', 'errors'),
	api: {
		'__': 'translate',
		'__n': 'translateN'
	}
})

export const i18Messages = new I18n({
	locales: ['en', 'es'],
	defaultLocale: 'es',
	queryParameter: 'lang',
	directory: path.join('./', 'src', 'locales', 'messages'),
	api: {
		'__': 'translate',
		'__n': 'translateN'
	}
})