import { isNumber } from '../utils/number.js'

test('isNumber of bigint', () => {
	const result = isNumber(1n)
	expect(result).toBe(true)
})

test('isNumber of "1"', () => {
	const result = isNumber('1')
	expect(result).toBe(true)
})

test('isNumber of "-1"', () => {
	const result = isNumber('-1')
	expect(result).toBe(true)
})

test('isNumber of string', () => {
	const result = isNumber('string')
	expect(result).toBe(false)
})

test('isNumber of boolean', () => {
	const result = isNumber(true)
	expect(result).toBe(false)
})

test('isNumber of object', () => {
	const result = isNumber({})
	expect(result).toBe(false)
})

test('isNumber of array', () => {
	const result = isNumber([])
	expect(result).toBe(false)
})

test('isNumber of null', () => {
	const result = isNumber(null)
	expect(result).toBe(false)
})

test('isNumber of undefined', () => {
	const result = isNumber(undefined)
	expect(result).toBe(false)
})

test('isNumber of function', () => {
	const result = isNumber(() => { })
	expect(result).toBe(false)
})

test('isNumber of Symbol', () => {
	const result = isNumber(Symbol('symbol'))
	expect(result).toBe(false)
})

test('isNumber of NaN', () => {
	const result = isNumber(NaN)
	expect(result).toBe(false)
})

test('isNumber of Infinity', () => {
	const result = isNumber(Infinity)
	expect(result).toBe(false)
})

test('isNumber of -Infinity', () => {
	const result = isNumber(-Infinity)
	expect(result).toBe(false)
})

test('isNumber of 0', () => {
	const result = isNumber(0)
	expect(result).toBe(true)
})

test('isNumber of 1', () => {
	const result = isNumber(1)
	expect(result).toBe(true)
})

test('isNumber of -1', () => {
	const result = isNumber(-1)
	expect(result).toBe(true)
})

test('isNumber of 0.1', () => {
	const result = isNumber(0.1)
	expect(result).toBe(true)
})

test('isNumber of -0.1', () => {
	const result = isNumber(-0.1)
	expect(result).toBe(true)
})

test('isNumber of 1e10', () => {
	const result = isNumber(1e10)
	expect(result).toBe(true)
})

test('isNumber of -1e10', () => {
	const result = isNumber(-1e10)
	expect(result).toBe(true)
})

test('isNumber of 1e-10', () => {
	const result = isNumber(1e-10)
	expect(result).toBe(true)
})

test('isNumber of -1e-10', () => {
	const result = isNumber(-1e-10)
	expect(result).toBe(true)
})

test('isNumber of 1.1e10', () => {
	const result = isNumber(1.1e10)
	expect(result).toBe(true)
})

test('isNumber of -1.1e10', () => {
	const result = isNumber(-1.1e10)
	expect(result).toBe(true)
})

test('isNumber of 1.1e-10', () => {
	const result = isNumber(1.1e-10)
	expect(result).toBe(true)
})

test('isNumber of -1.1e-10', () => {
	const result = isNumber(-1.1e-10)
	expect(result).toBe(true)
})

test('isNumber of 1.1e+10', () => {
	const result = isNumber(1.1e+10)
	expect(result).toBe(true)
})

test('isNumber of -1.1e+10', () => {
	const result = isNumber(-1.1e+10)
	expect(result).toBe(true)
})