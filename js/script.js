function setLang(a) {
    for (var b = Object.keys(a), c = 0; c < b.length; c++) $("[text=" + b[c] + "]").html(a[b[c]])
}
$(document).ready(function() {
    $("#fullpage").fullpage({
        anchors: ["intro", "intro-game", "intro-buy", "intro-growth", "quotes", "contact"],
        menu: ".nav",
        scrollingSpeed: 800,
        resize: !0,
        touchSensitivity: 7,
        normalScrollElementTouchThreshold: 3,
        onLeave: function(a, b, c) {
            if (b >= 1 && $(".bg-01").removeClass("gray"), b >= 2 ? ($(".phone").addClass("sc-02"), $(".game").addClass("show"), $(".bg-01, .bg-02").addClass("switch"), setTimeout(function() {
                    $(".bg-02.switch .bg-02-2, .bg-02.switch .bg-02-3").addClass("ani")
                }, 1e3)) : ($(".phone").removeClass("sc-02"), $(".game").removeClass("show"), $(".game.show img").attr("src", ""), $(".bg-01, .bg-02").removeClass("switch"), $(".bg-02 div").removeClass("ani")), b >= 3 ? ($(".queue").show(), $(".bg-03").addClass("switch"), $(".phone").addClass("sc-03"), $(".show").addClass("store"), $(".bg-ptrn, .flow-ftr, .queue").addClass("fadein")) : ($(".queue").hide(), $(".bg-03").removeClass("switch"), $(".phone").removeClass("sc-03"), $(".show").removeClass("store"), $(".bg-ptrn, .flow-ftr, .queue").removeClass("fadein")), b >= 4) {
                $(".queue").hide(), $(".phone").addClass("blur").removeClass("sc-03"), $(".show").removeClass("store"), $(".bg-04").addClass("switch"), $(".chart").addClass("showchart");
                for (var d = 0; 5 > d; d++) $(".chart li:nth-of-type(" + (d + 1) + ") img").attr("src", "img/chart-0" + (d + 1) + ".gif");
                $(".bg-ptrn, .flow-ftr, .queue").removeClass("fadein")
            } else $(".phone").removeClass("blur"), $(".bg-04").removeClass("switch"), $(".chart").removeClass("showchart"), $(".chart li img").attr("src", "img/chart-space.gif");
            b >= 5 ? ($(".phone,.sub-nav").addClass("fade"), $(".allbg").removeClass("switch"), $(".bg-01").addClass("gray")) : $(".phone,.sub-nav").removeClass("fade"), b >= 6 ? ($(".contact").addClass("hide").removeClass("acted"), $(".contact-f").addClass("popup"), $(".contact-f-rbsmall").removeClass("popup"), $(".bg-01").removeClass("gray")) : ($(".contact").removeClass("hide"), $(".contact-f").removeClass("popup"))
        }
    }), $("#moveTo").click(function(a) {
        a.preventDefault(), $.fn.fullpage.moveTo(1)
    }), $(".phone").after().click(function(a) {
        a.preventDefault(), $.fn.fullpage.moveTo(2)
    }), $(".more").after().click(function(a) {
        a.preventDefault(), $.fn.fullpage.moveTo(5)
    }), $(".onoff").click(function() {
        $(".nav").toggleClass("open")
    })
}), setLang(i18n.zh);
var sbmZh = i18n.zh[Object.keys(i18n.zh)[35]],
    sbmEn = i18n.en[Object.keys(i18n.en)[34]];
$(".c2p-form-submit").attr("value", sbmZh), $(".lang .lang-zh").click(function() {
    setLang(i18n.zh), $(".lang span").removeClass("active"), $(this).addClass("active"), $(".c2p-form-submit").attr("value", sbmZh)
}), $(".lang .lang-en").click(function() {
    setLang(i18n.en), $(".lang span").removeClass("active"), $(this).addClass("active"), $(".c2p-form-submit").attr("value", sbmEn)
});
var swiper = new Swiper(".swiper-container", {
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    paginationClickable: !0,
    spaceBetween: 30,
    centeredSlides: !0,
    autoplay: 5e3,
    autoplayDisableOnInteraction: !1
});