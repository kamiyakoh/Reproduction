let clickEventType = (( window.ontouchstart!==null ) ? 'click':'touchend');

$(".p-Nav__btn").on(clickEventType, function () {
    $(this).toggleClass('active');
    $(".c-hambarger_menu").toggleClass('menu-open');
    if ($(".c-hambarger_menu").hasClass('menu-open')) {
        $("nav", ".p-Nav").slideDown('fast');
    } else {
        $("nav", ".p-Nav").slideUp('fast');
        $(".c-accordion li").removeClass('menu-open');
    }
});

$('.c-accordion li').on('touchend', function () {
    $("ul.c-accordion_menu").slideUp('fast');
    $("ul:not(:animated)", this).slideDown('fast');
    $(".c-accordion li").not(this).removeClass('menu-open');
    if ($(this).hasClass('menu-open')) {
        $(this).removeClass('menu-open');
    } else {
        $(this).addClass('menu-open');
    }
});

$('c-accordion_menu li a').on(clickEventType, function(){
    $(".c-accordion li").removeClass('menu-open');
});

$('.dropdown li').on({
    'mouseenter': function () {
        $("ul:not(:animated)", this).slideDown('fast');
    },
    'mouseleave': function () {
        $("ul.dropdown_menu", this).slideUp('fast');
    }
});

$('.c-accordion li').on({
    'mouseenter': function () {
        $("ul:not(:animated)", this).slideDown('fast');
        $(this).addClass('menu-open');
    },
    'mouseleave': function () {
        $("ul.c-accordion_menu", this).slideUp('fast');
        $(this).removeClass('menu-open');
    }
});