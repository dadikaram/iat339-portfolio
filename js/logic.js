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




jQuery(document).ready();
