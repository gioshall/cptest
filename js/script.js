$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['intro', 'intro-game', 'intro-buy', 'intro-growth', 'quotes', 'contact'],
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
                $('.bg-02').addClass('switch');
            } else {
                $('.phone').removeClass('sc-02');
                $('.game').removeClass('show');
                $('.bg-02').removeClass('switch');
            }
            
            if (nextIndex >= 3) {
                $('.bg-03').addClass('switch');
                $('.phone').addClass('sc-03');
                $('.show').addClass('store');
            } else {
                $('.bg-03').removeClass('switch');
                $('.phone').removeClass('sc-03');
                $('.show').removeClass('store');
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