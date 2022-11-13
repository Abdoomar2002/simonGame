var level=0;
var buttonColours=["red","blue","green","yellow"];
var userClickedPattern=[];
var gamePattern=[];
var check=0;
//var randomChosenColour=buttonColours[newSequence()];
function newSequence()
{
  var randomNumber=Math.floor(Math.random()*4);
  level++;
  $("h1").html("Level "+level);

  var newColour=buttonColours[randomNumber];
  $("#"+newColour).fadeOut(100).fadeIn(100);
  gamePattern.push(newColour);
  console.log(gamePattern);
}
/*gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).click(function(){
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  var sound=new Audio("sounds/"+randomChosenColour+".mp3");
  sound.play();
});*/
$(".btn").click(function()
{
//  newSequence();
// $(this).fadeOut(100).fadeIn(100);
var userChosenColour=$(this).attr("id");
if(userChosenColour===gamePattern[check]&&check<gamePattern.length)
{
  if(check+1===gamePattern.length)
  {check=0;
    newSequence();
  }else check++;
 playsound(userChosenColour);
 animatePress(userChosenColour);
}else if(userChosenColour!==gamePattern[check])
{
  var wrong= new Audio("sounds/wrong.mp3");
  wrong.play();
  $("body").addClass("game-over");
  setTimeout(function(){
    $("body").removeClass("game-over");

  },100);


  $("h1").html("Game Over, Press Any Key To Restart");
  gamePattern=[];
  count=0;
  level=0;
  check=0;
}
});

function playsound(buttonClicked)
{
  var sound2=new Audio("sounds/"+buttonClicked+".mp3");
  sound2.play();
}
function animatePress(currentColor)
{
  $("#"+currentColor).addClass("pressed");
  setTimeout(function(){
    $("#"+currentColor).removeClass("pressed");
  },100);
}
var count=0;
$(document).keypress(function(){
  if(count===0)
  {count++;
    newSequence();
  }
});
