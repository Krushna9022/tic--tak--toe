let boxes=document.querySelectorAll(".box");
let reset=document.querySelector(".reset");
let newb=document.querySelector(".newgame");
let msg=document.querySelector(".msg")
let turn0=true;
let count=0;
const WinPattern=[
      [0,1,2],
      [0,3,6],
      [0,4,8],
      [1,4,7],
      [2,5,8],
      [2,4,6],
      [3,4,6],
      [6,7,8],
]


//for each for value
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turn0)
        { 
            box.innerText="O";
            turn0=false;
        }
        else
        {
            box.innerText="x";
            turn0=true;
        }
        box.disabled=true;
        count++;
        let iswinner= checkWinner();
        if(count==9 && !iswinner)
        {
            gameDraw();
        }
    })
})

const checkWinner=()=>{
    for(let pattern of WinPattern){
        let p1=boxes[pattern[0]].innerText;
        let p2=boxes[pattern[1]].innerText;
        let p3=boxes[pattern[2]].innerText;
        if(p1!="" && p2!="" && p3!="")
        {
            if(p1===p2 &&p2===p3)
            {
                showwinner(p1);
                return true;
            }
        }
    }
}

let showwinner=(winnner)=>
{
    msg.innerText=`congralution winner is ${winnner}`
    msg.classList.remove("hide");
    BoxesDisabled();
}
 
gameDraw=()=>{
    msg.innerText=`game is draw`;
    msg.classList.remove("hide");
    BoxesDisabled();
}

BoxesDisabled=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

BoxesEnabled=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

resetgame=()=>{
    turn0=true;
    BoxesEnabled();
    count=0;
    msg.classList.add("hide");
}

reset.addEventListener("click",resetgame);
newb.addEventListener("click",resetgame);
