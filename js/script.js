var wHeight = $(window).height();
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
    //console.log(scroll)
    if ( scroll >= wHeight*0.9 ) {	
    	$('.phone').addClass('sc-02');
    	$('.game').addClass('show');  	
    } else {
    	$('.phone').removeClass('sc-02');
    	$('.game').removeClass('show');
    }
    if ( scroll >= wHeight*1.9 ) {
    	$('.phone').addClass('sc-03');
    	$('.show').addClass('store'); 	
    } else {
    	$('.phone').removeClass('sc-03');
    	$('.show').removeClass('store');
    }
    if ( scroll >= wHeight*3.9 ) {
        $('.phones').show();
        $('.phone').delay(1000).hide();  
    } else {
        $('.phones').hide();
        $('.phone').show();
    }

    if ( $('.phones').attr('style') == 'display: block;' ) { 
        $('.phones ul').addClass('list');
        $('.growth span').addClass('show-g');
        $('.phones,.growth,.section-05 .title,.more').addClass('slide');
    } else {
        $('.phones ul').removeClass('list');
        $('.growth span').removeClass('show-g');
        $('.phones,.growth,.section-05 .title,.more').removeClass('slide');
    }
});

for (var i = 1; i <= 15; i++) {
    $('.phones ul').append('<li></li>');
};


$(document).ready(function($) {
$(window).scrollTop(0);
$('.phones,.growth').removeClass('fade');
$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
});
function cpclick1(){
    $body.animate( { scrollTop: $('.section-01').offset().top}, 500);
    $('.phones,.growth,.sub-nav').removeClass('fade');
    $('.nav li').removeClass('active');
    $('.sub-nav li:nth-of-type(1)').addClass('active');
};
$('.phone').after().click(function(){
    $body.animate( { scrollTop: $('.section-02').offset().top}, 500);
    $('.nav li').removeClass('active');
    $('.sub-nav li:nth-of-type(2)').addClass('active');
});
function cpclick2(){
    $body.animate( { scrollTop: $('.section-02').offset().top}, 500);
    $('.nav li').removeClass('active');
    $('.sub-nav li:nth-of-type(2)').addClass('active');
};
function cpclick3(){
    $body.animate( { scrollTop: $('.section-03').offset().top}, 500);
    $('.nav li').removeClass('active');
    $('.sub-nav li:nth-of-type(3)').addClass('active');
};
function cpclick5(){
    $body.animate( { scrollTop: $('.section-05').offset().top}, 500);
    $('.nav li').removeClass('active');
    $('.sub-nav li:nth-of-type(4)').addClass('active');
};
function cpclick6(){
    $body.animate( { scrollTop: $('.section-06').offset().top}, 500);
    $('.phones,.growth,.sub-nav').addClass('fade');
    $('.nav li').removeClass('active');
    $('.nav li:nth-of-type(2)').addClass('active');
};
function cpclick7(){
    $body.animate( { scrollTop: $('.section-07').offset().top}, 500);
    $('.phones,.growth,.sub-nav').addClass('fade');
    $('.nav li').removeClass('active');
    $('.nav li:nth-of-type(3)').addClass('active');
};

$({countNum: $('.counter').text()}).animate({countNum: 999999}, {
  duration: 6000,
  easing:'linear',
  step: function() {
    $('.counter').text(Math.floor(this.countNum));
  },
  complete: function() {
    $('.counter').text(this.countNum);
  }
});
