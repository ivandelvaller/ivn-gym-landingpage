/*
 * @author Alberto Iván Del Valle Ramos
 */

export const getNodeFromTemplate = (templateId) => {
	const $content = document.getElementById(templateId).content
	const $element = $content.firstElementChild
	const nodeEl = $element.cloneNode(true)
	return nodeEl
}

export const createAlertMessage = (message, type) => {
	const alertElement = getNodeFromTemplate('template-alert')
	alertElement.querySelector('#alert-message').innerText = message

	if(type === 'danger') {
		alertElement.style.backgroundColor = ' #ff7c60 '
		alertElement.style.color = '#fff';
	}

	if(type === 'success') {
		alertElement.style.backgroundColor = '#30b03a'
		alertElement.style.color = '#fff';
	}

	return alertElement
}

/*
 *
 *
 * @param {HTMLElement} element
 * @param {String} event
 * @param {Function} handlerFunction
 */
export const listen = (element, event, handlerFunction) => {
	element.addEventListener(event, handlerFunction)
}

/*
 *
 * @param {{
 *  id: number,
 * 	name: string,
 * 	imageURL: string,
 * 	info: string
 * }}
 */
export const createInstructorNode = ({ id, name, imageURL, info}) => {
	const instructorNode = getNodeFromTemplate('template-instructor')

	// Get instructor elements
	const instructorImage = instructorNode.querySelector('.instructor__image--photo')
	const instructorName = instructorNode.querySelector('.instructor__name')
	const instructorInfo = instructorNode.querySelector('.instructor__bio')

	instructorNode.id = `instructor-${id}`

	// IMAGE
	instructorImage.setAttribute('src', imageURL)
	instructorImage.setAttribute('alt', name)
	instructorImage.setAttribute('id', `instructor-image-${id}`)
	//	NAME
	instructorName.innerText = name

	return instructorNode
}

export const createInstructorInfoNode = (info) => {
	const infoNode = getNodeFromTemplate('template-instructor-info')
	infoNode.innerText = info

	return infoNode
}