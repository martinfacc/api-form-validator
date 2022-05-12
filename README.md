# Form Validator API - FVAPI

An API to validate your data.

<hr>

# Usage example

```javascript
import axios from 'axios'

const userSchema = {
	firstName: {
		type: 'string',
		rules: {
			required: true,
			minLength: 3,
			maxLength: 20
		}
	},
	lastName: {
		type: 'string',
		rules: {
			required: true,
			minLength: 5,
			maxLength: 20
		}
	},
	email: {
		type: 'string',
		rules: {
			required: true,
			isEmail: true
		}
	}
}

const userOne = {
	firstName: 'Lucas',
	lastName: 'Lezcano',
	email: 'lucaslez@gmail.com'
}

const userTwo = {
	firstName: 'Matias',
	lastName: 'Puringa',
	email: 'matias_puringa@hotmail'
}

const userThree = {
	firstName: '',
	lastName: 'Avila',
	email: 'davila@yahoo.com'
}

const userFour = {
	firstName: 'Bron',
	lastName: 'Kass',
	email: 'elbronkass@gmail.com'
}

const { data: dataOne } = await axios.post('https://fvapi.martinfacciuto.site', {
	schema: userSchema,
	data: userOne
})

const { data: dataTwo } = await axios.post('https://fvapi.martinfacciuto.site', {
	schema: userSchema,
	data: userTwo
})

const { data: dataThree } = await axios.post('https://fvapi.martinfacciuto.site', {
	schema: userSchema,
	data: userThree
})

const { data: dataFour } = await axios.post(
	'https://fvapi.martinfacciuto.site',
	{ schema: userSchema, data: userFour },
	{ headers: { 'Acepted-Language': 'en' }
})

/*

dataOne: {
	errors: {}
}

dataTwo: {
	errors: {
		email: 'El campo debe ser un email válido'
	}
}

dataThree: {
	errors: {
		email: 'El campo es requerido'
	}
}

dataFour: {
	errors: {
		lastName: 'The field cannot have less than 5 characters'
	}
}

*/


``` 

<hr>

# Documentation - Data types supported and their rules

```javascript
{
	string: {
		rules: [
			required,
			minLength,
			maxLength,
			isUppercase,
			isLowercase,
			isEmail
		]
	},
	number: {
		rules: [
			required,
			min,
			max,
			isInteger,
			isPositive
		]
	}
}

``` 

<hr>

# Acepted languages
	da: Danish
	de: German
	en: English
	es: Spanish (default)
	fi: Finnish
	fr: French
	it: Italian
	nl: Dutch
	pt: Portuguese
	sv: Swedish
	tr: Turkish

<hr>

# Preview
See a live preview [here](https://fvapi.martinfacciuto.site).
