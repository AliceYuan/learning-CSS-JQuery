$(document).ready(function(){

/*
  $(".circle").mouseover(function(){
    $('.circle').transition({ scale: 1.2 });
  }.mouseout(function(){
    $('.circle').transition({ scale: 1 });
  }
  */

  var $default_circle_size = "30px";
  var $hover_circle_size = "40px";

/*
  $(".nav li").mouseover(function(){
    $(this).find("p").text("it works!");
  });
  */
  $(".main-menu .nav li").mouseover(function(){
    $(this).find(".circle-inner").(function(){
      if (!$(this).hasClass("active")) {
        $(this).stop().animate({
          "width": $hover_circle_size,
          "height": $hover_circle_size,
          "margin-top":"-5px",
          },300,'swing');
      }
    });
  })mouseout.(function(){
      $(this).addClass("hover");
      if (!$(this).hasClass("active")) {
        $(this).stop().animate({
          "width": $default_circle_size,
          "height": $default_circle_size,
          "margin-top":"0px",
          },250,'swing');

      }
    });
 });

});

