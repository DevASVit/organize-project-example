$(document).on("ready", () => {
    new WOW().init();
    $(".slider-wrapper").slick({
        slidesToScroll: 3,
        slidesToShow: 3,
        centerMode: true,
        centerPadding: "100px",
        nextArrow: false,
        prevArrow: false,
        dots: true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                centerPadding: "40px",
                dots: true
            }
        }]
    });
});
