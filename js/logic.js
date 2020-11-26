// use strict

function switchImage(string){
  if(string=="one"){
    $('.gallery').attr('src','img/filler-200.png');
    console.log("img1");
  } else if(string=="two"){
    $('.gallery').attr('src','img/filler-200-red.png');
    console.log("img2");
  } else if(string=="three"){
    $('.gallery').attr('src','img/filler-200-blue.png');
    console.log("img3");
  }
}

function artDirectionSwitch(string){
  if(string=="one"){
    $('.gallery').attr('src','img/343_sk4.png');
    console.log("img1");
  } else if(string=="two"){
    $('.gallery').attr('src','img/343_sk5.png');
    console.log("img2");
  }
  // else if(string=="three"){
  //   $('.gallery').attr('src','img/filler-200-blue.png');
  //   console.log("img3");
  // }
}

function ntIdeationSwitch(string){
  if(string=="one"){
    $('.gallery').attr('src','img/nt-mindmap1.png');
    console.log("img1");
  } else if(string=="two"){
    $('.gallery').attr('src','img/nt-mindmap2.png');
    console.log("img2");
  }
}

var currentImg = 0;

function leftArrowClick(){
  if(currentImg == 0){
    currentImg = 2;
  } else {
    currentImg -= 1;
  }
}

function rightArrowClick(){
  if(currentImg == 2){
    currentImg = 0;
  } else {
    currentImg += 1;
  }
}

function changeGallery(g) {
  currentImg = g;
}

function changeStyleGuideGallery(){
  if(currentImg==0){
  $('.gallery').attr('src','img/filler-200.png');
  } else if(currentImg==1){
    $('.gallery').attr('src','img/filler-200-red.png');
  } else if(currentImg==2){
    $('.gallery').attr('src','img/filler-200-blue.png');
  }
}

function gallerySwitch(){
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




jQuery(document).ready();
