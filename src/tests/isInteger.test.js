import { isInteger } from '../utils/number.js'

test('isInteger of bigint', () => {
	const result = isInteger(1n)
	expect(result).toBe(true)
})

test('isInteger of "1"', () => {
	const result = isInteger('1')
	expect(result).toBe(true)
})

test('isInteger of "-1"', () => {
	const result = isInteger('-1')
	expect(result).toBe(true)
})

test('isInteger of string', () => {
	const result = isInteger('string')
	expect(result).toBe(false)
})

test('isInteger of boolean', () => {
	const result = isInteger(true)
	expect(result).toBe(false)
})

test('isInteger of object', () => {
	const result = isInteger({})
	expect(result).toBe(false)
})


test('isInteger of array', () => {
	const result = isInteger([])
	expect(result).toBe(false)
})

test('isInteger of null', () => {
	const result = isInteger(null)
	expect(result).toBe(false)
})

test('isInteger of undefined', () => {
	const result = isInteger(undefined)
	expect(result).toBe(false)
})

test('isInteger of NaN', () => {
	const result = isInteger(NaN)
	expect(result).toBe(false)
})

test('isInteger of Infinity', () => {
	const result = isInteger(Infinity)
	expect(result).toBe(false)
})

test('isInteger of -Infinity', () => {
	const result = isInteger(-Infinity)
	expect(result).toBe(false)
})

test('isInteger of 0', () => {
	const result = isInteger(0)
	expect(result).toBe(true)
})

test('isInteger of 1', () => {
	const result = isInteger(1)
	expect(result).toBe(true)
})

test('isInteger of -1', () => {
	const result = isInteger(-1)
	expect(result).toBe(true)
})

test('isInteger of 0.1', () => {
	const result = isInteger(0.1)
	expect(result).toBe(false)
})

test('isInteger of -0.1', () => {
	const result = isInteger(-0.1)
	expect(result).toBe(false)
})

test('isInteger of 1e10', () => {
	const result = isInteger(1e10)
	expect(result).toBe(true)
})

test('isInteger of -1e10', () => {
	const result = isInteger(-1e10)
	expect(result).toBe(true)
})

test('isInteger of 1e-10', () => {
	const result = isInteger(1e-10)
	expect(result).toBe(false)
})

test('isInteger of -1e-10', () => {
	const result = isInteger(-1e-10)
	expect(result).toBe(false)
})


test('isInteger of 1.1e10', () => {
	const result = isInteger(1.1e10)
	expect(result).toBe(true)
})

test('isInteger of -1.1e10', () => {
	const result = isInteger(-1.1e10)
	expect(result).toBe(true)
})

test('isInteger of 1.1e-10', () => {
	const result = isInteger(1.1e-10)
	expect(result).toBe(false)
})

test('isInteger of -1.1e-10', () => {
	const result = isInteger(-1.1e-10)
	expect(result).toBe(false)
})

test('isInteger of 1.1e+10', () => {
	const result = isInteger(1.1e+10)
	expect(result).toBe(true)
})

test('isInteger of -1.1e+10', () => {
	const result = isInteger(-1.1e+10)
	expect(result).toBe(true)
})
