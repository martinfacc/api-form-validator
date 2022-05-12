
/**
 * It returns true if the value is a number, is not NaN, and is finite.
 * @param value - The value to be checked
 */
export const isNumber = (value) => {
	if (['symbol', 'boolean', 'undefined', 'object'].includes(typeof value)) return false
	const number = Number(value)
	return !isNaN(number) && isFinite(number)
}

/**
 * If the value is a number and the value divided by 1 is equal to 0, then the value is an integer.
 * @param value - The value to check.
 */
export const isInteger = (value) => {
	return isNumber(value) && Number(value) % 1 === 0
}

/**
 * Returns true if the value is an integer and is greater than or equal to zero.
 * @param value - The value to check.
 * @returns A function that takes a value and returns a boolean.
 */
export const isUnsignedInteger = (value) => {
	return isInteger(value) && value >= 0
}

/**
 * If the value is a number and the value divided by 1 is not equal to 0, then the value is a float.
 * @param value - The value to check.
 */
export const isFloat = (value) => {
	return isNumber(value) && Number(value) % 1 !== 0
}

/**
 * IsUnsignedFloat returns true if value is a float and is greater than or equal to zero.
 * @param value - The value to check.
 * @returns A function that takes a value and returns a boolean.
 */
export const isUnsignedFloat = (value) => {
	return isFloat(value) && value >= 0
}

/**
 * IsPositive returns true if the value is a number and greater than 0.
 * @param value - The value to be checked.
 * @returns A function that takes a value and returns a boolean.
 */
export const isPositive = (value) => {
	return isNumber(value) && value > 0
}
