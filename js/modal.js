const backdrop = document.querySelector('.backdrop')
const modal = document.querySelector('.modal')
const modalCloseBtn = document.querySelector('.modal__close')
const modalOpenBtn = document.querySelector('.hero__button')

const toggleModalFn = () => {
	backdrop.classList.toggle('is-hidden')
	document.body.classList.toggle('no-scroll')
}

modalOpenBtn.addEventListener('click', toggleModalFn)
modalCloseBtn.addEventListener('click', toggleModalFn)
backdrop.addEventListener('click', e => {
	backdrop.classList.remove('is-hidden')
	document.body.classList.add('no-scroll')
})
modal.addEventListener('click', e => e.stopPropagation())

window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		backdrop.classList.add('is-hidden')
		document.body.classList.remove('no-scroll')
	}
})
