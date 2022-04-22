const optionBtn = document.querySelectorAll('div.optionBtn button');
const returnHome = document.querySelector('div.returnToHome button');
const resetBtn = document.querySelector('#reset');
const playerPoints = document.querySelector('#player-score');
const computerPoints = document.querySelector('#computer-score');
const playerText = document.querySelector('#playersText');
const computerText = document.querySelector('#computersText');
const resultText = document.querySelector('#resultText');
const finalResult = document.querySelector('#finalResult');

let playerScore = 0;
let compScore = 0;
let playerChoice  ;
let choices = ['rock','paper','scissors'];
let results = ['Win','Loss','Draw'];
let winnerText = ['Person is the winner','Computer is the winner','Game ON!'];
let gameOver = false;
let gamecounter = 1;

// option to scan all buttons
 optionBtn.forEach(button=>{button.addEventListener('click',getPlayerChoice)});
 //refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

returnHome.addEventListener('click',returnhome);

function returnhome(){
    console.log('test');
    console.log('clicked')
}
 // get computers selection
function computerPlay(){
    return  Math.floor(Math.random() * choices.length);}

 function getPlayerChoice(e){
    let playerChoice = (e.target.id);
    finalResult.textContent = winnerText[2];

    if (gameOver){
       // declare the winner
        finalResult.textContent = winnerText[0]; 
    } else{
        playRound(choices[playerChoice],choices[computerPlay()])
    //    max number of rounds reached then game over
        if (gamecounter ===5) {gameOver = true};
    }
}
function playRound(playerSelection,computerSelection){
    playerText.textContent =playerSelection;
    computerText.textContent = computerSelection;
    //figure out who won
    switch(playerSelection){
            case 'rock': //if rock then check what computer has
                switch(computerSelection){
                    case 'rock': //Draw - rock
                        playerScore++;
                        compScore++;
                        resultText.textContent = results[2];
                        playerPoints.textContent = playerScore;
                        computerPoints.textContent = compScore;
                    break;
                    case 'paper': // loss - paper
                        compScore++;
                        resultText.textContent = results[1];
                        computerPoints.textContent = compScore; 
                        break;
                    case 'scissors': //win - scissors
                        playerScore++;
                        playerPoints.textContent= playerScore;
                        resultText.textContent = results[0];
                        break;
                    default: 
                        console.log(playerSelection = ' default');
                    break;}
            break;
            case 'paper': //if paper then
                switch(computerSelection){
                    case 'rock': //win - rock
                        playerScore++;
                        playerPoints.textContent = playerScore;
                        resultText.textContent = results[0];
                        break;
                    case 'paper': // draw - paper
                        playerScore++;
                        compScore++;
                        playerPoints.textContent = playerScore;
                        computerPoints.textContent = compScore;
                        resultText.textContent = results[2];
                        break;
                    case 'scissors': //loss - scissors
                        compScore++;
                        computerPoints.textContent = compScore;
                        resultText.textContent = results[1];
                        break;
                    default: 
                        console.log(playerSelection = ' default');
                    break;}
                break;
        case 'scissors': //if scissors then
            switch(computerSelection){
                case 'rock': //loss - rock
                    compScore++;
                    computerPoints.textContent = compScore;
                    resultText.textContent = results[1];
                    break;
                case 'paper': // win - paper
                    playerScore++;
                    playerPoints.textContent = playerScore;
                    resultText.textContent = results[0];
                    break;
                case 'scissors': //draw - scissors
                    playerScore++;
                    compScore++;
                    playerPoints.textContent = playerScore;
                    computerPoints.textContent = compScore;
                    resultText.textContent = results[2];
                    break;
                default: 
                    console.log(playerSelection = ' default');
                break;}
            break;
    }
    gamecounter ++; //update the game counter
}