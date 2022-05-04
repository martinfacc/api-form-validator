import { isEmail } from '../utils/string.js'

test('isEmail of a valid Email', () => {
	const result = isEmail('example@example.com')
	expect(result).toBe(true)
})

test('isEmail of null', () => {
	const result = isEmail(null)
	expect(result).toBe(false)
})

test('isEmail of ""', () => {
	const result = isEmail('""')
	expect(result).toBe(false)
})

test('isEmail of true', () => {
	const result = isEmail(true)
	expect(result).toBe(false)
})

test('isEmail of false', () => {
	const result = isEmail(false)
	expect(result).toBe(false)
})

test('isEmail of 0', () => {
	const result = isEmail(0)
	expect(result).toBe(false)
})

test('isEmail of -1', () => {
	const result = isEmail(-1)
	expect(result).toBe(false)
})

test('isEmail of 1.1', () => {
	const result = isEmail(1.1)
	expect(result).toBe(false)
})

test('isEmail of NaN', () => {
	const result = isEmail(NaN)
	expect(result).toBe(false)
})

test('isEmail of Infinity', () => {
	const result = isEmail(Infinity)
	expect(result).toBe(false)
})

test('isEmail of -Infinity', () => {
	const result = isEmail(-Infinity)
	expect(result).toBe(false)
})

test('isEmail of object', () => {
	const result = isEmail({})
	expect(result).toBe(false)
})

test('isEmail of array', () => {
	const result = isEmail([])
	expect(result).toBe(false)
})

test('isEmail of function', () => {
	const result = isEmail(() => { })
	expect(result).toBe(false)
})

test('isEmail of undefined', () => {
	const result = isEmail(undefined)
	expect(result).toBe(false)
})
