// Tabnav
$(function(){
    $('.subnav li#nav01').addClass('is-active');
    $('#tab01').show();
    
    $('.subnav li[id^="nav"]').on('click', function() {
        $('[id^="tab"]').hide();
        $('#tab' + this.id.slice(3)).show();
        $(this).addClass('is-active');
        $('.subnav li').not(this).removeClass('is-active');
    });
});
