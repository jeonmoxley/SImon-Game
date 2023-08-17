var userClicked = [];
var gamePattern = [];
var buttonColor = new Array("red", "blue", "green", "yellow");
var ind = 0;

var level = 0;
var curind = 0;
var start = false;
document.addEventListener("keypress", function (event) {
     if (!start) {
          $("#level-title").text("level " + level);
          nextSequence();
          start = true;
     }
     console.log(event);
});

$(".btn").click(function () {
     var gg = $(this).attr("id");
     userClicked.push(gg);
     playSound(gg);
     animatePress(gg);
     checkans(gg);
});

function checkans(got) {
     if (got === gamePattern[curind]) {
          curind++;
          console.log(curind);
          if (curind == gamePattern.length) {
               curind = 0;
               setTimeout(function () {
                    nextSequence();
               }, 1000);
          }
     } else {
          wrong();
     }
}

function nextSequence() {
     console.log(gamePattern);
     level++;

     $("#level-title").text("level " + level);
     var randomNumber = Math.floor(Math.random() * 4);
     var randomChosenColor = buttonColor[randomNumber];
     gamePattern.push(randomChosenColor);
     var currColor = $("#" + randomChosenColor);
     playSound(randomChosenColor);
     currColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
}

function animatePress(key) {
     console.log(key);
     var ff = document.querySelector("." + key);
     ff.classList.add("pressed");
     setTimeout(function () {
          ff.classList.remove("pressed");
     }, 100);
}

function playSound(key) {
     var currColor = $("#" + key);
     currColor.fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

     switch (key) {
          case "red":
               var hh = new Audio("sounds/red.mp3");
               hh.play();
               break;

          case "blue":
               var hh = new Audio("sounds/blue.mp3");
               hh.play();
               break;

          case "green":
               var hh = new Audio("sounds/green.mp3");
               hh.play();
               break;

          case "yellow":
               var hh = new Audio("sounds/yellow.mp3");
               hh.play();
               break;
          default:
               alert("nothing ");
     }
}

function wrong() {
     var cls = document.querySelector("body");
     cls.classList.add("game-over");
     setInterval(function () {
          cls.classList.remove("game-over");
     }, 2000);
     $("#level-title").text("Game Over, Press Any Key to Restart");
     restart();
}
function restart() {
     start = false;
     level = 0;
     gamePattern = [];
     curind = 0;
}
