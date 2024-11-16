let h2=document.querySelector('h2')
let btns=["yellow","red","green","blue"];
let started=false;
let level=0;
let gameSeq=[];
let userSeq=[];

//keyPress access to start game
document.addEventListener("keypress",function(){
   if(started==false){
    started=true;
   console.log("game is started")
levelUp();
   }
})


function levelUp(){
  userSeq=[]
    level++
h2.innerText=`Level ${level}`
     let randIdx=Math.floor(Math.random()*3)
     let randclr=btns[randIdx];
     let  clrflash=document.querySelector(`.${randclr}`)
  
   gameSeq.push(randclr)
   console.log(gameSeq)
     gameFlash(clrflash);
}


function gameFlash(btn){
    btn.classList.add("flash")
    setTimeout(function(){
        btn.classList.remove("flash");
    },250)
}

function userFlash(btn){
    btn.classList.add("userflash")
    setTimeout(function(){
        btn.classList.remove("userflash");
    },250)
}

//btns press working
let allbtns=document.querySelectorAll(".btn");
for(btn of allbtns){
    btn.addEventListener("click",btnPress)
}

function btnPress(){
    console.log(this)
    let btn=this
    userFlash(btn)

    let usercolor=btn.getAttribute("id")
    userSeq.push(usercolor)
    console.log(usercolor)

 checkAns(userSeq.length-1);
}

//checking answer
function checkAns(idx){

// let idx=level-1;
console.log(idx)
if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
  setTimeout(levelUp(),1000)
    }
}else{
  h2.innerHTML=`Game over,Your Score is <b>${level}</b>,Press any key to restart`
  document.querySelector("body").style.backgroundColor="red"
  setTimeout(function(){
    document.querySelector("body").style.backgroundColor="white"
  },150)
  console.log("game over")
  resetGame();
}
    
}

//restart game
function resetGame(){
     started=false;
 level=0;
 gameSeq=[];
 userSeq=[];
}