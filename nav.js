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

	//To ensure "nav--active is removed" on resize
	$(window ).resize(function() {
		var width = $( window ).width();
		if(width > 1024){$(".nav__wrapper").removeClass("nav--active")}
	});
	mobileNav();

		//Pass in a parent list item node, and a boolean value to indicate whether that 
		function showSubMenu(li){
			li.addClass("open")
			li.find(".nav-arrow").html('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 504c137 0 248-111 248-248S393 8 256 8 8 119 8 256s111 248 248 248zm0-448c110.5 0 200 89.5 200 200s-89.5 200-200 200S56 366.5 56 256 145.5 56 256 56zm20 328h-40c-6.6 0-12-5.4-12-12V256h-67c-10.7 0-16-12.9-8.5-20.5l99-99c4.7-4.7 12.3-4.7 17 0l99 99c7.6 7.6 2.2 20.5-8.5 20.5h-67v116c0 6.6-5.4 12-12 12z"/></svg>')
			li.find(".nav-menu__link").attr("aria-expanded", "true")
		}
		function closeSubMenu(li){
			li.removeClass("open");
			console.log("displaying down arrow")
			$(".nav-arrow").html('<svg fill="#474747"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path  d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm-32-316v116h-67c-10.7 0-16 12.9-8.5 20.5l99 99c4.7 4.7 12.3 4.7 17 0l99-99c7.6-7.6 2.2-20.5-8.5-20.5h-67V140c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12z"/></svg>')
			li.find(".nav-menu__link").attr("aria-expanded", "false")
		}

		//Button should toggle submenu visibility 
		$("button.nav-arrow").click(function(evt){
			evt.stopPropagation()
			var $li = $(this).parent()
			if($li.hasClass("open")){
					closeSubMenu($li)
			}else{
				showSubMenu($(this).parent())
			}
		});
		$("li.nav-menu__item > a").mouseenter(function(){
			var $a = $(this)
			if(!$a.parent().hasClass("open")){
					showSubMenu($a.parent())
			}
		})

		$("li.nav-menu__item").mouseleave(function(){
			console.log("leaving li")
			var $li = $(this);
			if($li.hasClass("open")){
				closeSubMenu($li)
		 }
		})
});
