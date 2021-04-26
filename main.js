const box = document.querySelectorAll(".box")
console.log(box[0])
const status=document.querySelector("#game-status")
const reset = document.querySelector("#reset")
let turn = true


const writeXOrO=(e)=>{
// [0].id

if(e.path[0].innerText==="o" || e.path[0].innerText==="x" || status.innerText==="O has won" || status.innerText==="X has won"){return}
if(turn){
e.path[0].innerText="x"
if (box[0].innerText==="o" && box[1].innerText==="o" && box[2].innerText==="o"||
    box[3].innerText==="o" && box[4].innerText==="o" && box[5].innerText==="o"||
    box[6].innerText==="o" && box[7].innerText==="o" && box[8].innerText==="o"||
    box[0].innerText==="o" && box[3].innerText==="o" && box[6].innerText==="o"||
    box[1].innerText==="o" && box[4].innerText==="o" && box[7].innerText==="o"||
    box[2].innerText==="o" && box[5].innerText==="o" && box[8].innerText==="o"||
    box[0].innerText==="o" && box[4].innerText==="o" && box[8].innerText==="o"||
    box[2].innerText==="o" && box[4].innerText==="o" && box[6].innerText==="o" ){status.innerText="O has won"
return}

    if (box[0].innerText==="x" && box[1].innerText==="x" && box[2].innerText==="x"||
    box[3].innerText==="x" && box[4].innerText==="x" && box[5].innerText==="x"||
    box[6].innerText==="x" && box[7].innerText==="x" && box[8].innerText==="x"||
    box[0].innerText==="x" && box[3].innerText==="x" && box[6].innerText==="x"||
    box[1].innerText==="x" && box[4].innerText==="x" && box[7].innerText==="x"||
    box[2].innerText==="x" && box[5].innerText==="x" && box[8].innerText==="x"||
    box[0].innerText==="x" && box[4].innerText==="x" && box[8].innerText==="x"||
    box[2].innerText==="x" && box[4].innerText==="x" && box[6].innerText==="x" ){status.innerText="X has won"
return}
if(box[0].innerText!=="" && box[1].innerText!=="" &&
 box[2].innerText!=="" && box[3].innerText!=="" &&
 box[4].innerText!=="" && box[5].innerText!=="" &&
 box[6].innerText!=="" && box[7].innerText!=="" && 
 box[8].innerText!==""){status.innerText="Tie"
return
 }
turn=false
if(!turn){status.innerText="O turn now"}
if(turn){status.innerText="X turn now"}
return}
if(e.path[0]!=="x"){
e.path[0].innerText="o"
if (box[0].innerText==="o" && box[1].innerText==="o" && box[2].innerText==="o"||
    box[3].innerText==="o" && box[4].innerText==="o" && box[5].innerText==="o"||
    box[6].innerText==="o" && box[7].innerText==="o" && box[8].innerText==="o"||
    box[0].innerText==="o" && box[3].innerText==="o" && box[6].innerText==="o"||
    box[1].innerText==="o" && box[4].innerText==="o" && box[7].innerText==="o"||
    box[2].innerText==="o" && box[5].innerText==="o" && box[8].innerText==="o"||
    box[0].innerText==="o" && box[4].innerText==="o" && box[8].innerText==="o"||
    box[2].innerText==="o" && box[4].innerText==="o" && box[6].innerText==="o" ){status.innerText="O has won"
return}

    if (box[0].innerText==="x" && box[1].innerText==="x" && box[2].innerText==="x"||
    box[3].innerText==="x" && box[4].innerText==="x" && box[5].innerText==="x"||
    box[6].innerText==="x" && box[7].innerText==="x" && box[8].innerText==="x"||
    box[0].innerText==="x" && box[3].innerText==="x" && box[6].innerText==="x"||
    box[1].innerText==="x" && box[4].innerText==="x" && box[7].innerText==="x"||
    box[2].innerText==="x" && box[5].innerText==="x" && box[8].innerText==="x"||
    box[0].innerText==="x" && box[4].innerText==="x" && box[8].innerText==="x"||
    box[2].innerText==="x" && box[4].innerText==="x" && box[6].innerText==="x" ){status.innerText="X has won"
return}
if(box[0].innerText!=="" && box[1].innerText!=="" &&
 box[2].innerText!=="" && box[3].innerText!=="" &&
 box[4].innerText!=="" && box[5].innerText!=="" &&
 box[6].innerText!=="" && box[7].innerText!=="" && 
 box[8].innerText!==""){status.innerText="Tie"
return
 }
turn=true
if(!turn){status.innerText="O turn now"}
if(turn){status.innerText="X turn now"}}
}


for(i=0;i<box.length;i++){
    box[i].addEventListener("click",writeXOrO)

}

const resetGame=()=>{
    for(i=0;i<box.length;i++){
        box[i].innerHTML=""
    }
    status.innerText="X turn now"
    turn=true
}

reset.addEventListener("click",resetGame)