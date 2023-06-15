// KV Slider
$(function(){
    $('.kv-slider').slick({
        fade: true,
        autoplay: true,
        autoplaySpeed: 4000,
        speed: 1500,
        arrows: false,
        dots: true,
        draggable: false
    });
});

// Pickup Slider
$(function(){
    $('.pickup-slider').slick({
        autoplay: true,
        infinite: true,
        speed: 500,
        autoplaySpeed: 4000,
        arrows: true,
        dots: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        variableWidth: true,
        cssEase: 'linear',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });    
});

// Information SP
$(function(){
    var $show = false;
    
	function infoShow() {
		if($show == false){
			$show = true;
            $('.info-item').css('display','block');
            $('.info-more').find('a').text('CLOSE');
            $('.info-more').addClass('is-close');
		}else{
			$show = false;
            $('.info-item').css('display','none');
            $('.info-more').find('a').text('MORE');
            $('.info-more').removeClass('is-close');
		}
	}
    
	$('.info-more').on('click', function(){
		infoShow();
	});
});
