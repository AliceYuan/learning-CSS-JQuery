$(document).ready(function(){
  var default_button_size = '30px';
  var hover_button_size = '40px';
  resize();
  $(window).resize(function() {
    resize();
  });
  windowLoad();
});

function addClasses(){
  var windowW = $(window).width();
  var windowH = $(window).height();
  //add portrait / landscape class
  if (windowH > windowW){
    $('body').addClass('portrait').removeClass('landscape');
  }else{
    $('body').addClass('landscape').removeClass('portrait');
  }

  //remove previous screen size classes
  $('body').removeClass (function (index, css) {
      return (css.match (/\bscreen-width-\S+/g) || []).join(' ');
  });
  $('body').removeClass (function (index, css) {
      return (css.match (/\bscreen-height-\S+/g) || []).join(' ');
  });

  //add width of screen class
  if (windowW > 1023){
    $('body').addClass('screen-width-large');
  }else if (windowW > 767){
    $('body').addClass('screen-width-medium');
  }else if (windowW > 479){
    $('body').addClass('screen-width-small');
  }else{
    $('body').addClass('screen-width-xsmall');
  }

  //add height of screen class
  if (windowH > 1023){
    $('body').addClass('screen-height-large');
  }else if (windowH > 767){
    $('body').addClass('screen-height-medium');
  }else if (windowH > 479){
    $('body').addClass('screen-height-small');
  }else{
    $('body').addClass('screen-height-xsmall');
  }
}

function windowLoad(){
  $(window).load( function() {
    centerIcons();
    // resize();
  });
}

function centerIcons(){
  // var liSize = $('.main-menu .nav li').size();

  // var liW = $('.main-menu ul li').width();
  // var liW = $('.main-menu ul li').height();
  // $('.main-menu ul li').each( function($index) {
  //   var buttonSize = $(this).find('.button-inner').width();
  //   $(this).find('img.icon').load( function () {
  //     var iconW = (buttonSize/$(this).width()*0.52)*$(this).width();
  //     var iconH = (buttonSize/$(this).height()*0.52)*$(this).height();
  //     $(this).css({
  //       'width': iconW+'px',
  //       'height': iconH+'px',
  //     });
  //   });
  // });
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

function resize(){
  addClasses();
  centerIcons();
  resizeTitle();
  // $('.main-menu').height($('.main-menu-wrapper').height());
  var mainW = $('.main-wrapper').width();
  var mainH = $('.main-wrapper').height();
  var mainMR = parseInt($('.main-wrapper').css('margin-right'));
  var mainMT = parseInt($('.main-wrapper').css('margin-top'));
  if (mainMR == 0 && mainMT == 0){
    $('.main').css({
      'height': '100%',
      'width': '100%',
    });
  } else if (mainMR == 0){
    $('.main').css({
      'height': '100%',
      'width': '100%',
    });
  }else if(mainMT == 0) {
    $('.main').css({
    'width': (mainW - mainMR)+'px',
    'height': '100%',
  });
  }
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
    'margin': ((parentH - objectH)/2)+'px',
  });
}
