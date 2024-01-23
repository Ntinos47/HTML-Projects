$(document).ready(function() {
    $('.slick-carousel').slick({
        prevArrow: '.arrow_prev',
        nextArrow: '.arrow_next',
        slidesToShow: 4,
        slidesToScroll: 1,
    });

    $('.slick-carousel').slick({
        arrows:false,
    });

    $('.slick-carousel').on('swipe', function(event, slick, direction){
        console.log(direction);
    });

});