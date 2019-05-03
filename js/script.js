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
			$('body').css('overflow','hidden')
		}
		else{
			$('body').css('overflow','visible');
		}
	}
}

burgerMenu('.burger-menu');
//burger menu - end


//mouse scroll - start
var scroll = $('.mouse-scroll');
var timer;
autoSlider();

function autoSlider() {
	timer = setTimeout(function(){
		scroll.toggleClass('img-change');
		autoSlider();
	}, 1000);
} 

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
//mouse scroll - end

//slider1 - start
var slideIndex = 1;
showSlides(slideIndex);

function minusSlides(n) {
  showSlides(slideIndex -= n);
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slide");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  slides[slideIndex-1].style.display = "block"; 
}
//slider1 - end

//slider2 - start

var itemIndex = 1;
roomSlides(itemIndex);

function minusSlide(n) {
	roomSlides(itemIndex -= n);
}

function plusSlide(n) {
  roomSlides(itemIndex += n);
}

function currentSlide(n) {
  roomSlides(itemIndex = n);
}

function roomSlides(n) {
	let i;
	let rooms = document.getElementsByClassName("room");
	let dots = document.getElementsByClassName("dot");
	if (n > rooms.length) {itemIndex = 1} 
	if (n < 1) {itemIndex = rooms.length}

	for (i = 0; i < rooms.length; i++) {
	  rooms[i].style.display = "none"; 
	}
	for (i = 0; i < dots.length; i++) {
	  dots[i].className = dots[i].className.replace(" active", "");
	}
	dots[itemIndex-1].className += " active";
	rooms[itemIndex-1].style.display = "flex"; 
}

//slider2 - end
