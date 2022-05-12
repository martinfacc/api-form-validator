import { i18Errors } from '../i18n.config.js'

/**
 * It takes an error name as a parameter and returns an object with a status and a message
 * @param errorName - The name of the error that you want to find in the dictionary.
 * @returns An object with a status and a message.
 */
const findErrorInDictionary = (errorName) => {
	switch (errorName) {
		case 'isNotTypeString':
			return {
				status: 400,
				message: i18Errors.__('isNotTypeString')
			}
		case 'isNotTypeNumber':
			return {
				status: 400,
				message: i18Errors.__('isNotTypeNumber')
			}
		case 'noAuthenticationHeader':
			return {
				status: 401,
				message: i18Errors.__('noAuthenticationHeader')
			}
		case 'customError':
			return {
				callback(error) {
					const { custom } = error
					this.status = 500
					Object.assign(this, custom)
				}
			}
		case 'invalidAuthenticationToken':
			return {
				status: 401,
				message: i18Errors.__('invalidAuthenticationToken')
			}
		case 'invalidSession':
			return {
				status: 401,
				message: i18Errors.__('invalidSession')
			}
		case 'creatingSessionError':
			return {
				status: 409,
				message: i18Errors.__('creatingSessionError')
			}
		case 'MongoServerError':
			return {
				status: 500,
				message: i18Errors.__('MongoServerError')
			}
		default:
			return {
				status: 500,
				message: i18Errors.__('unknownError')
			}
	}
}

/* eslint-disable no-unused-vars */
/**
 * It takes an error, finds the error in the dictionary, and then returns the error with the status
 * code and message.
 * @param error - The error object that was thrown.
 * @param request - The request object.
 * @param response - The response object.
 * @param next - The next middleware function in the stack.
 */
const errorHandler = (error, request, response, next) => {

	console.log({ error })

	const errorName = error.name === 'Error' ? error.message : error.name
	const findedError = findErrorInDictionary(errorName)

	if (findedError.callback) {
		findedError.callback(error)
		delete findedError.callback
	}

	response.status(findedError.status).json(findedError)
}

export default errorHandler