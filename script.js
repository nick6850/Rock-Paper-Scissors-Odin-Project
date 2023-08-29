function getComputerChoice() {
    const options = ['Rock', 'Paper', 'Scissors']
    const random_num = Math.floor(Math.random() * 3)
    return options[random_num]
}

function round(playerSelection, computerSelection) {
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelection === 'Rock') {
        if (computerSelection === 'Paper') {
            computerScore += 1
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else if (computerSelection === 'Scissors'){
            userScore += 1
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            return `It\'s a draw!`}
    } else if (playerSelection === 'Paper') {
        if (computerSelection === 'Scissors') {
            computerScore += 1
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else if (computerSelection === 'Rock'){
            userScore += 1
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            return `It\'s a draw!`
        }
    } else {
        if (computerSelection === 'Rock') {
            computerScore += 1
            return `You lose! ${computerSelection} beats ${playerSelection}.`
        } else if (computerSelection === 'Paper'){
            userScore += 1
            return `You win! ${playerSelection} beats ${computerSelection}.`
        } else {
            return `It\'s a draw!`
    }
    }}

let userScore = 0
let computerScore = 0


function game() {
    for (let i = 0; i < 5; i++) {
        let userChoice = prompt('Enter rock, paper or scissors')
        console.log(round(userChoice, getComputerChoice()))  
        console.log(`Your score: ${userScore}. Computer score: ${computerScore}`)
    }
    if (computerScore > userScore) {
        console.log(`You lose. Your score: ${userScore}. Computer score: ${computerScore}`)
    } else if (userScore > computerScore) {
        console.log(`You won. Your score: ${userScore}. Computer score: ${computerScore}`)
    } else {
        console.log(`It's a draw. Your score: ${userScore}. Computer score: ${computerScore}`)
    }
   userScore = 0
   computerScore = 0
}

game()