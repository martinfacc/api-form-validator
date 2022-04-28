const data = {
	firstName: 'Martin',
	lastName: 'Facciuto',
	age: 23,
	dateOfBirth: '1998-09-28'
}

const fields = {
	firstName: {
		type: 'string',
		required: true,
		maxLength: 5,
		minLength: 3
	}
}

const validators = {
	type: ({ expected, value }) => typeof value === expected,
	required: ({ value }) => Boolean(value),
	maxLength: ({ expected, value }) => value?.length <= expected,
	minLength: ({ expected, value }) => value?.length >= expected,
	biggerThan: ({ expected, value }) => value > expected,
	lowerThan: ({ expected, value }) => value < expected,
	equalTo: ({ expected, value }) => value === expected,
	notEqualTo: ({ expected, value }) => value !== expected,
	email: ({ value }) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
	date: ({ value }) => /^\d{4}-\d{2}-\d{2}$/.test(value),
	number: ({ value }) => /^\d+$/.test(value),
	url: ({ value }) => /^https?:\/\/.+$/.test(value),
	ip: ({ value }) => /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(value),
	mac: ({ value }) => /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/.test(value),
	creditCard: ({ value }) => /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(value),
}

Object.keys(fields).map(field => {
	const requirements = Object.keys(fields[field])
	const result = requirements.map(requirement => {
		return {
			value: data[field],
			validator: requirement,
			expected: fields[field][requirement],
			result: validators[requirement]({
				value: data[field],
				expected: fields[field][requirement]
			})
		}
	})
	return result
}) 
