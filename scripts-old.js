const optionBtn = document.querySelectorAll('div.optionBtn button');
const resetBtn = document.querySelector('#reset');
const playerPoints = document.querySelector('player-score');
const computerPoints = document.querySelector('computer-score');
let cnt = 0
//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());

// optionBtn.forEach(button=>{button.addEventListener('click',getPlayerChoice)});
optionBtn.forEach(button=>{
       button.addEventListener('click',getPlayerChoice) 
});

function getPlayerChoice(e) {
    let playerSelection= (e.target.id);
    playerChoice = e.target.textContent;
    cnt++;
    console.log('button choice - '+ playerChoice);
    console.log('counter' + cnt);
    // playRound(playerSelection, computerPlay());
  }