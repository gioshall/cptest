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
            console.log(index);

            //animation

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
            } else {
                $('.bg-03').removeClass('switch');
            }

            if (nextIndex == 3) {
                $('.phone').addClass('sc-03');
                $('.show').addClass('store');
            } 

            if (nextIndex < 3) {
                $('.phone').removeClass('sc-03');
                $('.show').removeClass('store');
            }
            
            if (index == 3 && direction == 'down') {
                $('.phones').delay(1500).show(0);
                $('.phone').delay(1500).hide(0);
            }
            
            if (nextIndex == 4) {
                $('.growth span').append('<p class="counter"></p>').addClass('show-g');
                // counter
                $({
                    countNum: $('.counter').text()
                }).animate({
                    countNum: 999999
                }, {
                    duration: 4500,
                    easing: 'linear',
                    step: function() {
                        $('.counter').text(Math.floor(this.countNum));
                    },
                    complete: function() {
                        $('.counter').text(this.countNum);
                    }
                });
                $('.bg-04').delay(1500).queue(function(){
                    $(this).addClass('switch').dequeue();
                });
            } else {
               $('.growth span').empty();
               $('.bg-04').removeClass('switch');               
            }

            if (nextIndex >= 4) {
                $('.phones').show(0);
                $('.phone').hide(0);
                $('.phones ul').addClass('list');               
                $('.section-05 .title,.more,.features li').addClass('slide');
                $('.fullpage-wrapper').delay(3000).addClass('zfront');               
            } else {
                $('.phones').hide();
                $('.growth span').removeClass('show-g');
                $('.phone').show();
                $('.phones ul').removeClass('list');
                $('.section-05 .title,.more,.features li').removeClass('slide');
                $('.fullpage-wrapper').removeClass('zfront');               
            }

            if (nextIndex >= 5) {
                $('.phone,.phones').hide();
                $('.phones,.sub-nav').addClass('fade');              
            } else {
                $('.phones,.sub-nav').removeClass('fade');
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

// disable scroll on mobile

// document.addEventListener('touchstart', function (e) {
//     e.preventDefault();
// });