$(document).ready(function(){
  var default_button_size = '30px';
  var hover_button_size = '40px';
  resize();
  $('.scrollTop a').click(function(){
    $('html, body').animate({ scrollTop: 0 }, 'slow');
  });
  $(window).resize(function() {
    resize();
  });
  windowLoad();
});

function windowLoad(){
  $(window).load( function() {
    resize();
  });
}


function resizeText(){
  $('h1, h2, .social.links').each( function($index) {
     while( $(this).outerWidth() > $('body .main-wrapper .main').outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) - 2) + 'px');
     }
     while( $(this).outerWidth() < $('body .main-wrapper .main').outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) + 2) + 'px');
     }
  });
}

function resizeTitle(){
  var $title = $('.main .page-title');
  var titleW = $title.width();
  var $slogan = $('.main .slogan');
  var sloganW = $slogan.width();
  var sloganMargin = parseInt($('.main .slogan p').css('margin-right'));
  $('.main .slogan p').width(((sloganW - sloganMargin)/2)*0.98);

  // equalHeightWidth($title);
}

function centerMain(){
  var mainW = $('.main-wrapper').width();
  var windowW = $(window).width();
  var mainH = $('.main-wrapper').height();
  var mainML = parseInt($('.main-wrapper').css('margin-left'));
  var mainMT = parseInt($('.main-wrapper').css('margin-top'));
  if (mainML > 0 && mainMT == 0){
      $('.main-wrapper').css({
      'width': (windowW - mainML)+'px',
    });
  }else{
    $('.main-wrapper').css({
      'width': '100%',
    });
  }
  //   $('.main').css({
  //     'height': '100%',
  //     'width': '100%',
  //   });
  // if(mainMT == 0) {
  //   $('.main-wrapper').css({
  //   'width': (mainW - mainMR)+'px',
  //   'height': '100%',
  // });
  // } else {
}

function resize(){
  centerMain();
  resizeTitle();
  blog();
}

//function makes height the same as the width of an object
function equalHeightWidth($object){
  $object.height($object.width());
}

//function centers the object vertically within the parent object
function centerVertical($object, $parentObject){
  var parentH = $parentObject.height();
  var objectH = $object.height();
  $object.css({
    'margin-top': ((parentH - objectH)/2)+'px',
  });
}


function centerHorizontal($object, $parentObject){
  var parentW = $parentObject.width();
  var objectW = $object.width();
  $object.css({
    'margin-left': ((parentW - objectW)/2)+'px',
  });
}
//javascript functions for blog page
function blog(){
  if ($('body').hasClass('blog')){
    centerHorizontal($('.filters .categories'), $('.filters'));

  }
}
