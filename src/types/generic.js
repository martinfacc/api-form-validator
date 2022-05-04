import { isNumber, isInteger, isUnsignedInteger } from '../utils/number.js'
import { i18Messages } from '../i18n.config.js'

class TypeGeneric {

	#error = null

	/**
	 * The constructor function is a special function that is used to create and initialize an object
	 * created within a class.
	 * @param value - The value of the node.
	 */
	constructor(value) {
		this.value = value
	}

	/**
	 * It takes an object of rules, checks if the rules are valid, and then runs each rule on the expected
	 * value.
	 * @param rules - an object containing the rules to validate against.
	 * @returns The return value is a boolean.
	 */
	validateByRules(rules) {
		const listOfRules = Object.keys(rules)
		const checkRules = listOfRules.every(rule => typeof this[rule] === 'function')
		if (!checkRules) return false
		return listOfRules.every(rule => {
			const expected = rules[rule]
			const result = this[rule](expected)
			if (!result) this.#error = i18Messages.__(rule, { expected })
			return result
		})
	}

	/**
	 * The function returns the value of the private variable #error.
	 * @returns The error property of the class.
	 */
	get error() {
		return this.#error
	}

	/**
	 * If the value of the input is not empty, return true. Otherwise, return false.
	 * @returns Boolean(this.value)
	 */
	required() {
		return Boolean(this.value)
	}

	/**
	 * This function returns true if the value is a number, and false if it is not.
	 * @param value - The value to be checked.
	 * @returns The function isNumber is being returned.
	 */
	isNumber(value) {
		return isNumber(value)
	}

	/**
	 * The function isInteger() returns true if the value is an integer, and false if the value is not an
	 * integer.
	 * @param value - The value to be checked.
	 * @returns The function isInteger is being returned.
	 */
	isInteger(value) {
		return isInteger(value)
	}

	/**
	 * `isUnsignedInteger(value)` returns `true` if `value` is an unsigned integer, otherwise it returns
	 * `false`.
	 * @param value - The value to be checked.
	 * @returns The function isUnsignedInteger() is being returned.
	 */
	isUnsignedInteger(value) {
		return isUnsignedInteger(value)
	}
}

export default TypeGeneric