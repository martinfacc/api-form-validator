import { isFloat } from '../utils/number.js'

test('isFloat of string', () => {
	const result = isFloat('1')
	expect(result).toBe(false)
})

test('isFloat of boolean', () => {
	const result = isFloat(true)
	expect(result).toBe(false)
})

test('isFloat of object', () => {
	const result = isFloat({})
	expect(result).toBe(false)
})

test('isFloat of array', () => {
	const result = isFloat([])
	expect(result).toBe(false)
})

test('isFloat of null', () => {
	const result = isFloat(null)
	expect(result).toBe(false)
})

test('isFloat of undefined', () => {
	const result = isFloat(undefined)
	expect(result).toBe(false)
})

test('isFloat of NaN', () => {
	const result = isFloat(NaN)
	expect(result).toBe(false)
})

test('isFloat of Infinity', () => {
	const result = isFloat(Infinity)
	expect(result).toBe(false)
})

test('isFloat of -Infinity', () => {
	const result = isFloat(-Infinity)
	expect(result).toBe(false)
})

test('isFloat of 0', () => {
	const result = isFloat(0)
	expect(result).toBe(false)
})

test('isFloat of 1', () => {
	const result = isFloat(1)
	expect(result).toBe(false)
})

test('isFloat of -1', () => {
	const result = isFloat(-1)
	expect(result).toBe(false)
})

test('isFloat of 0.1', () => {
	const result = isFloat(0.1)
	expect(result).toBe(true)
})

test('isFloat of -0.1', () => {
	const result = isFloat(-0.1)
	expect(result).toBe(true)
})

test('isFloat of 1e10', () => {
	const result = isFloat(1e10)
	expect(result).toBe(false)
})


test('isFloat of -1e10', () => {
	const result = isFloat(-1e10)
	expect(result).toBe(false)
})

test('isFloat of 1e-10', () => {
	const result = isFloat(1e-10)
	expect(result).toBe(true)
})

test('isFloat of -1e-10', () => {
	const result = isFloat(-1e-10)
	expect(result).toBe(true)
})

test('isFloat of 1.1e10', () => {
	const result = isFloat(1.1e10)
	expect(result).toBe(false)
})

test('isFloat of -1.1e10', () => {
	const result = isFloat(-1.1e10)
	expect(result).toBe(false)
})

test('isFloat of 1.1e-10', () => {
	const result = isFloat(1.1e-10)
	expect(result).toBe(true)
})

test('isFloat of -1.1e-10', () => {
	const result = isFloat(-1.1e-10)
	expect(result).toBe(true)
})

test('isFloat of 1.1e+10', () => {
	const result = isFloat(1.1e+10)
	expect(result).toBe(false)
})

test('isFloat of -1.1e+10', () => {
	const result = isFloat(-1.1e+10)
	expect(result).toBe(false)
})
