var a = 0;
var b = 1;
var imageTracker = 'i';
function pressOne(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 1;
}
function pressTwo(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 2;
}
function pressThree(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 3;
}
function pressFour(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 4;
}
function pressFive(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 5;
}
function pressSix(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 6;
}
function pressSeven(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 7;
}
function pressEight(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 8;
}
function pressNine(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 9;
}
function pressZero(){
  prevVal = document.getElementById("display").value
  document.getElementById("display").value = prevVal + 0;
}
function pressClear(){
  document.getElementById("display").value = '';
  a = 0;
}
function add(){
  a = a+parseInt(document.getElementById("display").value);
  document.getElementById("display").value = '';
}
function checkResult(){
  document.getElementById("display").value = a;
}
function subtract(){
  a = a-parseInt(document.getElementById("display").value);
  document.getElementById("display").value = '';
}
function multiply(){
  a = a*parseInt(document.getElementById("display").value);
  document.getElementById("display").value = '';
}
function playMusic(){
  var one = document.getElementById("audio");
  one.loop=true;
  if(one.paused){
    one.play();
  }
  else{
    one.pause();
  }
  one.volume=0.2;

  var image = document.getElementById("musicControl");


  if (imageTracker == "i"){
      image.src = "styles/Images/Mute_icon.svg"
      imageTracker = "I"
  }
  else {
      image.src = "styles/Images/speaker.png"
      imageTracker = "i"
  }
}
