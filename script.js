let boxes = document.querySelectorAll(".box");              //selecting all boxes
let msgContainer = document.querySelector(".msg-container");//selecting msg container
let msg = document.querySelector("#msg");                   //selecting msg content
let newBtn = document.querySelector(".new-btn");            //selecting new button
let resetBtn = document.querySelector("#reset-btn");        //selecting reset button

let playerX = true;   //playerX & playerO

let winningPatterns = [
    [0,1,2], [3,4,5], [6,7,8],  //row
    [0,3,6], [1,4,7], [2,5,8],  //column
    [0,4,8], [2,4,6]            //diagonal
];

//adding addEventListener to all box class, when we click the box X or O should display
//using forEach method using nested fat arrow function

boxes.forEach((box) => {
    
    box.addEventListener("click", () => {
        
        if(playerX === true){
            box.innerText="X";
            playerX=false;
        }
        else{
            box.innerText="O";
            playerX=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

//checking who is the game winner
const checkWinner = () => {
    for(let pattern of winningPatterns){
        let posiVal1 = boxes[pattern[0]].innerText;
        let posiVal2 = boxes[pattern[1]].innerText;
        let posiVal3 = boxes[pattern[2]].innerText;

        if(posiVal1 != "" && posiVal2 != "" && posiVal3 != ""){
            if(posiVal1 === posiVal2 && posiVal2 === posiVal3){
                console.log("Winner", posiVal1);
                showWinner(posiVal1);
            }
        }
    }
}

//displays the game winner
const showWinner = (winner) => {
    msg.innerText = `Winner is Player ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
} 

//disables to click the boxes when game is winned
const disableBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
};

//reset game enables to play new game by clicking new game btn or reset btn
const resetGame = () => {
    playerX = true;
    enableBoxes();
    msgContainer.classList.add("hide");
}

const enableBoxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

//for new game or reset game buttons

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);