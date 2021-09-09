/**
 * 
 * @author Alberto Iván Del Valle Ramo
 */
import {
	startAnimation,
	textIntervals
} from '../functions'

// ELEMENTS
const $displaySection = document.getElementById('display-information')

// DECLARATIONS AND INIZIALITZATIONS
let counter = 0
const information = [
	'DON\'T BE STRESSED',
	'DON\'T BE SCARED',
	'DO YOU HAVE A GOAL?',
	'LET\'S DO IT TOGETHER!'
]

const showTextKeyframe = [
	textIntervals(-50, 0),
	textIntervals(-25, 0.5),
	textIntervals(0, 1),
	textIntervals(0, 1)
]

const hideTextKeyframe = [
	textIntervals(0, 1),
	textIntervals(-25, 0.5),
	textIntervals(-50, 0)
]

setInterval(() => {
	$displaySection.innerText = information[counter]

	startAnimation(
		$displaySection,
		showTextKeyframe, {
			duration: 3000,
			delay: 0
		}
	).finished.then(() =>
		startAnimation(
			$displaySection,
			hideTextKeyframe, {
				duration: 2500,
				delay: 1000
			})
	)

	if(counter === information.length - 1) counter = 0
	else counter++
}, 6500)