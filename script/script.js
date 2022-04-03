gsap.registerPlugin(ScrollTrigger)

/* Start animation */

gsap.timeline({ ease: 'power3.out' })
	.from('header', { 
        duration: 0.7, 
        y: '-100%' })
    .from('header li', { 
        duration: 0.7, 
        y: -15, opacity: 0, 
        stagger: 0.25 })
    .from('.hero', {
        duration: 1.5, 
        y: 40, 
        opacity: 0,}, '<0.2')
    .from('.hero__text-content', {
        duration: 1, 
        y: 40, 
        opacity: 0,}, '<0.2')
    .from('.hero__text-content p', {
        duration: 1, 
        y: 40, 
        opacity: 0,}, '<0.2')
    .from('.hero__text-content button', {
        duration: 1, 
        y: 40, 
        opacity: 0,}, '<0.5')
    .from('.platform__text-content', {
        duration: 1,
        y: '30%',
        opacity: 0,
        ease: 'power3.out'}, '<0.5')
    .from('.platform__cards div.card', {
        delay: 0.15,
        duration: 1,
        y: '30%',
        opacity: 0,
        ease: 'power3.out',
        stagger: 0.1 }, '<')


/* about us animation */

const aboutAnimation = gsap.timeline({
    scrollTrigger: {
        trigger: '.about-us',
        start: "top bottom",
        end: "center top",
        toggleActions: "play pause resume reset",
        scrub: true,
    }
})

aboutAnimation
    .from('.about-us__text-content', {
    delay: 0.15,
    duration: 2,
    y: '50%',
    ease: 'power3.inOut', })
    .from('.about-us__image', {
    duration: 2,
    y: '20%',
    ease: 'power3.inOut', }, '<.2')


/* Press cards animation */

const pressCardAnimation = gsap.timeline({
	scrollTrigger: {
		trigger: '.press__cards',
		start: "top bottom",
        end: "center top",
		toggleActions: "play pause resume reset",
	}
})

pressCardAnimation.from('.press__cards div.card', {
    delay: 0.15,
	duration: 1.5,
	y: '75%',
    opacity: 0,
	ease: 'power3.out',
    stagger: 0.05,
})
