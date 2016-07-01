jQuery(document).ready(function($) {
	var menuDefault = $(".menu-default");
	if (menuDefault.width() < 688) {
		$("#menu").removeClass('menu-default');
		$("#menu").addClass('menu-adaptive');
	};
	if (menuDefault.width() > 688) {
		$("#menu").addClass('menu-default');
		$("#menu").removeClass('menu-adaptive');
	}

	var flag=0;

	$(".menu__adaptive_button").click(function(event) {
		 // Act on the event 
		 
		 if(flag==0) {
		 	$(".menu-adaptive nav").show();
		 	flag = 1;
		 } else if (flag == 1){
		 	$(".menu-adaptive nav").hide();
		 	flag=0;
		 }
		});
		$(".menu-adaptive nav a").click(function(event) {
			/* Act on the event */
			$(".menu-adaptive nav").hide();
		});
});