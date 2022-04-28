import { isUnsignedFloat } from '../utils/number.js'

test('isUnsignedFloat of string', () => {
	const result = isUnsignedFloat('1')
	expect(result).toBe(false)
})

test('isUnsignedFloat of boolean', () => {
	const result = isUnsignedFloat(true)
	expect(result).toBe(false)
})

test('isUnsignedFloat of object', () => {
	const result = isUnsignedFloat({})
	expect(result).toBe(false)
})

test('isUnsignedFloat of array', () => {
	const result = isUnsignedFloat([])
	expect(result).toBe(false)
})

test('isUnsignedFloat of null', () => {
	const result = isUnsignedFloat(null)
	expect(result).toBe(false)
})

test('isUnsignedFloat of undefined', () => {
	const result = isUnsignedFloat(undefined)
	expect(result).toBe(false)
})

test('isUnsignedFloat of NaN', () => {
	const result = isUnsignedFloat(NaN)
	expect(result).toBe(false)
})

test('isUnsignedFloat of Infinity', () => {
	const result = isUnsignedFloat(Infinity)
	expect(result).toBe(false)
})

test('isUnsignedFloat of -Infinity', () => {
	const result = isUnsignedFloat(-Infinity)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 0', () => {
	const result = isUnsignedFloat(0)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 1', () => {
	const result = isUnsignedFloat(1)
	expect(result).toBe(false)
})

test('isUnsignedFloat of -1', () => {
	const result = isUnsignedFloat(-1)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 0.1', () => {
	const result = isUnsignedFloat(0.1)
	expect(result).toBe(true)
})

test('isUnsignedFloat of -0.1', () => {
	const result = isUnsignedFloat(-0.1)
	expect(result).toBe(false)
})


test('isUnsignedFloat of 1e10', () => {
	const result = isUnsignedFloat(1e10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of -1e10', () => {
	const result = isUnsignedFloat(-1e10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 1e-10', () => {
	const result = isUnsignedFloat(1e-10)
	expect(result).toBe(true)
})

test('isUnsignedFloat of -1e-10', () => {
	const result = isUnsignedFloat(-1e-10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 1.1e10', () => {
	const result = isUnsignedFloat(1.1e10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of -1.1e10', () => {
	const result = isUnsignedFloat(-1.1e10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 1.1e-10', () => {
	const result = isUnsignedFloat(1.1e-10)
	expect(result).toBe(true)
})

test('isUnsignedFloat of -1.1e-10', () => {
	const result = isUnsignedFloat(-1.1e-10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of 1.1e+10', () => {
	const result = isUnsignedFloat(1.1e+10)
	expect(result).toBe(false)
})

test('isUnsignedFloat of -1.1e+10', () => {
	const result = isUnsignedFloat(-1.1e+10)
	expect(result).toBe(false)
})

