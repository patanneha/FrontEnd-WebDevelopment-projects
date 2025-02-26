let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genCompChoice = () =>{
    const options = ["rock","paper","scissors"];
    const randIdx = Math.floor(Math.random()*3);
    return options[randIdx];
};

const drawGame = ()=>{
    //console.log("game is draw");
    msg.innerText = "Game was Draw. Play again.";
    msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin,userChoice,compChoice)=>{
    if(userWin){
        //console.log("you win");
        msg.innerText = `You Win! Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
        userScore++;
        userScorePara.innerText = userScore;
    }
    else{
        //console.log("you loose");
        msg.innerText = `You lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor = "red";
        compScore++;
        compScorePara.innerText = compScore;
    }
};

const playGame = (userChoice) =>{
    //console.log("user choice", userChoice);
    //generate computer choice
    const compChoice = genCompChoice();
    //console.log("comp choice =",compChoice);

    if(userChoice == compChoice){
        drawGame();
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            //scissor , paper
            userWin = compChoice === "paper" ?  false : true ;
        }
        else if(userChoice === "paper"){
            userWin = compChoice === "rock" ? true : false ;
        }
        else{
            userWin = compChoice === "paper" ? true : false;
        }
        showWinner(userWin,userChoice,compChoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});

