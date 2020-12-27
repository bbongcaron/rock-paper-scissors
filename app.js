const userScore = 0;
const computerScore = 0;
// DOM variables
/*
    getElementById() - Get a pointer to an HTML element (p, div, table, etc.)
    @param String containing name of id
    @returns Element object representing an HTML element
*/
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
/*
    querySelector() - Get the first element in the document with class="class_name"
    @param String containing name of class/tag to be searched for
    @returns NodeList object (array-like list in terms of indexing) containing
             all instances of the @param class.tag
*/
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")
// querySelector & getElementbyId return op
/*
    Caching the DOM (Element/NodeList- storing the above ID/Classes so we can reference 
    them later If we didn't store these pointers to the ID's/Classes, we would have to run
    getElementByID/querySelector every single time we need to fetch/change the 
    data in the HTML file => waste of time => just store pointer once
*/

/*
    addEventListener - sets up a function that will be called whenever the specified event
                       is delivered to the target (target.addEventListener())
    @param Case-sensitive string representing the *event type* to listen for
    @param Name of function to be called OR just build the function in the parameters, as
           done below
*/
rock_div.addEventListener('click', function() {
    console.log("hey you clicked on rock")
})

paper_div.addEventListener('click', function() {
    console.log("hey you clicked on paper")
})

scissors_div.addEventListener('click', function() {
    console.log("hey you clicked on scissors")
})