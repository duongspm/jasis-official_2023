// Schedule Sp
$(function(){
    $('.spScroll').bind('touchstart mousedown', function(){
        $('.swipe').fadeOut();
    });
});


// Modal
$(function(){
    var overlay = $("<div class='modal-overlay'></div>");
        $("body").append(overlay);

    var modalClose = $("<p class='modal-close'>閉じる</p>")
    
    $(".modal-wrap").append(modalClose);
    
    $('a[rel*=js-modal]').on('click',function(){
        $(".modal-overlay").fadeIn(200);
        var href = $(this).attr('href');
        $(href).fadeIn(250);
    });

    function closeModal(){
        $(".modal-overlay").fadeOut(200);
        $('.modal-wrap').fadeOut(250);
    }

    $('.modal-close').on('click', function(){
        closeModal();
    });

    $('.modal-overlay').on('click', function(){
        closeModal();
    });
});