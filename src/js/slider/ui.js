module.exports = function($) {
	
	var pageHeight = $('.page-full').height();
	var navHeight = $('nav').height();
	var totalHeight = pageHeight + navHeight;
	var sliderButton = $('.js-slider');

	function slide() {
		if(window.scrollY > totalHeight) {
			return;
		}
		window.scrollBy(0, 30);
		window.requestAnimationFrame(slide);
	}

	sliderButton.on('click', function(){
		window.requestAnimationFrame(slide);
	})
}