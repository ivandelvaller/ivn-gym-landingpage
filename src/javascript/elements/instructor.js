/*
 * This module is for creating new instructor and add them
 * to instructors container in HTML file.
 * Just add a new instructor in the arrar "instructors" for adding
 * new ones.
 * @author Alberto Iván Del Valle Ramos
 */
import * as DOM from '../DOMhelpers'

const $container = document.getElementById('instructor-container')
let instructors = {}
let onEvent = false

const data = localStorage.getItem('instructors_gym')
if (data && data.length !== 0) {
	instructors = JSON.parse(data)
} else {
	instructors = [{
		id: 0,
		name: 'Instructor 1',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere diam vel augue cursus dapibus. Curabitur non est nibh. Donec euismod justo id velit ornare fermentum. Vivamus in dolor lorem. ',
		imageURL: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
	}, {
		id: 1,
		name: 'Instructor 2',
		info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec posuere diam vel augue cursus dapibus. Curabitur non est nibh. Donec euismod justo id velit ornare fermentum. Vivamus in dolor lorem. ',
		imageURL: 'https://i.pinimg.com/originals/a6/58/32/a65832155622ac173337874f02b218fb.png'
	}]

	localStorage.setItem('instructors_gym', JSON.stringify(instructors))
}

instructors.forEach(instructor => {
	const instructorNode = DOM.createInstructorNode(instructor)

	// EVENT LISTENERS
	// SHOW INFO EVENT
	instructorNode
		.querySelector(`#instructor-image-${instructor.id}`)
		.addEventListener('click', event => {
			const instructorNodeFather = event.target.parentNode.parentNode
			const selectedInstructorId = event.target.id.split('-')[2]
			const btnClose = instructorNodeFather.querySelector('.closeInfo')

			// GET SELECTED INSTRUCTOR
			const instructorsArray = JSON.parse(localStorage.getItem('instructors_gym'))
			const selectedInstructor = instructorsArray[+selectedInstructorId]
			// SELECTED INSTRUCTOR INFO
			const instructorInfo = selectedInstructor.info

			const infoNode = DOM.createInstructorInfoNode(instructorInfo)

			new Promise((resolve, reject) => {
					instructorNodeFather
						.querySelector('.instructor__bio')
						.append(infoNode)
					resolve(infoNode)
				})
				.then(() => {
					return instructorNodeFather
						.querySelector(`#instructor-image-${instructor.id}`)
						.animate([{
							opacity: 1
						}, {
							opacity: 0.1
						}], {
							duration: 500,
							fill: 'forwards',
							easing: 'ease-out'
						})
				})
				.then(() => {
					return infoNode
						.animate([{
							transform: 'translateY(-100%)'
						}, {
							transform: 'translateY(0)'
						}, ], {
							duration: 1000,
							easing: 'ease-out'
						})
				})
				.then(() => {
					btnClose
						.removeAttribute('hidden')
				})
		})

	// CLOSE INFO EVENT
	instructorNode
		.querySelector('.closeInfo')
		.addEventListener('click', event => {
			const btnClose = event.target.parentNode
			const instructorNodeFather = event.target.parentNode.parentNode

			instructorNodeFather
				.querySelector('.instructor__bio--info')
				.animate([{
					transform: 'translateY(0)',
					opacity: 0.9
				}, {
					transform: 'translateY(-100%)',
					opacity: 0
				}], {
					duration: 1000
				})
				.finished
				.then(() => {
					instructorNodeFather
						.querySelector('.instructor__bio--info')
						.remove()
					return true
				})
				.then(() => {
					return instructorNodeFather
						.querySelector(`#instructor-image-${instructor.id}`)
						.animate([{
							opacity: 0.1
						}, {
							opacity: 1
						}], {
							duration: 500,
							fill: 'forwards'
						})
				})
				.then(() => {
					btnClose
						.setAttribute('hidden', true)
				})
		})

	$container.append(instructorNode)
})