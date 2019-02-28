var theAnswers = { // object of answers
    "one": "a",
    "two": "c",
    "three":"d",
    "four": "b",
    "five": "c",
    "six": "d"
}

  // Timer set up:
var counter = 60; // this is how much time they will have
var unit; // seconds
var minus; // decrements counter
var totalWrong = 0;
var totalRight = 0;
var blank = 0;

function start() {
  clearInterval(unit); // so that there can't be several times
  unit = setInterval(perSecond, 1000); // this allows the counter 60 to equal 60 seconds, not another unit
}

function score() {
    $("#right").html("You got " + totalRight + " answers right");
    $("#wrong").html("You got " + totalWrong + " answers wrong"); 
}

function perSecond() {
  counter--; // decreasing counter by one per second
  $("#counter").html("You have " + counter + " seconds left"); //this is what will display the counter
  if (counter === 0) { // this is for when they run out of time
    alert("You're out of time!");
    score();
    quit(); // stops timer
    }
}

function quit() { // stops the timer from changing per second/interval
    clearInterval(unit);
  }
  start(); // starts timer

  // Grading Setup:
  function right(){ //what will happen when answer is right
    //console.log("Correct"); //FOR TESTING...WILL FIX
    totalRight++;
    console.log("Right: ", totalRight);
  }

  function wrong(){ // what will happen when answer is wrong
    totalWrong++;
    console.log("Wrong", totalWrong);
  }

  
  // Submit Button Setup:
  $("form").on("submit", function(submit){ // what happens when you hit submit
    submit.preventDefault(); // allows answers to show up
    //score();
    quit(); // stops counter after you hit submit

    $question = $(".question"); // this sets the variable question to the html classes called "question"
    $question.each(function(){ // this is applying the function to each of the questions

    var solution = $(this).find("input:checked"); // checks this particular radio button
   

          key = solution.attr("name"), // sends to answer key to check
          val = solution.val(); // checks value to see if it matches answer key
          console.log("This is the user's input:", val);


        console.log(key); 
        console.log(val);
        
      if (theAnswers[key] === val || counter === 0){
        //wrong($(this).find("correctAnswer"));
        //console.log("Wrong");
        right();
      }
      
      else if (theAnswers[key] !== val || counter === 0){
        //wrong($(this).find("correctAnswer"));
        //console.log("Wrong");
        wrong();
      }
      else {
        //right(solution.parent()); // lables correct answers as right
        wrong();
      }//end else stmnt
    }//end for .each callback function
    
    );//end for .each loop

    console.log("========== right:",totalRight,"========== ");
    console.log("========== wrong:",totalWrong,"========== ");
    score();
});