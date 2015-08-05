$(function () {
    $('#navigation li a').click(function () {
        $('#navigation li').removeClass();
        $($(this).attr('href')).addClass('active');
    });
    $('.carousel').carousel({
        interval: 2000
    })

});