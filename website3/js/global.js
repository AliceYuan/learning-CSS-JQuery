$(document).ready(function(){
  var default_button_size = "30px";
  var hover_button_size = "40px";
  centerIcons();
  addClasses();
  $(window).resize(function() {
    addClasses();
    centerIcons();
  });
  windowLoad();
});

function addClasses(){
  var windowW = $(window).width();
  var windowH = $(window).height();
  //add portrait / landscape class
  if (windowH > windowW){
    $("body").addClass("portrait").removeClass("landscape");
  }else{
    $("body").addClass("landscape").removeClass("portrait");
  }

  //remove previous screen size classes
  $("body").removeClass (function (index, css) {
      return (css.match (/\bscreen-width-\S+/g) || []).join(' ');
  });
  $("body").removeClass (function (index, css) {
      return (css.match (/\bscreen-height-\S+/g) || []).join(' ');
  });

  //add width of screen class
  if (windowW > 1024){
    $("body").addClass("screen-width-large");
  }else if (windowW > 768){
    $("body").addClass("screen-width-medium");
  }else if (windowW > 480){
    $("body").addClass("screen-width-small");
  }else{
    $("body").addClass("screen-width-xsmall");
  }

  //add height of screen class
  if (windowH > 1024){
    $("body").addClass("screen-height-large");
  }else if (windowH > 768){
    $("body").addClass("screen-height-medium");
  }else if (windowH > 480){
    $("body").addClass("screen-height-small");
  }else{
    $("body").addClass("screen-height-xsmall");
  }
}

function windowLoad(){
  $(window).load( function() {
    centerIcons();
  });
}

function centerIcons(){
  var liSize = $(".main-menu .nav li").size();

  var liW = $(".main-menu ul li").width();
  var liW = $(".main-menu ul li").height();
  $(".main-menu ul li").each( function($index) {
    var buttonSize = $(this).find(".button-inner").width();
    console.log(buttonSize);

    $(this).find("img.icon").load( function () {
      var iconW = (buttonSize/$(this).width()*0.52)*$(this).width();
      var iconH = (buttonSize/$(this).height()*0.52)*$(this).height();
      console.log(buttonSize);
      var padH = ((buttonSize+20 - iconH)/2);
      var padW = ((buttonSize+30 - iconW)/2);
      $(this).css({
        "width": iconW+"px",
        "height": iconH+"px",
        "margin": padH+"px "+padW+"px",
      });
    });
  });

}


function resizeText(){
  $("h1, h2, .social.links").each( function($index) {
     while( $(this).outerWidth() > $("body .main-wrapper .main").outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) - 2) + "px");
     }
     while( $(this).outerWidth() < $("body .main-wrapper .main").outerWidth()*0.95) {
      $(this).css( 'font-size', (parseInt($(this).css('font-size')) + 2) + "px");
     }
  });

}
