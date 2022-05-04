import { isUnsignedInteger } from '../utils/number.js'

test('isUnsignedInteger of bigint', () => {
	const result = isUnsignedInteger(1n)
	expect(result).toBe(true)
})

test('isUnsignedInteger of "1"', () => {
	const result = isUnsignedInteger('1')
	expect(result).toBe(true)
})

test('isUnsignedInteger of "-1"', () => {
	const result = isUnsignedInteger('-1')
	expect(result).toBe(false)
})

test('isUnsignedInteger of string', () => {
	const result = isUnsignedInteger('string')
	expect(result).toBe(false)
})

test('isUnsignedInteger of boolean', () => {
	const result = isUnsignedInteger(true)
	expect(result).toBe(false)
})

test('isUnsignedInteger of object', () => {
	const result = isUnsignedInteger({})
	expect(result).toBe(false)
})

test('isUnsignedInteger of array', () => {
	const result = isUnsignedInteger([])
	expect(result).toBe(false)
})

test('isUnsignedInteger of null', () => {
	const result = isUnsignedInteger(null)
	expect(result).toBe(false)
})

test('isUnsignedInteger of undefined', () => {
	const result = isUnsignedInteger(undefined)
	expect(result).toBe(false)
})

test('isUnsignedInteger of NaN', () => {
	const result = isUnsignedInteger(NaN)
	expect(result).toBe(false)
})

test('isUnsignedInteger of Infinity', () => {
	const result = isUnsignedInteger(Infinity)
	expect(result).toBe(false)
})

test('isUnsignedInteger of -Infinity', () => {
	const result = isUnsignedInteger(-Infinity)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 0', () => {
	const result = isUnsignedInteger(0)
	expect(result).toBe(true)
})

test('isUnsignedInteger of 1', () => {
	const result = isUnsignedInteger(1)
	expect(result).toBe(true)
})

test('isUnsignedInteger of -1', () => {
	const result = isUnsignedInteger(-1)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 0.1', () => {
	const result = isUnsignedInteger(0.1)
	expect(result).toBe(false)
})

test('isUnsignedInteger of -0.1', () => {
	const result = isUnsignedInteger(-0.1)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 1e10', () => {
	const result = isUnsignedInteger(1e10)
	expect(result).toBe(true)
})

test('isUnsignedInteger of -1e10', () => {
	const result = isUnsignedInteger(-1e10)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 1e-10', () => {
	const result = isUnsignedInteger(1e-10)
	expect(result).toBe(false)
})

test('isUnsignedInteger of -1e-10', () => {
	const result = isUnsignedInteger(-1e-10)
	expect(result).toBe(false)
})


test('isUnsignedInteger of 1.1e10', () => {
	const result = isUnsignedInteger(1.1e10)
	expect(result).toBe(true)
})

test('isUnsignedInteger of -1.1e10', () => {
	const result = isUnsignedInteger(-1.1e10)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 1.1e-10', () => {
	const result = isUnsignedInteger(1.1e-10)
	expect(result).toBe(false)
})

test('isUnsignedInteger of -1.1e-10', () => {
	const result = isUnsignedInteger(-1.1e-10)
	expect(result).toBe(false)
})

test('isUnsignedInteger of 1.1e+10', () => {
	const result = isUnsignedInteger(1.1e+10)
	expect(result).toBe(true)
})

test('isUnsignedInteger of -1.1e+10', () => {
	const result = isUnsignedInteger(-1.1e+10)
	expect(result).toBe(false)
})
