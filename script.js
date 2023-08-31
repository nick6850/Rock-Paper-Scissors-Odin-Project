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
let result = document.querySelector('#result')
let btns = document.querySelectorAll('button')

btns.forEach(btn => 
    btn.addEventListener('click', function() {
        result.textContent = round(btn.id, getComputerChoice())}))