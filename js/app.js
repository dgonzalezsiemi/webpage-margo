$( document ).ready(function(){
	/*JQuery para activar el sideNav*/
	$(".button-collapse").sideNav();
	
	/*JQuery para activar el carrusel*/
	$('.carousel.carousel-slider').carousel({fullWidth:true}).css("height", $(window).height());
})    
setInterval(function(){
  $('.carousel.carousel-slider').carousel('next');
}, 5000);

//SCROLLSPY
$(document).ready(function(){
    $('.scrollspy').scrollSpy();
  });
