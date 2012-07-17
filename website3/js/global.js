$(document).ready(function(){

/*
  $(".circle").mouseover(function(){
    $('.circle').transition({ scale: 1.2 });
  }.mouseout(function(){
    $('.circle').transition({ scale: 1 });
  }
  */


  $(".circle-inner").mouseover(function(){
    if (!$(this).hasClass("active")) {
      $(this).stop().animate({
        "width": "26px",
        "height":"26px",
        "margin-top":"-3px",
        },300,'swing');
      }
    }).mouseout(function(){
      if (!$(this).hasClass("active")) {
        $(this).stop().animate({
          "width": "20px",
          "height": "20px",
          "margin-top":"0px",
          },250,'swing');
      }
    });
 });

