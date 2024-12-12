let boxes = document.querySelectorAll(".box")
let msgcontainer = document.querySelector(".msgcontainer")
let newgame  = document.querySelector(".newgame")
let resetgame = document.querySelector(".resetgame")
let msg = document.querySelector("#msg")
let drawcontainer = document.querySelector(".draw")
let drawmsg = document.querySelector("#draw")
     
let turnX = true
let count = 0; 
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];




boxes.forEach(
  (box) => {
    box.addEventListener("click" , () =>{
      if(turnX){
        box.innerText = "X"
        turnX = false
      }else{
        box.innerText = "O"
        turnX = true
      }
      box.disabled = true
      count++;
      let iswinner = checkwin();
if (count === 9 && !iswinner) {
  gameDraw()
}
    })
  }
)
   
const gameDraw = () =>{
  msg.innerText = `Game is draw`
  msgcontainer.classList.remove("hide")
  disablebtn()

}
const disablebtn = () =>{
  for (const box of boxes) {
    box.disabled = true
  }
}

const enablebtn = () =>{
  for (const box of boxes) {
    box.disabled = false
  box.innerText= ""
  msgcontainer.classList.add("hide")


  }
}

const showinner = (winner) =>{
  msg.innerText = `Congratulation winner is ${winner}`
  msgcontainer.classList.remove("hide")
  disablebtn();
  
 }

let checkwin = () =>{
  for(let pattern of winPatterns){
   pat1 = boxes[pattern[0]].innerText ,
     pat2 = boxes[pattern[1]].innerText , 
   pat3 = boxes[pattern[2]].innerText

  if (pat1 != "" && pat2 != " " && pat3 != "") {
    if (pat1 === pat2 && pat1 === pat3) {
  showinner(pat1)
  return true
    }
  }
  }
}
const resetGame = () => {
  turnX = true;
  count = 0;
  enablebtn();
  msgContainer.classList.add("hide");
};



newgame.addEventListener("click", resetGame);
resetgame.addEventListener("click", resetGame);





