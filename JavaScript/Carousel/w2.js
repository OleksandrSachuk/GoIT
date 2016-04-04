$.fn.w2 = function (options){
    var classes = {
        main: 'js-wave',
        carousel: 'js-wave__carousel',
        element:'js-wave__element'
    },
        width = {
            common: 0.8,
            first: 0.9,
            last: 0.9
        },
        paddings = {
            common: 0.05,
            wide: 0.15
        };

    //var $wave;
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
    var leftPosition = 0;
    $waveElements.each(
        function(){
            var maxWidth = $wave.width();
            switch ($(this).index()) {
                case 0:
                    $(this).css({
                        'left': leftPosition + 'px',
                        'width': maxWidth * width.first + 'px',
                        'padding-left': maxWidth * paddings.wide + 'px',
                        'padding - right': maxWidth * paddings.common + px
                    });
                    leftPosition += maxWidth * width.first;
                    break;
                case $waveElements.length - 1:
                    $(this).css({
                        'left': leftPosition + 'px',
                        'width': maxWidth * width.last + 'px',
                        'padding-right': maxWidth * paddings.wide + 'px',
                        'padding - left': maxWidth * paddings.common + px
                    });
                    leftPosition += maxWidth * width.last;
                    break;
                default:
                    $(this).css({
                        'left': leftPosition + 'px',
                        'width': maxWidth * width.common + 'px',
                        'padding-right': maxWidth * paddings.common + 'px',
                        'padding - left': maxWidth * paddings.common + px
                    });
                    leftPosition += maxWidth * width.common;
                    break;
            }
        }
    )
    $waveCarousel.css({'width': leftPosition + 'px'});
    var maxHeight = 0;
    $waveElements.each(
        function (){
            if($(this).height() > maxHeight){
                maxHeight = $(this).height();
            }
        }
    )
    $wave.height(maxHeight);
    $waveCarousel.height(maxHeight);
    $('.' + classes.element).on('click',function() {
        switch ($(this).index()){
            case 0:
                newLeft = 0;
                break;
            default:
                newLeft = parseFloat($(this).css('left'),10) - $wave.width() * .10;
                break;
        }

        $waveCarousel.css({
            'left': parseFloat(left: '-' + newLeft + 'px');
        })
    })
};