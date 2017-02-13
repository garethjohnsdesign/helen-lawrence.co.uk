$(document).foundation();


$('.carousel').flickity({
  // options
//   imagesLoaded: true,
  pageDots: false,
  cellAlign: 'center',
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