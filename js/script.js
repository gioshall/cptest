var wHeight = $(window).height();
$(window).scroll(function(){
	var scroll = $(window).scrollTop();
    //console.log(scroll)
    if ( scroll > wHeight/2 ) {	
    	$('.phone').addClass('sc-02');
    	$('.game').addClass('show');  	
    } else {
    	$('.phone').removeClass('sc-02');
    	$('.game').removeClass('show');
    }
    if ( scroll > wHeight*1.8 ) {
    	$('.phone').addClass('sc-03');
    	$('.show').addClass('store'); 	
    } else {
    	$('.phone').removeClass('sc-03');
    	$('.show').removeClass('store');
    }
    if ( scroll > wHeight*3.8 ) {
        $('.phones').show();
        $('.phone').delay(1000).hide();  
    } else {
        $('.phones').hide();
        $('.phone').show();
    }

    if ( $('.phones').attr('style') == 'display: block;' ) { 
        $('.phones ul').addClass('list');
        $('.growth span').addClass('show-g');
        $('.phones,.growth,.section-05 .title').addClass('slide');
    } else {
        $('.phones ul').removeClass('list');
        $('.growth span').removeClass('show-g');
        $('.phones,.growth,.section-05 .title').removeClass('slide');
    }
});

for (var i = 1; i <= 15; i++) {
    $('.phones ul').append('<li></li>');
};


jQuery(document).ready(function($) {
$body = (window.opera) ? (document.compatMode == "CSS1Compat" ? $('html') : $('body')) : $('html,body');
});
function cpclick1(){$body.animate( { scrollTop: $('.section-01').offset().top}, 500)};
function cpclick2(){$body.animate( { scrollTop: $('.section-02').offset().top}, 500)};
function cpclick3(){$body.animate( { scrollTop: $('.section-03').offset().top}, 500)};
function cpclick5(){$body.animate( { scrollTop: $('.section-05').offset().top}, 500)};


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
