$(function() {
    // Navbar
    let nav = "nav";
    // Navbar >> on scroll fixed
    $(window).on("scroll", function() {
        let windowScrollTop = $(window).scrollTop();

        if(windowScrollTop >= 20)
            $(nav).addClass("nav-fixed");
        else
            $(nav).removeClass("nav-fixed");
    });

    // Navbar >> hamburger button
    $(".hamburger-btn").on("click", function() {
        $(nav).toggleClass("mobile-navbar");
        $("body").toggleClass("scroll-off");
    });

    // Features >> tabs
    $(".tab-btns li").on("click", function() {
        $(this).addClass("active").siblings().removeClass("active");

        $("." + $(this).attr("id")).fadeIn(600).siblings().hide();
    });

    // Frequently Asked Questions
    $(".asked-questions-content .question").on("click", function() {
        let id = $("." + $(this).attr("id"));
        id.slideToggle(500);
        $("#" + $(this).attr("id") + " .icon-arrow").toggleClass("close");
    });

});