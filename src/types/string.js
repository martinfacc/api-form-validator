import TypeGeneric from './generic.js'

const maxLength = (self, expected) => {
	return self.value.length <= expected
}

const minLength = (value, expected) => {
	return self.value.length >= expected
}

class TypeString extends TypeGeneric {
	constructor(value) {
		super(value)
	}

	maxLength(expected) {
		if (!this.isUnsignedInteger(expected)) return false
		return maxLength(this, expected)
	}

	minLength(expected) {
		if (!this.isUnsignedInteger(expected)) return false
		return minLength(this, expected)
	}

	isUpperCase() {
		return this.value === this.value.toUpperCase()
	}

	isLowerCase() {
		return this.value === this.value.toLowerCase()
	}

}

export default TypeString