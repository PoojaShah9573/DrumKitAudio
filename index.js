//alert("hello");


// DETECTING BUTTON PRESS

var numberOfDrum = document.querySelectorAll('.drum').length;

for (var i = 0; i < numberOfDrum; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
// What to do whwn click detecte

 buttonAnimation(buttonInnerHTML);

  });
}

// DETECTING KEYBOARD PRESS

document.addEventListener("keydown",function(event)
{
  makeSound(event.key);
  buttonAnimation(event.key);

});




function makeSound(key)

{
  switch (key) {

    case "w":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "a":
      var ks = new Audio("sounds/kick-bass.mp3");
      ks.play();
      break;

    case "s":
      var t2 = new Audio("sounds/tom-2.mp3");
      t2.play();
      break;

    case "d":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "j":
      var t3 = new Audio("sounds/tom-3.mp3");
      t3.play();
      break;

    case "k":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "l":
      var t4 = new Audio("sounds/tom-4.mp3");
      t4.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }

}

 function buttonAnimation(currentKey){
   var activeButton=document.querySelector("."+ currentKey)
   activeButton.classList.add("pressed");
 setTimeout(function(){
   activeButton.classList.remove("pressed")
 },150);


}



//var audio = new Audio("sounds/tom-1.mp3");
//audio.play();
