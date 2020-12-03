"use strict";

// SCROLLING FUNCTIONS


// Display the scrollUpbtn after the user has scrolled
window.addEventListener('scroll', function () {
  $('#scrollUpbtn').css("display", "block");
});

// Scroll to the top; activated when the scrollUpbtn is clicked
function toTop() {
  $('html, body').animate({scrollTop: 0});
}

function toMain() {
  var offset = $('.main-nav').offset();
    $('html, body').animate({scrollTop: offset.top}, 1000);
}






// MENU RESPONSIVITY

// Display the main navigation links when clicking the hamburger menu
var menu = 0; //0 = off

function showMenu() {
  if (menu===0){
    $('.main-nav').css("display", "block");
    $('.main-nav a').css("display", "block");
    menu = 1;
  } else if (menu===1){
    $('.main-nav').css("display", "none");
    menu = 0;
  }
}

// Adjust menu link display if the browser is resized
$(window).resize(function() {
  if ($(window).width() >= 480) {
    $('.main-nav').css("display", "flex");
    $('.main-nav a').css("display", "inline-block");
    menu = 0;
  } else if($(window).width() <= 480) {
    $('.main-nav').css("display", "none");
    $('.main-nav a').css("display", "block");
    menu = 0;
  }
});




// IMAGE GALLERIES

// Variable to detect image/button clicks
var currentImg = 0;


// Adjust the gallery image if the left/right arrows have been clicked
function arrowClick(arrow, string){
  if(arrow==="l"){
    if(currentImg === 0){
      currentImg = 2;
      changeStyleGuideGallery(string);
    } else {
      currentImg -= 1;
      changeStyleGuideGallery(string);
    }
  } else if(arrow==="r"){
    if(currentImg === 2){
      currentImg = 0;
      changeStyleGuideGallery(string);
    } else {
      currentImg += 1;
      changeStyleGuideGallery(string);
    }
  }
}

// Change the gallery image upon clicking one of figcaption buttons
function changeGallery(string, g) {
  currentImg = g;
  changeStyleGuideGallery(string);
}


// Main function for changing the galleries
function changeStyleGuideGallery(string){
  var gallery = '.gallery';
  var img1, img2, img3 = '0';

  if(string==="styleguide1"){
    gallery = '#img-switch .gallery';
    img1 = 'img/filler-200.png';
    img2 = 'img/filler-200-red.png';
  } else if(string==="styleguide"){
    gallery = '#img-gallery .gallery';
    img1 = 'img/filler-200.png';
    img2 = 'img/filler-200-red.png';
    img3 = 'img/filler-200-blue.png';
  } else if(string==="coco1"){
    gallery = '#ideation .gallery';
    img1 = 'img/cocoSK1.png';
    img2 = 'img/cocoSK2.png';
    img3 = 'img/cocoSK3.png';
  } else if(string==="coco2"){
    gallery = '#art-direction .gallery';
    img1 = 'img/cocoAD1.png';
    img2 = 'img/cocoAD2.png';
  } else if(string==="nt"){
    img1 = 'img/ntmindmap1.png';
    img2 = 'img/ntmindmap2.png';
  } else if(string==="abt"){
    img1 = 'img/moonpattern.png';
    img2 = 'img/sick.png';
  }

  if(currentImg===0){
  $(gallery).attr('src', img1);
    if(string==="abt"){
      $('#cap').text('(1) "moons" - illustration - 2015');
    }
  } else if(currentImg===1){
    $(gallery).attr('src', img2);
    if(string==="abt"){
      $('#cap').text('(2) "sick" - illustration - 2015');
    }
  } else if(currentImg===2){
    $(gallery).attr('src', img3);
  }

  gallerySwitch(string);
}


// Changing the figcaption buttons for image galleries
function gallerySwitch(string){
  if(string==="coco2"){
    if(currentImg === 0){
      $('#ADimg1').removeClass('inactive');
      $('#ADimg1').addClass('active');
      $('#ADimg2').removeClass('active');
      $('#ADimg2').addClass('inactive');
    } else if(currentImg === 1){
      $('#ADimg1').removeClass('active');
      $('#ADimg1').addClass('inactive');
      $('#ADimg2').removeClass('inactive');
      $('#ADimg2').addClass('active');
    }
  } else if(string==="styleguide1"){
    if(currentImg === 0){
      $('#imgA').removeClass('inactive');
      $('#imgA').addClass('active');
      $('#imgB').removeClass('active');
      $('#imgB').addClass('inactive');
    } else if(currentImg === 1){
      $('#imgA').removeClass('active');
      $('#imgA').addClass('inactive');
      $('#imgB').removeClass('inactive');
      $('#imgB').addClass('active');
    }
  } else {
  if(currentImg === 0){
    $('#img1').removeClass('inactive');
    $('#img1').addClass('active');
    $('#img2').removeClass('active');
    $('#img2').addClass('inactive');
    $('#img3').removeClass('active');
    $('#img3').addClass('inactive');
  } else if(currentImg === 1){
    $('#img1').removeClass('active');
    $('#img1').addClass('inactive');
    $('#img2').removeClass('inactive');
    $('#img2').addClass('active');
    $('#img3').removeClass('active');
    $('#img3').addClass('inactive');
  } else if (currentImg === 2) {
    $('#img1').removeClass('active');
    $('#img1').addClass('inactive');
    $('#img2').removeClass('active');
    $('#img2').addClass('inactive');
    $('#img3').removeClass('inactive');
    $('#img3').addClass('active');
    }
  }
}

jQuery(document).ready();
