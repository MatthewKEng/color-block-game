var number = randomNumber(1,5);


$(function() {
  //listenClick();
  randomNumber();
  //listenClick();
  console.log(number);
  assignColor();
  listenClick();
});

//this is the function that will generate which color should be clicked on//
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}


function assignColor() {
    if (number===1) {
    $("span").text("RED");
  }else if (number===2) {
    $("span").text("ORANGE");
  }else if (number===3) {
    $("span").text("YELLOW");
  }else if (number===4) {
    $("span").text("GREEN");
    }else {
    $("span").text("BLUE");

  }
}

function listenClick() {

  $(".box").on('click', function() {
    var clickedDiv = $(this);
    //var clickedColor = clickedDiv.(id);
  if ((clickedDiv === $('#red') && number != 1) || (clickedDiv === $('#orange') && nmumber != 2) || (clickedDiv === $('#yellow') && number != 3) || (clickedDiv === $('#green') && number != 4) || (clickedDiv === $('#blue') && number != 5)){
  $("#answer").text("Wrong. No money for you...");
  }else{
  $("#answer").text("Congratulations! You've just won $50,000!!! No, not really. Sorry. But you do know your colors, so there's that to be proud of...");

}
});
}














//event handler for clicking on a div
