$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['intro', 'intro-game', 'intro-buy', 'intro-growth', 'quotes'],
        menu: '.nav',
        scrollingSpeed: 800,
        resize: true,
        touchSensitivity: 7,
        normalScrollElementTouchThreshold: 5,
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
                setTimeout(function(){
                    $('.bg-02.switch .bg-02-2, .bg-02.switch .bg-02-3').addClass('ani');
                 }, 1000);
            } else {
                $('.phone').removeClass('sc-02');
                $('.game').removeClass('show');
                $('.game.show img').attr('src','');
                $('.bg-01, .bg-02').removeClass('switch');
                $('.bg-02 div').removeClass('ani');
            }
            
            if (nextIndex >= 3) {
                $('.bg-03').addClass('switch');
                $('.phone').addClass('sc-03');
                $('.show').addClass('store');
                $('.flow-ftr, .queue').addClass('fadein');
            } else {
                $('.bg-03').removeClass('switch');
                $('.phone').removeClass('sc-03');
                $('.show').removeClass('store');
                $('.flow-ftr, .queue').removeClass('fadein');
            }

            if (nextIndex >= 4) {
                $('.phone').addClass('blur');
                $('.bg-04').addClass('switch');             
                $('.more,.features li').addClass('slide');
                $('.fullpage-wrapper').addClass('zfront');               
            } else {
                $('.phone').removeClass('blur');
                $('.bg-04').removeClass('switch');
                $('.more,.features li').removeClass('slide');
                $('.fullpage-wrapper').removeClass('zfront');               
            }

            if (nextIndex >= 5) {
                $('.phone,.sub-nav').addClass('fade');
                $('.allbg').removeClass('switch');
                $('.bg-01').addClass('gray');
            } else {
                $('.phone,.sub-nav').removeClass('fade');
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

    $('.onoff').click(function(){
        $('.nav').toggleClass('open')
    });
});

// set lang

function setLang(e) {
var title = Object.keys(e);
for (var i = 0; i < title.length; i++) {   
    $('[text=' + title[i] + ']').html(e[title[i]]);
};
}

setLang(i18n.zh);

$('.lang .lang-zh').click(function(){
    setLang(i18n.zh);
    $('.lang span').removeClass('active');
    $(this).addClass('active');
});

$('.lang .lang-en').click(function(){
    setLang(i18n.en);
    $('.lang span').removeClass('active');
    $(this).addClass('active');
});

//contact

$('.contact').click(function(){
    $(this).toggleClass('acted');
    $('.contact-form').toggleClass('open');
});