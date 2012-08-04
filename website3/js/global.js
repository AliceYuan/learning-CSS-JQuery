$(document).ready(function(){

  //On windows load do this:
  $(".main-wrapper").delay(200).fadeIn(1200,'swing');

  centerIcons();
  dynamicMenu();
  var $default_circle_size = "30px";
  var $hover_circle_size = "40px";
  $(window).resize(function() {
    dynamicMenu();
  });



});

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
  var $liW = $(".main-menu .nav li").width();
  var $liH = $(".main-menu .nav li").height();
  console.log($liW, $liH);
  $(".main-menu ul li").each( function($index) {
    $(this).find(".circle-inner").css({

    });
    $(this).find("img.icon").load( function () {
      var $iconW = $(this).width()*0.55;
      var $iconH = $(this).height()*0.55;
      var $padH = (($liH - $iconH)/2);
      var $padW = (($liW - $iconW)/2);
      console.log($liW, $liH, $iconW, $iconH);
      $(this).css({
        "width": $iconW+"px",
        "height": $iconH+"px",
        "right" : $padW+"px",
        "top"  : $padH+"px"
      });
    });
  });

}

function dynamicMenu(){
  var $windowW = $(window).width();
  var $windowH = $(window).height();
  var $liSize = $(".main-menu .nav li").size();
  var $liW = $(".main-menu .nav li").width();
  var $liH = $(".main-menu .nav li").height();
  var $padResizeW = ($windowW - $liW*$liSize)/2;
  var $padResizeH = ($windowH - $liH*$liSize)/2.5;

  //if window height > width put menu on right side
  if ($windowH > $windowW){
    $(".main-menu-wrapper").addClass("top").removeClass("right");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": "0 "+$padResizeW+"px",
    });
  }else{//if window width > height put menu on top
    $(".main-menu-wrapper").addClass("right").removeClass("top");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": $padResizeH+"px 0 ",
    });
  }
}
