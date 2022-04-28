export const isNumber = (value) => {
	return typeof value === 'number' && !isNaN(value) && isFinite(value)
}

export const isInteger = (value) => {
	return isNumber(value) && value % 1 === 0
}

export const isUnsignedInteger = (value) => {
	return isInteger(value) && value >= 0
}

export const isFloat = (value) => {
	return isNumber(value) && value % 1 !== 0
}

export const isUnsignedFloat = (value) => {
	return isFloat(value) && value >= 0
}
