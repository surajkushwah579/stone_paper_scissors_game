let userScore = 0;
let computerScore = 0;
const choices = document.querySelectorAll(".choice");


const msg=document.querySelector("#msg");

const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#Computer-score");

const genComputerChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];


}
const drawGame=()=>{
    console.log("game was draw");
    msg.innerText="game was draw play again";
    msg.style.backgroundcolor="#081b31";
};
const showWinner=(userwin,userChoice,compChoice)=>{
    if(userwin)
    {
        userScore++;
        userScorepara.innerText=userScore;
        console.log("you win");
        msg.innerText="you win ";
        msg.style.backgroundColor="green";
    }
    else{
        computerScore++;
        compScorepara.innerText=computerScore;
        console.log("you loss");
        msg.innerText="you loss";
        msg.style.backgroundColor="red";
        
    }
}

const playGame=(userChoice)=>{
    console.log("user choice=",userChoice);

    const compChoice=genComputerChoice();
    console.log("comp choice=",compChoice);

    if(userChoice==compChoice)
    {
        drawGame();

    }
    else
    {
        let userwin=true;
        if(userChoice==="rock")
        {
            userwin=compChoice==="paper"?false:true;
        }
        else if(userScore==="paper"){
            userwin=compChoice==="scissors"?false:true;
        }
        else{
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin,userChoice,compChoice);
    }

}

choices.forEach((choice) => {
  
  choice.addEventListener("click", () => {
    const choiceId=choice.getAttribute("id");
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);
  });
});
