import TypeGeneric from './generic.js'
import { isNumber } from '../utils/number.js'

class TypeNumber extends TypeGeneric {

	/**
	 * If the value is not a number, throw an error.
	 * @param value - The value to be checked.
	 */
	constructor(value) {
		if (!isNumber(value)) throw new Error('isNotTypeNumber')
		super(value)
	}

	/**
	 * If the value of the object is less than or equal to the expected value, return true, otherwise
	 * return false.
	 * @param expected - The expected value of the field.
	 * @returns The value of the input field.
	 */
	max(expected) {
		return this.value <= expected
	}

	/**
	 * The function min() returns true if the value of the object is greater than or equal to the expected
	 * value.
	 * @param expected - The expected value of the field.
	 * @returns The value of the input field.
	 */
	min(expected) {
		return this.value >= expected
	}

	/**
	 * This function returns true if the value is an integer, and false if it is not.
	 * @param value - The value to check
	 * @returns The function isInteger is being returned.
	 */
	isInteger(value) {
		return this.isInteger(value)
	}

	/**
	 * This function returns true if the value is an unsigned integer, otherwise it returns false.
	 * @param value - The value to check.
	 * @returns The function isUnsignedInteger is being returned.
	 */
	isUnsignedInteger(value) {
		return this.isUnsignedInteger(value)
	}

	/**
	 * This function returns true if the value is a float, otherwise it returns false.
	 * @param value - The value to check
	 * @returns The function isFloat is being returned.
	 */
	isFloat(value) {
		return this.isFloat(value)
	}

	/**
	 * If the value is a float, return true, otherwise return false.
	 * @param value - The value to check.
	 * @returns The function isUnsignedFloat is being returned.
	 */
	isUnsignedFloat(value) {
		return this.isUnsignedFloat(value)
	}
}

export default TypeNumber