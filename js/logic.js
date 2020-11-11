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




jQuery(document).ready();
