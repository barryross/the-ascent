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

		//Pass in a parent list item node, and a boolean value to indicate whether that 
		function showSubMenu(li){
			li.addClass("open")
			li.find(".nav-menu__link").attr("aria-expanded", "true")

		}
		function closeSubMenu(li){
			li.removeClass("open")
			li.find(".nav-menu__link").attr("aria-expanded", "false")
		}
		
		//Button should toggle submenu visibility 
		$("button.nav-arrow").click(function(){
		var $li = $(this).parent()
		 if($li.hasClass("open")){
				//close
				closeSubMenu($li)
		 }else{
			 //open
			 showSubMenu($(this).parent())
		 }
		});

		//Mouseover parent and submenu should show
		$("li").mouseover(function(){
			showSubMenu($(this))
		})

		//Mouseout of submenu and submenu should hide
		$("li").mouseout(function(){
			closeSubMenu($(this))
		})
});
