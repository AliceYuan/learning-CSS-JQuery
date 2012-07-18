$(document).ready(function(){
  function statusBarCompletion() {
    $('.dropDown li').each(function(i) {
      console.log(this);
      var $completionObj = $(this).find('.status-bar .completion');//find status-bar completion class
      var $className = $($completionObj).attr('class'); //get class name
      var $completionPer = $className.replace('completion ','');//remove completion string from class name
      $($completionObj).css('width', $completionPer+'%'); //style width to be % found from class name
    });

  }
  statusBarCompletion();
  $('.dropDownIcon').click(function() {
    if ($(this).hasClass('up')){
      $(this).removeClass("up");
      $(this).addClass("down");
      $('.dropDown li.first').removeClass('closed');//remove closed class before slide down
      $('.dropDown li.drop').slideDown(400,'swing',function(){
        $(this).removeClass("hidden");
      });
    }else{
      $(this).addClass("up");
      $(this).removeClass("down");
      $('.dropDown li.drop').slideUp(400,'swing',function(){
        $(this).addClass("hidden");
        $('.dropDown li.first').addClass('closed');//add closed class after slide up
      });
    }
  });


});
