console.log("welcome to Tic Tac Toe")
// function to change turn
let turn = "X"
let isgameover = false      ;
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}
// function to check win
const CheckWin = () => {
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]
    wins.forEach(e => {
        if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
            document.querySelector('.info').innerText=boxtext[e[0]].innerText + "won"
        isgameover = true;
        document.querySelector('.imgclass').getElementsByTagName("img")[0].style.width = "150px";
        }
    })
}
// Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext')
    element.addEventListener('click', () => {
        if (boxtext.innerText === '') {
            boxtext.innerText = turn;
            turn = changeturn();
            CheckWin();
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "turn for " + turn;

            }

        }
    })
})
 reset.addEventListener('click',()=>{
    let boxtexts=document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element=>{
        element=element.innerText="";
    })
    turn="X";
    isgameover=false
    document.getElementsByClassName("info")[0].innerText = "turn for " + turn;

 })