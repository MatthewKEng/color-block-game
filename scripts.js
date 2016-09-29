
$(document).ready(function() {


//this is the function that will generate which color should be clicked on//
function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);
}

var number = randomNumber(1,5);

console.log(number);

if (number=1) {
$("p").append("RED");
}else if (number=2) {
$("p").append("ORANGE");
}else if (number=3) {
$("p").append("YELLOW");
}else if (number=4) {
$("p").append("GREEN");
}else if (number=5) {
$("p").append("BLUE");
}

});



//event handler for clicking on a div

//$('div').click(function() {
//if (chosen div = #red && number != 1) || (chosen div = #orange && nmumber != 2) || (chosen div = #yellow && number != 3) || (chosen div = green && number != 4) || (chosen div = blue && number != 5){
// append tag with "Wrong. No money for you..."
//}else{
//append tag with "Congratulations! You've just won $50,000!!! (No, not really. Sorry. But you do know your colors, so there's that to be proud of...)"
//}
//}

//}
//}
//}
//}
