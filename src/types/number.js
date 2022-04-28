import TypeGeneric from './generic.js'

class TypeNumber extends TypeGeneric {
	constructor(value) {
		super(value)
	}

	max(expected) {
		if (!this.isNumber(expected)) return false
		return this.value <= expected
	}

	min(expected) {
		if (!this.isNumber(expected)) return false
		return this.value >= expected
	}

	isInteger(value) {
		return this.isInteger(value)
	}

	isUnsignedInteger(value) {
		return this.isUnsignedInteger(value)
	}

	isFloat(value) {
		return this.isFloat(value)
	}

	isUnsignedFloat(value) {
		return this.isUnsignedFloat(value)
	}
}

export default TypeNumber