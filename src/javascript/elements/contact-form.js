/*
 *
 * @author Alberto Iván Del Valle Ramos
 */
import * as DOM from '../DOMhelpers'

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
		if (input.classList.contains('input-error')) {
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

		if ((field['phone'] && fieldValue.length > 0) && (fieldValue.length !== 10 || typeof(fieldValue) !== 'number')) {
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
			if (!input.classList.contains('input-error')) {
				input.classList.toggle('input-error')
			}
		})
		return
	}

	//Clear form values
	const $modal = DOM.getNodeFromTemplate('template-modal')
	const name = document.getElementById('name').value
	$modal.querySelector('span').innerText = `Thanks ${name || ''}! We appreciate your preference. \n As soon as possible we get in contact to you! \nKeep yourself feet!`

	if (!document.getElementById('modal')) {
		document.querySelector('body').prepend($modal)

		$modal.querySelector('.modal-badge').animate([{
			transform: 'translateY(-100%)'
		}, {
			transform: 'translateY(0)'
		}], {
			duration: 1000,
			fill: 'forwards',
			easing: 'ease-in'
		})
	}

	const $modalButton = document.getElementById('modal-button')
	const handlerButton = event => {
		const modal = document.getElementById('modal')
		$modal.querySelector('.modal-badge').animate([{
			transform: 'translateY(0)'
		}, {
			transform: 'translateY(-100%)'
		}], {
			duration: 1000,
			fill: 'forwards',
			easing: 'ease-out'
		}).finished.then(() => {
			if (modal) modal.remove()
			$modalButton.removeEventListener('click', handlerButton)
		})
	}
	$modalButton.addEventListener('click', handlerButton)

	inputsList.forEach(input => {
		input.value = ''
	})
})