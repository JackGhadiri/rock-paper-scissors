let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}
function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `$(convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!`;

}

function lose(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `$(convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost...`;
    userChoice_div.classList.add('red-glow');
    setTimeout(function () { userChoice_div.classList.remove('red-glow') }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `$(convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. It's a draw.`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(function () { userChoice_div.classList.remove('gray-glow') }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "ss":
        case "pp":
            draw();
            break;
    }
}

function main() {
    paper_div.addEventListener('click', function() {
        game("p");
    })

    rock_div.addEventListener('click', function() {
        game("r");
    })

    scissors_div.addEventListener('click', function() {
        game("s");
    })

}

main();




