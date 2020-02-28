$(function(){

    $(".header_slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: '<button class="prev"></button>',
        prevArrow: '<button class="next"></button>'
    });

    $('.header_box_slider_big').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.header_box_slider_small'
    });
    $('.header_box_slider_small').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.header_box_slider_big',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        vertical: true,
        arrows: false,
    });

    $(".slider_inner").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: true,
        arrows: true,
        nextArrow: '<button class="slick-prev"></button>',
        prevArrow: '<button class="slick-next"></button>'
    });
        
        
    $('.header_box_tab .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.header_box_tab').find('.tab-item').removeClass('active-tab').hide();
            $('.header_box_tab .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });
    $('.header_box_tab_next .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.header_box_tab_next').find('.tab-item').removeClass('active-tab').hide();
            $('.header_box_tab_next .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });
    $('.header_box_tab_next_next .tab').on('click', function(event) {
        var id = $(this).attr('data-id');
            $('.header_box_tab_next_next').find('.tab-item').removeClass('active-tab').hide();
            $('.header_box_tab_next_next .tabs').find('.tab').removeClass('active');
            $(this).addClass('active');
            $('#'+id).addClass('active-tab').fadeIn();
            return false;
    });

    $(".rate_star").rateYo({
        rating: 4,
        starWidth: "13px",
        ratedFill: "orange",
        normalFill: "#fff",
        readOnly: true,
        spacing: "5px"
    });

});

// slidesToShow: 4,
// slidesToScroll: 1,
// arrows: true,
// focusOnSelect: true