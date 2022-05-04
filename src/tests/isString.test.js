import { isString } from '../utils/string.js'

test('isString of string', () => {
	const result = isString('string')
	expect(result).toBe(true)
})

test('isString of number', () => {
	const result = isString(1)
	expect(result).toBe(false)
})

test('isString of null', () => {
	const result = isString(null)
	expect(result).toBe(false)
})

test('isString of undefined', () => {
	const result = isString(undefined)
	expect(result).toBe(false)
})

test('isString of boolean', () => {
	const result = isString(true)
	expect(result).toBe(false)
})

test('isString of object', () => {
	const result = isString({})
	expect(result).toBe(false)
})

test('isString of array', () => {
	const result = isString([])
	expect(result).toBe(false)
})

test('isString of function', () => {
	const result = isString(() => { })
	expect(result).toBe(false)
})

test('isString of Symbol', () => {
	const result = isString(Symbol('symbol'))
	expect(result).toBe(false)
})

test('isString of NaN', () => {
	const result = isString(NaN)
	expect(result).toBe(false)
})

test('isString of Infinity', () => {
	const result = isString(Infinity)
	expect(result).toBe(false)
})

test('isString of -Infinity', () => {
	const result = isString(-Infinity)
	expect(result).toBe(false)
})

test('isString of -1', () => {
	const result = isString(-1)
	expect(result).toBe(false)
})

test('isString of 0', () => {
	const result = isString(0)
	expect(result).toBe(false)
})