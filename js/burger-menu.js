const burger = document.querySelector('.burger')
const openBurgerBtn = document.querySelector('.header__burger')
const closeBurgerBtn = document.querySelector('.burger__close')

const toggleBurgerFn = () => {
	burger.classList.toggle('is-hidden')
	document.body.classList.toggle('no-scroll')
}

openBurgerBtn.addEventListener('click', toggleBurgerFn)
closeBurgerBtn.addEventListener('click', toggleBurgerFn)

window.addEventListener('keydown', e => {
	if (e.key === 'Escape') {
		burger.classList.add('is-hidden')
		document.body.classList.remove('no-scroll')
	}
})
