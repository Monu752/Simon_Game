let gameSeq =[];
let userSeq=[];

let started = false;
let level = 0;

document.addEventListener("keypress",function(){
   if(started==false){
    started=true;
   }
    levelUp();
})

let h2=document.querySelector("h2");

function levelUp(){
    level++;
    h2.innerText=`Level ${level}`;

}