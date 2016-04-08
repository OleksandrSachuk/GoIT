(function () {
	var delay = 100,
	i = 0,
	startTmer = function (pixels) {
	
		var elem = document.getElementById('circle'),
		bottom = elem.offsetTop;
	

		if ((pixels > 0 && bottom > 250) || (pixels < 0 && bottom < 50)) {
			clearInterval(timer);
			
			timer = setInterval(function(){
				startTmer(pixels * (-1));
			}, delay);	
		}
		elem.style.top = bottom + pixels + 'px';
		i++;
	};

	var timer = setInterval(function(){
		startTmer(20);
	}, delay);	
	//var timer = setTimeout(startTmer, delay);

	//clearTimeout(timer);

})();
