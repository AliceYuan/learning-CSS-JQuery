$(document).ready(function(){

  if ($(window).height() > $(window).width()){
    $(".main-menu-wrapper").addClass("top").removeClass("right");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": "0 "+$(window).width()/10+"px",
    });
  }else{
    $(".main-menu-wrapper").addClass("right").removeClass("top");
    $(".main-menu-wrapper .main-menu .nav").css({
      "padding": $(window).height()/7+"px 0 ",
    });
  }

  var $default_circle_size = "30px";
  var $hover_circle_size = "40px";
  $(window).resize(function() {
    if ($(window).height() > $(window).width()){
      $(".main-menu-wrapper").addClass("top").removeClass("right");
      $(".main-menu-wrapper .main-menu .nav").css({
        "padding": "0 "+$(window).width()/10+"px",
      });
    }else{
      $(".main-menu-wrapper").addClass("right").removeClass("top");
      $(".main-menu-wrapper .main-menu .nav").css({
        "padding": $(window).height()/7+"px 0 ",
      });
    }
  });
});

