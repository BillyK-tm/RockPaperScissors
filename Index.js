const optionBtn = document.querySelectorAll('div.optionBtn button');
const selectionPlayer = document.querySelector('.playerstext');
const resetBtn = document.querySelector('#reset');
const playerPoints = document.querySelector('#player-Score');
const computerPoints = document.querySelector('#computer-Score');


//refresh page for new game
resetBtn.addEventListener('click',() => location.reload());
// optionBtn.forEach(button=>{button.addEventListener('click',getPlayerChoice)});
optionBtn.forEach(button=>{button.addEventListener('click',playGame)});

let playerScore = 0;
let compScore = 0;
let playerChoice = '';
let choices = ['rock','paper','scissors'];
let results = ['Win','Loss','Draw'];

function playRound(playerSelection, computerSelection) {
    // see who wins
    //rock beats scissors  0 <1 
    // scissors beats paper 
    //paper beats rock
    //draw
    console.log(choices[playerSelection] + " -/- " + choices[computerSelection]);
    // console.log(playerSelection +'/'+computerSelection);
    let myNum = '';
    myNum = playerSelection;
     console.log(myNum);
    const rock = 2;
       
    switch(choices[playerSelection]){
        
        case choices[0]: // Rock
        switch(choices[computerSelection]){
            case 'rock': 
            
            break;
            case 'paper':
                console.log(results[1]);
                break;
            case 'scissors':
                console.log (results[2]);
                break;
        }
           break;
        case choices[1]: // Paper
            switch(choices[computerSelection]){
                case 'rock': 
                    console.log(results[1]);
                    break;
                case 'paper':
                    console.log(results[2]);
                    break;
                case 'scissors':
                    console.log (results[0]);
                    break;
            }
           break;
        break;
        case choices[2]: // scissors
        switch(choices[computerSelection]){
            case 'rock': 
                console.log(results[1]);
                break;
            case 'paper':
                console.log(results[0]);
                break;
            case 'scissors':
                console.log (results[2]);
                break;
        }
        console.log(playerSelection = ' scissors');
        break;
        default: 
            console.log(playerSelection = ' default');
        break;
    }
    console.log('done');
  }
  

function playGame(e){
    // get user input and loop 5 times
    // reset scores
    // call get
    // playerScore = 0;
    // compScore = 0

    //  document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) +1
    //  document.getElementById('computer-score').innerHTML = parseInt(document.getElementById('computer-score').innerHTML) +1
    
    // const playerPoints = document.querySelector('#playerScore');
    // const computerPoints = document.querySelector('#computerScore');

    playerPoints.textContent = cnt++;

    let playerChoice = (e.target.id);
    console.log(playerChoice);

    playRound( 'rock', computerPlay());

}

function computerPlay(){
    return  Math.floor(Math.random() * choices.length);}

//function getPlayerChoice(e) {
    // how yto add up a number by 1
//    document.getElementById('player-score').innerHTML = parseInt(document.getElementById('player-score').innerHTML) +1

   // let playerSelection= (e.target.id);

   // console.log('in get player choice - ' + e.target.id);
   // playerChoice = e.target.textContent;
    
   //playRound(playerSelection, computerPlay());
   console.log ('in get player choice');
  //}

 /*  const playerSelection = "rock";
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection)); */