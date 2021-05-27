/*
 * @author Alberto Iván Del Valle ramos
 */

import { startAnimation, toggleModal } from '../functions'

export const $btnNav = document.getElementById('btn-nav')
const $navBar = document.getElementById('navigation')

const modalAnimatinOptions = {
	duration: 1000, 
	fill: 'forwards',
}

const openModal = [
	toggleModal('-100%'),
	toggleModal('100%'),
]

const closeModal = [
	toggleModal('100%'),
	toggleModal('-100%'),
]

let isClose = true

$btnNav.addEventListener('click', () => {
	if(isClose) {
		$btnNav.setAttribute('disabled', true)
		startAnimation(
			$navBar, 
			openModal, 
			modalAnimatinOptions)
		.finished
		.then(()=> {
			isClose = false
			$btnNav.removeAttribute('disabled')
		})
	} else {
		$btnNav.setAttribute('disabled', true)
		startAnimation(
			$navBar, 
			closeModal, 
			modalAnimatinOptions)
		.finished
		.then(()=> {
			isClose = true
			$btnNav.removeAttribute('disabled')
		})
	}
})
