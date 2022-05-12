import TypeGeneric from './generic.js'
import { isNumber, isPositive } from '../utils/number.js'

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
	isInteger() {
		return this.isInteger(this.value)
	}

	/**
	 * If the value is positive, return true, otherwise return false.
	 * @returns The value of the isPositive() method.
	 */
	isPositive() {
		return isPositive(this.value)
	}
}

export default TypeNumber