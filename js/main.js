$(function() {
    $('.hamburger').click(function() {
        showHideMobile();
    });
    $(".dimmer").click(function() {
        showHideMobile();
    });
    $('li .icon-arrow').click(function() {
        $(this).parent().toggleClass('showSubmenu');
    });
});

function showHideMobile() {
    $(".hamburger").toggleClass('active');
    $(".hamburger").parent('.menu').toggleClass('active');
    $('.dimmer').toggleClass('active');
    $('body').toggleClass('no-scrolling');
}
if ($(window).width() < 960) {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 10) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
} else {
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 30) {
            $(".header").addClass("sticky");
        } else {
            $(".header").removeClass("sticky");
        }
    });
};
var locationpath = window.location.pathname.match(/[^\/]+$/);
if (locationpath == null) {
    $(".menu > ul > li:first-child > a").addClass('active');
} else {
    var pathname = (window.location.pathname.match(/[^\/]+$/)[0]);
    $(".menu ul li a").each(function() {
        if ($(this).attr('href') === pathname) {
            $(this).addClass('active');
            $(this).parents('.dropdown ').addClass('active');
            $(this).parents('.dropdown ').addClass('active');
        }
    });
}
var hometop = new Swiper('.home_topslider', {
    navigation: {
        nextEl: '.home_topslider .swiper-button-next',
        prevEl: '.home_topslider .swiper-button-prev',
    },
    autoHeight: true,
    effect: 'fade',
    loop: true,
    autoplay: true,
    speed: 500,
});
$('.scroll').on('click', function() {
    $('.scroll').parents().removeClass('active');
    $(this).parents().addClass('active');
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 20
    }, 1000);
    return false;
});
$(document).ready(function() {
    $(".portfolio .allproject .col-md-6").slice(0, 4).show();
    $("#loadMore").on("click", function(e) {
        $(".portfolio .allproject .col-md-6:hidden").slice(0, 4).slideDown();
        if ($(".portfolio .allproject .col-md-6:hidden").length == 0) {
            $("#loadMore").text("See Full Portfolio").addClass("noContent");
            $("#loadMore").click(function() {
                window.location.href = 'http://127.0.0.1:5500/portfolio.html';
            });
        }
    });
})
var testi = new Swiper('.testimonialhome', {
    speed: 600,
    loop: true,
    navigation: {
        nextEl: '.testimonialhome .swiper-button-next',
        prevEl: '.testimonialhome .swiper-button-prev',
    },
    pagination: {
        el: '.testimonialhome .swiper-pagination',
        type: 'fraction',
    },
    autoHeight: false,
    breakpoints: {
        200: {
            autoHeight: false,
        }
    }
});
$(window).scroll(function() {
    if ($(this).scrollTop() >= 350) {
        $('.backtopbtn').fadeIn(200);
    } else {
        $('.backtopbtn').fadeOut(200);
    }
});
$('#return-to-top').click(function() {
    $('body,html').animate({
        scrollTop: 0
    }, 1000);
});
var testis = new Swiper('.serviceslider', {
    speed: 600,
    loop: true,
    navigation: {
        nextEl: '.service_clientslider .swiper-button-next',
        prevEl: '.service_clientslider .swiper-button-prev',
    },
    slidesPerView: 3,
    spaceBetween: 30,
    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        600: {
            slidesPerView: 2,
        },
        700: {
            slidesPerView: 3,
        },
    }
});
$('.scroll').on('click', function() {
    $('.scroll').parents().removeClass('active');
    $(this).parents().addClass('active');
    $('html, body').animate({
        scrollTop: $(this.hash).offset().top - 20
    }, 1000);
    return false;
});
var stafftesti = new Swiper('.stafftestislider', {
    speed: 600,
    loop: true,
    navigation: {
        nextEl: '.stafftesti .swiper-button-next',
        prevEl: '.stafftesti .swiper-button-prev',
    },
    pagination: {
        el: '.stafftesti .swiper-pagination',
        type: 'fraction',
    },
    autoHeight: false,
});
$('.uploadresume input[type="file"]').each(function() {
    var label = $(this).parents('.uploadresume').find('label').text();
    label = (label) ? label : 'Upload File';
    $(this).wrap('<div class="input-file"></div>');
    $(this).before('<span class="btn">' + label + '</span>');
    $(this).before('<span class="file-selected"></span>');
    $(this).change(function(e) {
        var val = $(this).val();
        var filename = val.replace(/^.*[\\\/]/, '');
        $(this).siblings('.file-selected').text(filename);
    });
});
$('.uploadresume .input-file .btn').click(function() {
    $(this).siblings('.uploadresume input[type="file"]').trigger('click');
});
$(document).ready(function() {
    $(".portpage_main .col-12").slice(0, 8).show();
    $("#loadMore0").on("click", function(e) {
        e.preventDefault();
        $(".portpage_main .col-12:hidden").slice(0, 8).slideDown();
        if ($(".portpage_main .col-12:hidden").length == 0) {
            $("#loadMore0").text("Load More").addClass("noContent_dn");
        }
    });
});
$(document).ready(function() {
    $(".portpage_main2 .col-12").slice(0, 8).show();
    $("#loadMore2").on("click", function(e) {
        e.preventDefault();
        $(".portpage_main2 .col-12:hidden").slice(0, 8).slideDown();
        if ($(".portpage_main2 .col-12:hidden").length == 0) {
            $("#loadMore2").text("Load More").addClass("noContent_dn");
        }
    });
});
$(document).ready(function() {
    $(".portpage_main3 .col-12").slice(0, 8).show();
    $("#loadMore3").on("click", function(e) {
        e.preventDefault();
        $(".portpage_main3 .col-12:hidden").slice(0, 8).slideDown();
        if ($(".portpage_main3 .col-12:hidden").length == 0) {
            $("#loadMore3").text("Load More").addClass("noContent_dn");
        }
    });
});
$(".covidpopup").click(function() {
    $(".covidpopup_box").addClass("show");
});
$(".covidpopup_box .popupclose ").click(function() {
    $(".covidpopup_box").toggleClass("show");
});
$.validator.addMethod("is_valid_email", function(value, element) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(value);
}, "Please enter a valid email address.");
$("#contact_form").validate({
    ignore: [],
    rules: {
        'email': {
            email: true,
            is_valid_email: true
        },
        'mobile': {
            digits: true,
            minlength: 10,
            maxlength: 10
        }
    },
    messages: {},
    submitHandler: function(form) {
        $(".contact_form_submit").css('pointer-events', 'none');
        $(".contact_form_submit").css('opacity', 0.5);
        var formData = new FormData(document.getElementById("contact_form"));
        $.ajax({
            url: 'ajax.php?action=contact_form',
            type: "POST",
            data: formData,
            processData: false,
            contentType: false,
            dataType: 'json',
            beforeSend: function() {
                $("#loading-img").show();
                $("#loading-img").css('max-width', '5%');
            },
            success: function(data) {
                if (data.result == 'true') {
                    window.location.href = "https://www.nitidodesign.com/thank-you";
                    $("#contact_form")[0].reset();
                } else {
                    var msg_box = '<div class="alert alert-danger alert-dismissible"><strong>Oops!</strong> ' + data.msg + '</div>';
                }
                $("#contact_form_msg_box").html(msg_box);
                $(".contact_form_submit").css('pointer-events', 'auto');
                $(".contact_form_submit").css('opacity', 1);
                $("#loading-img").hide();
            }
        });
    }
});