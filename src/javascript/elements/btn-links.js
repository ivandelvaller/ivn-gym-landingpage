/**
 *
 * @author Alberto Iván Del Valle Ramos
 */
import {
	$btnNav
} from './btn-nav';

const $links = document.getElementById('link-list')

$links.addEventListener('click', event => {
	const target = event.target

	if (target.classList.contains('link')) {
		const name = target.innerText.toLowerCase().replace(' ', '-')
		window.location.hash = name
		event.preventDefault()
		$btnNav.click()
	}
})