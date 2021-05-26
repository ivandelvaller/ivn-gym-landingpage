/**
 * This file contains the helper functions of the application.
 * @author Alberto Iván Del Valle Ramos
 */
 
/**
 * Creates a new animation
 * @param {HTMLElement} element 
 * @param {Keyframe} keyframe
 * @param {KeyframeAnimationOptions} options
 */
export const startAnimation = (element, keyframe, options) => {
    return element.animate(keyframe, options)
}

/**
 * 
 * @param {number} yPosition 
 * @param {number} opacity 
 * @returns an object with the specified values
 */
export const textIntervals = (yPosition, opacity) => {
    return Object.freeze({
        transform: 'translateY(' + yPosition + 'px)',
        opacity: opacity
    })
}

export const toggleModal = (xPosition) => {
	return Object.freeze({
		transform: 'translateX('+ xPosition  +')'
	})
}