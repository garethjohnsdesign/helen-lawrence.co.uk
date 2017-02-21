$(document).foundation();

$('.carousel').flickity({
  pageDots: false,
  cellAlign: 'center',
  autoPlay: true,
  draggable: true,
  arrowShape: 'M100,46.875H11.9688l17.4688-17.4688L25,25L0,50l25,25l4.4062-4.4062L11.9688,53.125H100V46.875z'
});

if($('.carousel').length){
var $carousel = $('.carousel').flickity();
var $carouselStatus = $('.carousel-status');
var flkty = $carousel.data('flickity');

function updateStatus() {
  var cellNumber = flkty.selectedIndex + 1;
  $carouselStatus.text( cellNumber + '/' + flkty.slides.length );
}
updateStatus();
$carousel.on( 'select.flickity', updateStatus );
}


/*
$(function(){
'use strict';
var $page = $('#main'),
  options = {
    debug: true,
    prefetch: true,
    cacheLength: 2,
    onStart: {
      duration: 250, // Duration of our animation
      render: function ($container) {
        // Add your CSS animation reversing class
        $container.addClass('is-exiting');
        // Restart your animation
        smoothState.restartCSSAnimations();
      }
    },
    onReady: {
      duration: 0,
      render: function ($container, $newContent) {
        // Remove your CSS animation reversing class
        $container.removeClass('is-exiting');
        // Inject the new content
        $container.html($newContent);
        // $container.onPageLoad();
      }
    },
    onAfter: function($container) {
        $(document).foundation();
// This is where you initialize foundation
        $container.onPageLoad(); // all other scripts inside this function          
    }
  },
  smoothState = $page.smoothState(options).data('smoothState');  

});
*/