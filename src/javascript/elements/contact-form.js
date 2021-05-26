/*
 *
 * @author Alberto Iván Del Valle Ramos
 */
import DOM from '../DOMhelpers'

const $form = document.getElementById('contact-form')

const formElementsValidation = {
	name: {
		required: true,
		maxLength: 50,
	},
	lastname: {
		required: true,
		maxLength: 50
	},
	email: {
		required: true,
		email: true,
	},
	phone: {
		phone: true,
	}
}

$form.addEventListener('submit', event => {
	event.preventDefault()
	//debugger

	const errors = []
	const emailRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
	const inputsList = event.target.querySelectorAll('input')

	// Check if values are correct
	inputsList.forEach((input, index) => {
		if(input.classList.contains('input-error')) {
			input.classList.toggle('input-error')
		}

		const fieldValue = input.value.trim().replace(/[.*+?^${}()|[\]\\]/g, '') // SANITIZE
		const fieldName = input.name
		const uFieldName = `${fieldName.charAt(0).toUpperCase()}${fieldName.slice(1).toLowerCase()}`
		const field = formElementsValidation[fieldName]

		if (field['required'] && fieldValue === "") {
			errors.push({
				field: fieldName,
				errorMessage: `${uFieldName} is required`
			})
			return
		}

		if (field['email'] && !fieldValue.match(emailRegEx)) {
			errors.push({
				field: fieldName,
				errorMessage: 'Invalid email'
			})
			return
		}

		if((field['phone'] && fieldValue.length > 0) && (fieldValue.length !== 10 || typeof(fieldValue) !== 'number')) {
			errors.push({
				field: fieldName,
				errorMessage: 'Invalid phone'
			})
			return
		}

	})

	if (errors.length > 0) {
		errors.forEach(error => {
			const input = document.getElementById(error.field)
			if(!input.classList.contains('input-error')) {
				input.classList.toggle('input-error')			
			}
		})
		return
	}

	//Clear form values
	inputsList.forEach(input => {
		input.value = ''
	})
})