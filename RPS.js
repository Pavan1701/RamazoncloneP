let userscore=0;
let compscore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#message");
const userscorepara=document.querySelector("#user-score");
const compscorepara=document.querySelector("#comp-score");

// compchoice
const genComChoice = () => {
    const options=["rock" , "paper" , "scissor"];
    const ranIdx= Math.floor(Math.random() * 3);
    return options[ranIdx];
    console.log(options[ranIdx]);
};  
const drawGame=()=>{
//    console.log("draw game")
   msg.innerText=" Game was Draw Play again";
   msg.style.backgroundColor = "blue";
}
const showWinner=(userWin)=>{
    if(userWin===true){
        userscore++
        userscorepara.innerText=userscore
        // console.log("you won.")
        msg.innerText="You won!";
        msg.style.backgroundColor = "green";
    }
    else{
        compscore++
        compscorepara.innerText=compscore
        console.log("computer won.")
        msg.innerText="You lost!";
        msg.style.backgroundColor = "red";
    }
}
//playgame
const playGame=(userchoice)=>{
    console.log("user choice = ", userchoice)
    // Generate computer choice
   const Compchoice = genComChoice();
    console.log("comp choice = " ,Compchoice );
    if(userchoice===Compchoice){
      //  console.log("game was draw.")
        drawGame();
    }
    else{
        let userWin=true;
        if(userchoice==="rock"){
            userWin=Compchoice==="paper" ? false : true
        }
    else if(userchoice==="paper"){
            userWin=Compchoice==="scissor" ? false : true 
    }
    else{
        userWin=Compchoice==="rock"? false : true 
    }
    showWinner(userWin)
   }
}





choices.forEach((choice)=>{
    //console.log(choice);
    choice.addEventListener('click',()=>{
        const userchoice=choice.getAttribute("id")
    //console.log("choises was clicked" , choiceId)
    playGame(userchoice);
    })
})