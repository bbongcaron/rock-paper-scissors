let userScore = 0;
let computerScore = 0;
// DOM variables
/*
    getElementById() - Get a pointer to an HTML element (p, div, table, etc.)
    @param String containing name of id
    @returns Element object representing an HTML element

    querySelector() - Get the first element in the document with class="class_name"
    @param String containing name of class/tag to be searched for
    @returns NodeList object (array-like list in terms of indexing) containing
             all instances of the @param class.tag
    
    Caching the DOM (Element/NodeList) - storing the above ID/Classes so we can reference 
    them later If we didn't store these pointers to the ID's/Classes, we would have to run
    getElementByID/querySelector every single time we need to fetch/change the 
    data in the HTML file => waste of time => just store pointer once
*/
// const b/c the following can be treated like pointers to specific tags:
// those pointers do not change
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".score-board")
// we actually want to reference the text stored in the <p> tag
// which is stored in the .result class tag
const result_p = document.querySelector(".result > p")
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

function capitalize_first_char(word) {
    return word.charAt(0).toUpperCase() + word.substring(1, word.length);
}

function win(userChoice, computerChoice) {
    userScore++;
    // Change the HTML embedded in between the span id'd userScore to variable userScore
    // tagPointer.innerHTML refers to the HTML in between an opening and closing tag <>HTML</>
    userScore_span.innerHTML = userScore;
    // sub() => subscript; sup() => superscript
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    // `${variableString} normal text` is ES6 syntax
    result_p.innerHTML = `${capitalize_first_char(userChoice)}${smallUserWord} 
                    beats ${capitalize_first_char(computerChoice)}${smallCompWord}. You win!`;
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${capitalize_first_char(userChoice)}${smallUserWord} 
                loses to ${capitalize_first_char(computerChoice)}${smallCompWord}. You lose...`;
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    result_p.innerHTML = `${capitalize_first_char(userChoice)}${smallUserWord} 
                ties with ${capitalize_first_char(computerChoice)}${smallCompWord}. It's a draw.`;
}

function game(userChoice) {
    // @param userChoice Choice of either rock/paper/scissors chosen by user via button click
    const computerChoice = getComputerChoice()
    switch (userChoice + "|" + computerChoice) {
        // userChoice|computerChoice
        case "rock|scissors":
        case "paper|rock":
        case "scissors|paper":
            win(userChoice, computerChoice);
            break;
        case "rock|paper":
        case "paper|scissors":
        case "scissors|rock":
            lose(userChoice, computerChoice);
            break;
        case "rock|rock":
        case "paper|paper":
        case "scissors|scissors":
            draw(userChoice, computerChoice);
            break;
    }
}
/*
    addEventListener - sets up a function that will be called whenever the specified event
                       is delivered to the target (target.addEventListener())
    @param Case-sensitive string representing the *event type* to listen for
    @param Name (and ONLY name) of function to be called OR just build the function in the parameters, as
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