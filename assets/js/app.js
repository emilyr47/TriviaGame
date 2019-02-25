var counterP = 60; // this is how much time they will have
var unit; // seconds
var minus;

$("#start").on("click", start);


function start() {
  clearInterval(unit); // so that there can't be several times
  unit = setInterval(minus, 1000); // this allows the counter 60 to equal 60 seconds, not another unit
}


function perSecond() {
  counterP--; // decreasing counter by one per second

  $("#counter").html("You have " + counterP + " seconds left"); //this is what will display the counter

  if (counterP === 0) { // this is for when they run out of time
    quit();

    alert("Your time is up!  Let's see how you did..."); // this will show up once they run out of time.  After this appears, it will show them the answers correct, wrong, and answered
  }
}

function quit() { // happens after time runs out
  clearInterval(unit);
}

start(); // restarts game