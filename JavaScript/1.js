$.fn.w2 = function (options){
    var classes = {
        main: 'js-wave',
        carousel: 'js-wave__carousel',
        element:'js-wave__element'
    };

    var $wave;
    &(this).children().wrapAll('<div class="' +classes.main + '"></div>');
    var $wave = $(this).find('.' + classes.main);
    $wave.children().wrapAll('<div class="' +classes.carousel + '"></div>');
    var $waveCarousel = $wave.find('.' + classes.carousel);
    $waveCarousel.children().each(
        function(){
            $(this).wrap('<div class="' + classes.element + '"></div>');
        }
    );
    var $waveElements = $wave.find('.' + classes.element);

};