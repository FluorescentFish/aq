// Say hello to my variables!

// Code for mobile/tablet dropdown menu. 
function openNav() {
  var x = document.getElementById("nav");
}

function playPause() { 
  var myVideo = document.getElementById("video");
  if (myVideo.paused) 
    myVideo.play(); 
  else 
    myVideo.pause(); 
} 

function fullScreen() { 
    var myVideo = document.getElementById("video");
    myVideo.width = 560; 
} 

// Makes navigation interactive, constantly updating the screen to suit the user.
function updateScreen() {
  if ($(window).width() > 1200) {
    var x = document.getElementById("nav");
  }
  setTimeout(updateScreen, 100);
}

// Performs the neccecary js when HTML finishbes loading
function update() {
  updateScreen();
}
