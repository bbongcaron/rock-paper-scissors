const userScore = 0;
const computerScore = 0;
// DOM variables
/*
    getElementById() - Get a pointer to an HTML element (p, div, table, etc.)
    @param String containing name of id
    @returns Element object representing an HTML element
*/
/*
    querySelector() - Get the first element in the document with class="class_name"
    @param String containing name of class/tag to be searched for
    @returns NodeList object (array-like list in terms of indexing) containing
             all instances of the @param class.tag
*/
/*
    Caching the DOM (Element/NodeList) - storing the above ID/Classes so we can reference 
    them later If we didn't store these pointers to the ID's/Classes, we would have to run
    getElementByID/querySelector every single time we need to fetch/change the 
    data in the HTML file => waste of time => just store pointer once
*/
// const b/c the following can be treated like pointers to specific tags:
// those pointers do not change
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board")
const result_div = document.querySelector(".result")
const rock_div = document.getElementById("rock")
const paper_div = document.getElementById("paper")
const scissors_div = document.getElementById("scissors")

function getComputerChoice() {
    // declaration of a const array: the ONLY three choices that can be made by either side
    const choices = ['rock', 'paper', 'scissors'];
    // Math.random() returns number in range (0,1)
    // multiply by 3 -> range (0,3)
    const randomNumber = Math.floor(Math.random()*3)
    return choices[randomNumber]
}

function win() {
    userScore++;
}

function lose() {
    
}

function draw() {
    
}

function game(userChoice) {
    // @param userChoice Choice of either rock/paper/scissors chosen by user via button click
    const computerChoice = getComputerChoice()
    switch (userChoice + "|" + computerChoice) {
        // userChoice|computerChoice
        case "rock|scissors":
        case "paper|rock":
        case "scissors|paper":
            win();
            break;
        case "rock|paper":
        case "paper|scissors":
        case "scissors|rock":
            lose();
            break;
        case "rock|rock":
        case "paper|paper":
        case "scissors|scissors":
            draw();
            break;
    }
}

/*
    addEventListener - sets up a function that will be called whenever the specified event
                       is delivered to the target (target.addEventListener())
    @param Case-sensitive string representing the *event type* to listen for
    @param Name of function to be called OR just build the function in the parameters, as
           done below
*/
function main() {
    rock_div.addEventListener('click', function() {
        game("rock")
    })
    
    paper_div.addEventListener('click', function() {
        game("paper")
    })
    
    scissors_div.addEventListener('click', function() {
        game("scissors")
    })
}

main();