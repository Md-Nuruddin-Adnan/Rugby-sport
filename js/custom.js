$(function(){

  "use strict";
    
  var $nav = $('#header');
  var $dis = $nav.offset().top;
  var $htmlbody = $('html,body');

   $(window).scroll(function () {
      var $scrolling = $(this).scrollTop();
     if ($scrolling >= 500) {
          $nav.addClass('position-fixed');
      } else {
          $nav.removeClass('position-fixed');
      }
  })

  //smooth scroll 
  $('.navbar-nav .nav-item .nav-link').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
          $htmlbody.animate({
              scrollTop: target.offset().top - 65
          }, 1000);
          return false;
      }
    }
  });

// gallery filtar tab

$(document).on('click', '.navbar-light .navbar-nav .nav-link', function(){
  $(this).addClass('active').siblings().removeClass('active')
})
  
    
 
}); 

