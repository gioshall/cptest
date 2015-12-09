$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['intro', 'intro-game', 'intro-buy', 'intro-growth', 'quotes', 'contact'],
        menu: '.nav',
        scrollingSpeed: 800,
        resize: true,
        touchSensitivity: 7,
        normalScrollElementTouchThreshold: 3,
        // loopTop: true,
        // loopBottom: true

        onLeave: function(index, nextIndex, direction) {
            //console.log(index);

            //animation
            if (nextIndex >= 1) {
                $('.bg-01').removeClass('gray');
            }

            if (nextIndex >= 2) {
                $('.phone').addClass('sc-02');
                $('.game').addClass('show');
                //$('.game.show img').attr('src','img/ani.gif');
                $('.bg-01, .bg-02').addClass('switch');
                setTimeout(function() {
                    $('.bg-02.switch .bg-02-2, .bg-02.switch .bg-02-3').addClass('ani');
                }, 1000);
            } else {
                $('.phone').removeClass('sc-02');
                $('.game').removeClass('show');
                $('.game.show img').attr('src', '');
                $('.bg-01, .bg-02').removeClass('switch');
                $('.bg-02 div').removeClass('ani');
            }

            if (nextIndex >= 3) {
                $('.queue').show();
                $('.bg-03').addClass('switch');
                $('.phone').addClass('sc-03');
                $('.show').addClass('store');
                $('.bg-ptrn, .flow-ftr, .queue').addClass('fadein');
            } else {
                $('.queue').hide();
                $('.bg-03').removeClass('switch');
                $('.phone').removeClass('sc-03');
                $('.show').removeClass('store');
                $('.bg-ptrn, .flow-ftr, .queue').removeClass('fadein');
            }

            if (nextIndex >= 4) {
                $('.queue').hide();
                $('.phone').addClass('blur').removeClass('sc-03');
                $('.show').removeClass('store');
                $('.bg-04').addClass('switch');
                $('.chart').addClass('showchart');
                for (var i = 0; i < 5; i++) {
                    $('.chart li:nth-of-type(' + (i + 1) + ') img').attr('src', 'img/chart-0' + (i + 1) + '.gif')
                };
                $('.bg-ptrn, .flow-ftr, .queue').removeClass('fadein');
            } else {
                $('.phone').removeClass('blur');
                $('.bg-04').removeClass('switch');
                $('.chart').removeClass('showchart');
                $('.chart li img').attr('src', 'img/chart-space.gif')
            }

            if (nextIndex >= 5) {
                $('.phone,.sub-nav').addClass('fade');
                $('.allbg').removeClass('switch');
                $('.bg-01').addClass('gray');
            } else {
                $('.phone,.sub-nav').removeClass('fade');
            }
            if (nextIndex >= 6) {
                $('.contact').addClass('hide').removeClass('acted');
                $('.contact-f').addClass('popup');
                $('.contact-f-rbsmall').removeClass('popup');
                $('.bg-01').removeClass('gray');
            } else {
                $('.contact').removeClass('hide');
                $('.contact-f').removeClass('popup');
            }
        }
    });

    $('#moveTo').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1);
    });
    $('.phone').after().click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(2);
    });
    $('.more').after().click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(5);
    });

    $('.onoff').click(function() {
        $('.nav').toggleClass('open')
    });
});


$(window).load(function() {
    //contact
    $('#wrapper .form-cont').load('form.html');
    $('#wrapper .contact').click(function() {
        $(this).toggleClass('acted');
        $('#wrapper .contact-f-rbsmall').toggleClass('popup');
    });
})

// set lang

function setLang(e) {
    var title = Object.keys(e);
    for (var i = 0; i < title.length; i++) {
        $('[text=' + title[i] + ']').html(e[title[i]]);
    };
}

setLang(i18n.zh);

var sbmZh = i18n.zh[Object.keys(i18n.zh)[35]];
var sbmEn = i18n.en[Object.keys(i18n.en)[34]];
$('.c2p-form-submit').attr('value', sbmZh);

$('.lang .lang-zh').click(function() {
    setLang(i18n.zh);
    $('.lang span').removeClass('active');
    $(this).addClass('active');
    $('.c2p-form-submit').attr('value', sbmZh);
});

$('.lang .lang-en').click(function() {
    setLang(i18n.en);
    $('.lang span').removeClass('active');
    $(this).addClass('active');
    $('.c2p-form-submit').attr('value', sbmEn);
});

//swiper

var swiper = new Swiper('.swiper-container', {
    pagination: '.swiper-pagination',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    paginationClickable: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: 5000,
    autoplayDisableOnInteraction: false
});