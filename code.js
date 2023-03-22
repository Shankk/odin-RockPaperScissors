console.log("Hello Gamers!")

let playerSelection = " "
let computerSelection = " "
let playerScore = 0;
let computerScore = 0;
let newGame = false;

const info = document.querySelector('#info');
const pScore = document.querySelector('#pScore');
const cScore = document.querySelector('#cScore');

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
rock.addEventListener('click', () => {
    playRound("rock");
});
paper.addEventListener('click', () => {
    playRound("paper");
});
scissors.addEventListener('click', () => {
    playRound('scissors');
});

function getPlayerChoice()
{
    let NeedValidInput = true;
    let ResponseToPlayer = "Choose Rock , Paper or Scissors"
    while(NeedValidInput)
    {
        var playerInput = prompt(ResponseToPlayer);
        var fixatedResult = playerInput.toLowerCase();
        if( !(fixatedResult == "rock" || fixatedResult == "paper" || fixatedResult == "scissors") )
        {
            ResponseToPlayer = "Error! Please Enter a Valid Response of 'Rock''Paper' or 'Scissors' "
        }
        else
        {
            NeedValidInput = false;
        }
    }
    console.log(fixatedResult);
    return fixatedResult;
}

function getComputerChoice()
{
    var decisonValue = Math.random();
    var choice = " ";
    if(decisonValue < 0.3333)
    {
        choice = "rock";
    }
    else if(decisonValue > 0.6666)
    {
        choice = "paper";
    }
    else
    {
        choice = "scissors";
    }
    console.log(decisonValue, choice)
    return choice;
}

function playRound(pChoice)
{   
    computerSelection = getComputerChoice();
    var ResponseToPlayer = ""
    if(pChoice == computerSelection)
    {
        ResponseToPlayer = "Draw! You And The Computer have Chosen The Same!"
    }
    else if(pChoice == "rock" && computerSelection == "paper")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "rock" && computerSelection == "scissors")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }
    else if(pChoice == "paper" && computerSelection == "scissors")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "paper" && computerSelection == "rock")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }
    else if(pChoice == "scissors" && computerSelection == "rock")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "scissors" && computerSelection == "paper")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }

    info.textContent = ResponseToPlayer;
    pScore.textContent = `Player Score: ${playerScore}`;
    cScore.textContent = `Computer Score: ${computerScore}`;

    console.log("Players Choice: " + pChoice + " Computer Choice: " + computerSelection)
    console.log("Players Score: " + playerScore + " Computer Score: " + computerScore )
    console.log(ResponseToPlayer);
}