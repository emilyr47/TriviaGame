//answers for grading:
console.log("Answer for #1 is: Over 1,000");
console.log("Answer for #2 is: Quakers");
console.log("Answer for #3 is: Mint Chip");
console.log("Answer for #4 is: 1904");
console.log("Answer for #5 is: The United States");
console.log("Answer for #6 is: Chocolate");

var theAnswers = { // array of answers
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

function start() {
  clearInterval(unit); // so that there can't be several times
  unit = setInterval(perSecond, 1000); // this allows the counter 60 to equal 60 seconds, not another unit
}

function perSecond() {
  counter--; // decreasing counter by one per second
  $("#counter").html("You have " + counter + " seconds left"); //this is what will display the counter
  if (counter === 0) { // this is for when they run out of time
    right(); // corrects answers
    wrong();
    alert("Your time is up!  Let's see how you did..."); // this will show up once they run out of time.  After this appears, it will show them the answers correct, wrong, and answered
    quit(); // stops timer
    }
}

function quit() { // stops the timer from changing per second/interval
    clearInterval(unit);
  }
  start(); // starts timer

  // Grading Setup:
  function right(){ //what will happen when answer is right
    console.log("Correct"); //FOR TESTING...WILL FIX
  }

  function wrong(){ // what will happen when answer is wrong
    console.log("Incorrect"); //FOR TESTING...WILL FIX
  }
  
  // Submit Button Setup:
  $("form").on("submit", function(submit){ // what happens when you hit submit
    submit.preventDefault(); // allows answers to show up
    quit(); // stops counter after you hit submit

    $question = $(".question"); // this sets the variable question to the html classes called "question"
    $question.each(function(){ // this is applying the function to each of the questions
      var solution = $(this).find("input:checked"), // checks this particular radio button
          key = solution.attr("name"), // sends to answer key to check
          val = solution.attr("value"); // checks value to see if it matches answer key
  
      if(solution.length === 0 || counter === 0){ // if the solution arry is === 0 
        wrong($(this).find("correctAnswer")); // labels the answer as wrong and then finds correct answer
      } 
      else if (theAnswers[key] !== val || counter === 0){
        wrong($(this).find("correctAnswer"));
      } 
      else {
        right(solution.parent()); // lables correct answers as right
      }
    });
});