/**
 *
 * @author Alberto Iván Del Valle Ramos
 */
import {
	$btnNav
} from './btn-nav';

const $links = document.getElementById('link-list')
const $link = $links.querySelectorAll('.link')

$links.addEventListener('click', event => {
	const target = event.originalTarget

	if (target.classList.contains('link')) {
		const name = target.innerText.toLowerCase().replace(' ', '-')
		document.location = 'https://ivandelvaller.github.io/ivn-gym-landingpage/#' + name

		$btnNav.click()
	}
})