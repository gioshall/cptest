$(document).ready(function() {
    $('#fullpage').fullpage({
        anchors: ['intro', 'intro-game', 'intro-buy', 'intro-growth', 'quotes', 'contact'],
        menu: '.nav',
        scrollingSpeed: 600,
        resize: true,
        // loopTop: true,
        // loopBottom: true

        afterLoad: function(anchorLink, index) {
            console.log(index);

            //animation

            if (index >= 2) {
                $('.phone').addClass('sc-02');
                $('.game').addClass('show');
            } else {
                $('.phone').removeClass('sc-02');
                $('.game').removeClass('show');
            }

            if (index == 3) {
                $('.phone').addClass('sc-03');
                $('.show').addClass('store');
            } else {
                $('.phone').removeClass('sc-03');
                $('.show').removeClass('store');
            }
            
            if (index == 4) {
                $('.growth span').append('<p class="counter"></p>').addClass('show-g');
                // counter
                $({
                    countNum: $('.counter').text()
                }).animate({
                    countNum: 999999
                }, {
                    duration: 5000,
                    easing: 'linear',
                    step: function() {
                        $('.counter').text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $('.counter').text(this.countNum);
                    }
                });
            } else {
                $('.growth span').removeClass('show-g').empty();
            }

            if (index >= 4) {
                $('.phones').show();
                $('.phones,.growth').removeClass('fade');
                $('.phone').hide();
                $('.phones ul').addClass('list');               
                $('.section-05 .title,.more').addClass('slide');
                $('.fullpage-wrapper').delay(3000).addClass('zfront');
            } else {
                $('.phones').hide();
                $('.phones,.growth').addClass('fade');
                $('.phone').show();
                $('.phones ul').removeClass('list');
                $('.section-05 .title,.more').removeClass('slide');
                $('.fullpage-wrapper').removeClass('zfront')
            }

            if (index >= 5) {
                $('.phones,.growth,.sub-nav').addClass('fade');
                
            } else {
                $('.phones,.growth,.sub-nav').removeClass('fade');

            }
        }
    });
    for (var i = 1; i <= 15; i++) {
        $('.phones ul').append('<li></li>');
    };
    $('#moveTo').click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(1);
        //$('.sub-nav').removeClass('fade');
    });
    $('.phone').after().click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(2);
    });
    $('.more').after().click(function(e) {
        e.preventDefault();
        $.fn.fullpage.moveTo(5);
    });
});