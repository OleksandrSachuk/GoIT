// jQuery(document).ready(function($) {
// 	$(window).scroll(function(){
// 		if ($(this).scrollTop() > 100) {
// 		$('.scrollup').fadeIn();
// 	} else {
// 		$('.scrollup').fadeOut();
// 	}
// 	});
	 
// 	$('.scrollup').click(function(){
// 		$("html, body").animate({ scrollTop: 0 }, 600);
// 		return false;
// 	});
// });

jQuery(document).ready(function($) {
	$(window).scroll(function(event) {
		if($(this).scrollTop() > 100) {
			$('.scrollup').fadeIn();
		} else {
			$('.scrollup').fadeOut();
		}
	});

	$('.scrollup').on('click',function(event) {
		$('html,body').animate({
			scrollTop: 0}, 600); 
			return false;
		});
});