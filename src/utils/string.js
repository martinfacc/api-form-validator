/**
 * This function returns true if the value passed to it is a string, otherwise it returns false.
 * @param value - The value to check
 * @returns A function that takes a value and returns a boolean.
 */
export const isString = (value) => {
	return typeof value === 'string'
}

/**
 * It returns true if the value is a valid email address, otherwise it returns false
 * @param value - The value to be validated
 * @returns A boolean value.
 */
export const isEmail = (value) => {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value)
}

