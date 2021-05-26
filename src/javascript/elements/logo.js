/**
 * This file is for editing the Logo behavior.
 * @author Alberto Iván Del Valle Ramos
 */
// // ELEMENT
// const $logoElement = document.getElementById('brand-image')

// // ALLOWED SIZE FOR LOGO
// let minHeight = 110 //px
// let maxHeight = 250 //px

// // INIT VALUES
// let currentHeight = $logoElement.getBoundingClientRect().height
// let pixelsToReduce = currentHeight - minHeight
// let screenHeight = window.screen.height
// let screenWidth = window.screen.width
// let pixelsToReducePerScreenHeightPixel = pixelsToReduce / screenHeight
// let scrollPosition = window.scrollY

// /**
//  * EVENTS LISTENERS
//  */
// window.addEventListener('scroll', () => {
//     currentHeight = $logoElement.getBoundingClientRect().height
//     pixelsToReduce = currentHeight - minHeight
//     pixelsToReducePerScreenHeightPixel = pixelsToReduce / screenHeight
//     scrollPosition = window.scrollY

//     if(scrollPosition < screenHeight) {
//         let size = maxHeight - (pixelsToReducePerScreenHeightPixel * scrollPosition)
//         $logoElement.style.height = `${size}px`
//     } else if(scrollPosition >= screenHeight) {
//         $logoElement.style.height = `${minHeight}px`
//     }
// })

// window.addEventListener('resize', () => {
//     screenHeight = window.screen.height
// })
