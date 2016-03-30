jQuery(document).ready(function($) {
	$(".menu__content_button").on('click',function(event) {
		$(".menu").hide();
		$(".menu__open").show();
	});

	$(".menu__open_close-button").click(function(event) {
		$(".menu__open").hide();
		$(".menu").show();
	});
});