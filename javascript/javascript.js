$(function () {
    $('#navigation li a').click(function () {
        $('#navigation li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
    $('.carousel').carousel({
        interval: 2000
    })
    
     $('#navigation li a').on('click', function(){
                if(window.innerWidth < 768){
                    $(".navbar-toggle").click()
                }
            });

});