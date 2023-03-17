console.log("Hello Gamers!")

let playerSelection = " "
let computerSelection = " "
let playerScore = 0;
let computerScore = 0;

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

function playRound( pChoice, cChoice)
{   
    var ResponseToPlayer = ""
    if(pChoice == cChoice)
    {
        ResponseToPlayer = "Draw! You And The Computer have Chosen The Same!"
    }
    else if(pChoice == "rock" && cChoice == "paper")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "rock" && cChoice == "scissors")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }
    else if(pChoice == "paper" && cChoice == "scissors")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "paper" && cChoice == "rock")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }
    else if(pChoice == "scissors" && cChoice == "rock")
    {
        ResponseToPlayer = "You Lose!"
        computerScore++
    }
    else if(pChoice == "scissors" && cChoice == "paper")
    {
        ResponseToPlayer = "You Win!"
        playerScore++
    }

    console.log("Players Choice: " + pChoice + " Computer Choice: " + cChoice )
    console.log("Players Score: " + playerScore + " Computer Score: " + computerScore )
    console.log(ResponseToPlayer);
}

function main()
{
    var counter = 1
    var rounds = 6
    while(counter < 6)
    {
        console.log("New Round Has begun! Round: " + counter)
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        playRound(playerSelection, computerSelection);
        counter++
    }
    console.log("Game Completed!")
    
}

main();