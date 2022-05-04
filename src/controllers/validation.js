import TypeGeneric from '../types/generic.js'
import TypeString from '../types/string.js'
import TypeNumber from '../types/number.js'

/**
 * It takes a field, a schema, and data, and returns an error if the field is invalid.
 * @param field - the field name
 * @param schema - the schema object
 * @param data - the data to validate
 * @returns The error message.
 */
const validateField = (field, schema, data) => {
	const { type, rules } = schema[field]
	const value = data[field]
	const typeClass =
		type === 'string' ? new TypeString(value) :
			type === 'number' ? new TypeNumber(value) :
				new TypeGeneric(value)
	typeClass.validateByRules(rules)
	return typeClass.error
}

/**
 * It takes a schema and data, and returns an object with the errors for each field.
 * @param schema - The schema object that contains the validation rules for each field.
 * @param data - the data to validate
 * @returns An object with the field names as keys and the error messages as values.
 */
const validateSchema = (schema, data) => {
	const fields = Object.keys(schema)
	const errors = {}
	fields.forEach(field => {
		const error = validateField(field, schema, data)
		if (error) errors[field] = error
	})
	return errors
}


/**
 * It takes a schema and data, validates the data against the schema, and returns an object of errors.
 * @param request - The request object.
 * @param response - The response object.
 * @param next - The next middleware function in the stack.
 */
export const validate = (request, response, next) => {
	try {
		const { data, schema } = request.body
		const errors = validateSchema(schema, data)
		response.status(200).send({ errors })
	}
	catch (error) {
		next(error)
	}
}

export const checkSintaxis = (request, response, next) => {
	try {
		response.status(200).json({})
	}
	catch (error) {
		next(error)
	}
}