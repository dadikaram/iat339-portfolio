// use strict

var currentImg = 0;

function arrowClick(arrow, string){
  if(arrow=="l"){
    // console.log('left arrow click')
    if(currentImg == 0){
      currentImg = 2;
      changeStyleGuideGallery(string);
    } else {
      currentImg -= 1;
      changeStyleGuideGallery(string);
    }
  } else if(arrow=="r"){
    if(currentImg == 2){
      currentImg = 0;
      changeStyleGuideGallery(string);
    } else {
      currentImg += 1;
      changeStyleGuideGallery(string);
    }
  }
}

function changeGallery(string, g) {
  currentImg = g;
  changeStyleGuideGallery(string);
}

function changeStyleGuideGallery(string){
  var gallery = '.gallery';

  if(string=="styleguide"){
    img1 = 'img/filler-200.png';
    img2 = 'img/filler-200-red.png';
    img3 = 'img/filler-200-blue.png';
  } else if(string=="coco1"){
    gallery = '#ideation .gallery';
    img1 = 'img/cocoSK1.png';
    img2 = 'img/cocoSK2.png';
    img3 = 'img/cocoSK3.png';
  } else if(string=="coco2"){
    gallery = '#art-direction .gallery';
    img1 = 'img/cocoAD1.png';
    img2 = 'img/cocoAD2.png';
  } else if(string=="nt"){
    img1 = 'img/ntmindmap1.png';
    img2 = 'img/ntmindmap2.png';
  } else if(string=="abt"){
    img1 = 'img/moonpattern.png';
    img2 = 'img/sick.png';
  }

  if(currentImg==0){
  $(gallery).attr('src', img1);
    if(string=="abt"){
      $('#cap').text('(1) "moons" - illustration - 2015');
    }
  } else if(currentImg==1){
    $(gallery).attr('src', img2);
    if(string=="abt"){
      $('#cap').text('(2) "sick" - illustration - 2015');
    }
  } else if(currentImg==2){
    $(gallery).attr('src', img3);
  }

  gallerySwitch(string);
}

function gallerySwitch(string){
  if(string=="coco2"){
    if(currentImg == 0){
      $('#ADimg1').removeClass('inactive');
      $('#ADimg1').addClass('active');
      $('#ADimg2').removeClass('active');
      $('#ADimg2').addClass('inactive');
    } else if(currentImg == 1){
      $('#ADimg1').removeClass('active');
      $('#ADimg1').addClass('inactive');
      $('#ADimg2').removeClass('inactive');
      $('#ADimg2').addClass('active');
    }
  } else {
  if(currentImg == 0){
    $('#img1').removeClass('inactive');
    $('#img1').addClass('active');
    $('#img2').removeClass('active');
    $('#img2').addClass('inactive');
    $('#img3').removeClass('active');
    $('#img3').addClass('inactive');
  } else if(currentImg == 1){
    $('#img1').removeClass('active');
    $('#img1').addClass('inactive');
    $('#img2').removeClass('inactive');
    $('#img2').addClass('active');
    $('#img3').removeClass('active');
    $('#img3').addClass('inactive');
  } else if (currentImg == 2) {
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
