$(function(){
      $('#slides').slides({
        // preload: true,
        // preloadImage: 'img/loading.gif',
        play: 5000,
        pause: 5000,
        hoverPause: true,
        animationStart: function(current){
          $('.slide_info_container').animate({
            bottom:-35
          },100);
          if (window.console && console.log) {
            // example return of current slide number
            console.log('animationStart on slide: ', current);
          };
        },
        animationComplete: function(current){
          $('.slide_info_container').animate({
            bottom:0
          },200);
          if (window.console && console.log) {
            // example return of current slide number
            console.log('animationComplete on slide: ', current);
            console.log('animationComplete on slide: ', current);
          };
        },
      });
});

