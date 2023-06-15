// Include
function parts(rootDir,File){
 var date = new Date();
 var result = date.toISOString().substring(0,15).replace(/[:|\-]/g,"");

   $.ajax({
       url: rootDir + "library/" + File + '?_=${result}',
       cache: true,
       async: false,
       dataType: 'html',
       success: function(html){
           html = html.replace(/\{\$root\}/g, rootDir);
           document.write(html);
       }
   });
}

// Header PC
$(function(){    
    $(window).scroll(function () {
        if ($(this).scrollTop() > 150) {
            $('header').addClass("is-on");
        } else {
            $('header').removeClass("is-on");
        }
    });
});

// Menu Sp
$(function(){
    var $open=false;
    
	function menuMb() {
		if($open==false){
			$open=true;
            $('header').addClass('is-show');
		}else{
			$open=false;
            $('header').removeClass('is-show');
		}
	}
    
	$('.btn-menu').on('click',function() {
		menuMb();
	});
});

// Floating Bnr
$(function(){
    var show=false;

	function floatBnr() {
		if(show==false){
			show=true;
            $('.fBnr-visitor').addClass('is-show');
		}else{
			show=false;
            $('.fBnr-visitor').removeClass('is-show');
		}
	}

    $('.fBnr-head').click(function() {
        floatBnr();
    })    
});

// Anchorlink
$(function() {
    $('.js-anchor').click(function(){
          $('html, body').animate({
             scrollTop: $( $(this).attr('href') ).offset().top
          }, 400);
          return 
    });
});

// Pagetop
$(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#pagetop').fadeIn();
        } else {
            $('#pagetop').fadeOut();
        }
    });

    $('#pagetop').on('click', function () {        
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });	
});