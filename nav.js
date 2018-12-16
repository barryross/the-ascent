$(document).ready(() => {

	function mobileNav(){
			let nav = document.querySelector('.nav-menu__btn');
			nav.addEventListener('click', function(e){
					let body = document.querySelector('body');
					let navWrapper = document.querySelector('.nav__wrapper');

					navWrapper.classList.toggle('nav--active');
					body.classList.toggle('body--fixed');
			})
	}
	mobileNav();
});
