var $ = require('jquery');

var $btn = $('.js-btn-responsive');
var $nav = $('.nav__bar');

function init() {
	console.log($btn);
	$btn.on('click', function(){
		$nav.toggleClass('is-open');
	})
} 

module.exports = {
	init: init
}