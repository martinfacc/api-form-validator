import TypeGeneric from './generic.js'
import { isString, isEmail } from '../utils/string.js'

/**
 * It returns true if the length of the value of the input is less than or equal to the expected value.
 * @param self - The element that is being validated.
 * @param expected - The expected value of the field.
 * @returns The function is being returned.
 */
const maxLength = (self, expected) => {
	return self.value.length <= expected
}

/**
 * If the length of the value of the input is greater than or equal to the expected value, return true.
 * @param self - The element that is being validated.
 * @param expected - The expected value of the field.
 * @returns A function that takes two arguments, self and expected.
 */
const minLength = (self, expected) => {
	return self.value.length >= expected
}

class TypeString extends TypeGeneric {

	constructor(value) {
		if (!isString(value)) throw new Error('isNotTypeString')
		super(value)
	}

	/**
	 * If the value of the input is an email, return true, otherwise return false.
	 * @returns The value of the input field.
	 */
	isEmail() {
		return isEmail(this.value)
	}

	/**
	 * It returns true if the length of the string is less than or equal to the expected value
	 * @param expected - The expected value of the length of the string.
	 * @returns the result of the maxLength function.
	 */
	maxLength(expected) {
		if (!this.isUnsignedInteger(expected)) return false
		return maxLength(this, expected)
	}

	/**
	 * `minLength` is a function that takes a string and an integer as arguments and returns a boolean.
	 * @param expected - The expected value.
	 * @returns the result of the minLength function.
	 */
	minLength(expected) {
		if (!this.isUnsignedInteger(expected)) return false
		return minLength(this, expected)
	}

	/**
	 * If the value of the string is equal to the value of the string in all uppercase, then return true.
	 * @returns a boolean value.
	 */
	isUpperCase() {
		return this.value === this.value.toUpperCase()
	}

	/**
	 * If the value of the string is equal to the value of the string in lowercase, then return true.
	 * @returns The function isLowerCase() is being returned.
	 */
	isLowerCase() {
		return this.value === this.value.toLowerCase()
	}

}

export default TypeString