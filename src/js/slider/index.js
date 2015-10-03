var $ = require('jquery');

var $bgHome = $('.bg-home');
var $nav = $('nav');
var sliderButton = $('.js-slider');

function calc() {
	var navHeight = $nav.height();
	var bgHomeHeight = $bgHome.height();
	var totalHeight = bgHomeHeight + navHeight;

	return totalHeight;
}

function slide() {
	var totalHeight = calc();

	if(window.scrollY > totalHeight) {
		return;
	}
	window.scrollBy(0, 30);
	window.requestAnimationFrame(slide);
}

function init() {
	if($bgHome.height() === null) {
		return;
	}
	sliderButton.on('click', function(){
		window.requestAnimationFrame(slide);
	})
}

module.exports = {
	init: init
}