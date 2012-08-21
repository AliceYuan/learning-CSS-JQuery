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
  $('h1, h2, .social.links').each( function(index) {
     while( $(this).outerWidth() > $('body .main-wrapper .main').outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) - 2) + 'px');
     }
     while( $(this).outerWidth() < $('body .main-wrapper .main').outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) + 2) + 'px');
     }
  });
}

// Resizes Page Title
function resizeTitle(){
  var $title = $('.main .page-title');
  var titleW = $title.width();
  var $slogan = $('.main .slogan');
  var sloganW = $slogan.width();
  var sloganMargin = parseInt($('.main .slogan p').css('margin-right'));
  $('.main .slogan p').width(((sloganW - sloganMargin)/2)*0.98);

  // equalHeightWidth($title);
}

//centers Main div inside wrapper. Accounts for menu on left side
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
}

function resize(){
  centerMain();
  resizeTitle();
  blogPage();
  frontPage();

}


//javascript functions for blog page
function blogPage(){
  if ($('body').hasClass('blog')){
    centerHorizontal($('.filters .categories'), $('.filters'));
  }
}

//functions specifically for front page
function frontPage(){
  if ($('body').hasClass('front')){
    equalHeight($('.recent-posts ul li'));
  }
}


// =============================================================
// Reuseable Functions
// ============================================================


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

//function centers the object horizontally within the parent object
function centerHorizontal($object, $parentObject){
  var parentW = $parentObject.width();
  var objectW = $object.width();
  $object.css({
    'margin-left': ((parentW - objectW)/2)+'px',
  });
}

//function makes all objects the same height
function equalHeight($object){
  var maxHeight = 0;
  var index;
  $object.removeAttr('style');
  $object.each(function(index){
    var currentHeight = $(this).height();
    if (currentHeight > maxHeight){
      maxHeight = currentHeight;
    }
  });
  $object.each(function(index){
    $(this).height(maxHeight);
  });
}
