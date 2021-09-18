$('.carousel_slick_1').slick({
    infinite: true,
    dots: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
});
$('.carousel_slick_2').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        },
    ]
});
$('.carousel_slick_3').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                arrows: false,
            }
        },
    ]
});
$('.carousel_slick_4').slick({
    arrows: false,
    infinite: false,
    autoplay: true,
    autoplaySpeed: 4000,
    slidesToShow: 1,
});