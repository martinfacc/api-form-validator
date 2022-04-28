import { isNumber, isInteger, isUnsignedInteger } from '../utils/number.js'

class TypeGeneric {
	constructor(value) {
		this.value = value
	}
	required() {
		return Boolean(this.value)
	}

	isNumber(value) {
		return isNumber(value)
	}

	isInteger(value) {
		return isInteger(value)
	}

	isUnsignedInteger(value) {
		return isUnsignedInteger(value)
	}
}

export default TypeGeneric