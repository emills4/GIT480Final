/* Author Emily Reger 2023 - Final Project
    DON'T FORGET TO OBFUSCATE THIS FILE BEFORE UPLOADING ONLINE FOR THE PUBLIC

*/

"use strict";



//jQuery Widget/Plugin
$("#accordion").accordion({
	collapsible:true,
	heightStyle: "content"
});




//Carousel https://plugins.jquery.com/slick/
$('.slick-carousel').slick({
	infinite: true,
	slidesToShow: 1, 
	slidesToScroll: 1, 
	autoplay: true
  });


