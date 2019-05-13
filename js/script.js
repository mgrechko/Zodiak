//burger menu - start
function burgerMenu(selector){
	let menu = $(selector);
	let button = menu.find('.burger-menu-button');
	let links = menu.find('.burger-menu-link');
	let overlay = menu.find('.burger-menu-overlay');

	button.on('click', () => toggleMenu());
	links.on('click', () => toggleMenu());
	overlay.on('click', () => toggleMenu());

	function toggleMenu(){
		menu.toggleClass('burger-menu-active');

		if(menu.hasClass('burger-menu-active')){
			$('body').css('overflow-y','hidden');
		}
		else{
			$('body').css('overflow-y','visible');
		}
	}
}
//burger menu - end


//mouse scroll - start
function autoSlider() {
	var scroll = $('.mouse-scroll');
	if($(window).width() > 950){
		window.onscroll = function() {
			var heightPX = document.documentElement.scrollTop;

			if (heightPX > 20) {
				scroll.addClass('scrolled');
			}

			if (heightPX === 0) {
				scroll.removeClass('scrolled');
			}
		}
	}
}
//mouse scroll - end


//slider1 - start
function headerSlider(){
	$(".slide").width($(window).width());
	let slideWidth = $(".slide").width();
	let left = 0;

	$(".desc-carousel").width($(window).width());
	$(".slides").width($(".slide").length * slideWidth);

	var leftSwipe = "-" + ($(".slides").width() - $(".desc-carousel").width());

	$(".next").click(sliderNext);
	$(".prev").click(sliderPrev);

	function sliderNext(){
		var line = $(".slides");
		left = left - slideWidth;
		let lineW = Number('-' + line.width());
		if(left <= lineW){
			left = 0;
		}
		line.css("left", left+"px");
	}
	function sliderPrev(){
		var line = $(".slides");
		left = left + slideWidth;
		let lineW = Number('-'+line.width());
		if(left > 0){
			left = lineW + slideWidth;
		}
		line.css("left", left+"px");
	}
}
//slider1 - end

//slider2 - start
function roomSlider(){
	let itemIndex = 1;
	let back = $('.back');
	let forward = $('.forward');
	let dotsList = $('.dot');
	
	roomSlides(itemIndex);

	back.click(function(){
		roomSlides(itemIndex -= 1)
	});
	forward.click(function(){
		roomSlides(itemIndex += 1)
	});

	dotsList.click(function(){
		roomSlides(itemIndex = $(this).index()+1);
	});

	function roomSlides(n) {
		let i;
		let rooms = $('.room');
		let dots = $('.dot');
		if (n > rooms.length) {itemIndex = 1} 
		if (n < 1) {itemIndex = rooms.length}

		for (i = 0; i < rooms.length; i++) {
			$(rooms[i]).css('display','none');
		}
		for (i = 0; i < dots.length; i++) {
			$(dots[i]).removeClass('active');
		}
		$(dots[itemIndex-1]).addClass('active');
		$(rooms[itemIndex-1]).css('display','flex');
	}
}
//slider2 - end

$(document).ready(function(){
	burgerMenu('.burger-menu');
	autoSlider();
	headerSlider();
	roomSlider();
});