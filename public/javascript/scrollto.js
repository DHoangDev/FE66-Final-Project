function scrollto(value) {
    $('html, body').animate({
        scrollTop: $('#' + value + '').offset().top - 70
    }, 500)
}