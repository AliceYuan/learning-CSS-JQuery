$(window).bind("load",function(){
});

$(document).ready(function(){


  centerIcons();
  var $default_circle_size = "30px";
  var $hover_circle_size = "40px";
  dynamicMenu();
  resizeText();
  $(window).resize(function() {
    dynamicMenu();
    resizeText();
  });
  windowLoad();



});

function windowLoad(){
  $(window).load( function() {
    dynamicMenu();
    resizeText();
  });
}

function centerIcons(){
  // var $circleW = $(".main-menu .circle-outer").width();
  // var $circleH = $(".main-menu .circle-outer").height();
  // var $circleH = $circleW
  // var $iconW = $(".main-menu li img.icon").width();
  // var $iconH = $(".main-menu li img.icon").height();
  // var $iconPadH = ($circleH - $iconH)/2;
  // var $iconPadW = ($circleW - $iconW)/2;
  // var $liW = $(".main-menu li").width();
  // var $liH = $(".main-menu li").height();

  var $liSize = $(".main-menu .nav li").size();

  $(".main-menu ul li").each( function($index) {
    var $liW = $(this).width();
    var $liH = $(this).height();
    $(this).find("img.icon").load( function () {
      var $iconW = $(this).width()*0.55;
      var $iconH = $(this).height()*0.55;
      var $padH = ((50 - $iconH)/2);
      var $padW = ((60 - $iconW)/2);
      $(this).css({
        "width": $iconW+"px",
        "height": $iconH+"px",
        "margin": $padH+"px "+$padW+"px",
      });
    });
  });

}

function dynamicMenu(){
  var $windowW = $(window).width();
  var $windowH = $(window).height();
  var $liSize = $(".main-menu .nav li").size();
  var $liW = $(".main-menu .nav li").width();
  var $liH =  $(".main-menu .nav li").height();
  var $padResizeW = ($windowW - $liW*$liSize)/2;
  var $padResizeH = ($windowH - $liH*$liSize)/2.5;

  //if window height > width put menu on right side
  //on windows load
  if ($windowH > $windowW){
    $(".main-menu-wrapper").addClass("top").removeClass("right");
    $("body").addClass("top").removeClass("right");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": "0 "+$padResizeW+"px",
    });
  }else{//if window width > height put menu on top
    $(".main-menu-wrapper").addClass("right").removeClass("top");
    $("body").addClass("top").removeClass("right");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": $padResizeH+"px 0 ",
    });
  }
  $(window).load(function() {
  });
}


function resizeText(){
  $("h1, h2").each( function($index) {
     while( $(this).width() > $(this).width()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) - 2) + "px");
     }
     while( $(this).width() < $(this).parent().parent().width()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) + 2) + "px");
     }
  });

}

function resize () {

}
