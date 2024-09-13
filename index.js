"use strict";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent='Hello World';
// document.querySelector(".number").textContent='30';
// document.querySelector(".score").textContent='10';
// document.querySelector(".guess").value='25';
// console.log(document.querySelector(".guess").value);

let secretNumber=Math.trunc(Math.random() * 20) + 1;
let score=20;
let highScore=0;
const displayMessage=function(message){
document.querySelector('.message').textContent=message;
}
document.querySelector('.check').addEventListener('click',function(){
   const guess=Number(document.querySelector('.guess').value);
   console.log(guess,typeof guess);
    if(!guess){
        displayMessage("⛔ No Numbers");
        // document.querySelector('.message').textContent="⛔ No Numbers";
    }
    // Refactoring :DRY Pricipale
    else if(guess!==secretNumber){
        if(score>1){
            // document.querySelector('.message').textContent = guess > secretNumber? "📈 Too High"
            // :"📉 Too Low";
            displayMessage(guess > secretNumber? "📈 Too High" : "📉 Too Low")
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent="💥 You lost the game";
            document.querySelector('.score').textContent=0;
        }
    }
    else if(guess===secretNumber){
        document.querySelector('.number').textContent=secretNumber;
        // document.querySelector('.message').textContent="🎉 Correct Number";
        displayMessage("🎉 Correct Number");
        document.querySelector('body').style.backgroundColor="#60b347";
        document.querySelector(".number").style.width='30rem';
        if(score>highScore){
            highScore=score;
            document.querySelector('.highscore').textContent=highScore;
        }
    }
    // else if(guess>secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent="📈 Too High";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //     else{
    //         document.querySelector('.message').textContent="💥 You lost the game";
    //         document.querySelector('.score').textContent=0;
    //     }
    // }
    // else if(guess<secretNumber){
    //     if(score>1){
    //         document.querySelector('.message').textContent="📉 Too Low";
    //         score--;
    //         document.querySelector('.score').textContent=score;
    //     }
    //   else{
    //     document.querySelector('.message').textContent="💥 You lost the game";
    //     document.querySelector('.score').textContent=0;
    //   }
    // }
})
document.querySelector('.again').addEventListener('click',function(){
    secretNumber=Math.trunc(Math.random() * 20) + 1;
    score=20;
    // document.querySelector('.message').textContent='Start guessing...';
    displayMessage("Start guessing...");
    document.querySelector('.score').textContent=score;
    document.querySelector('body').style.backgroundColor='#222';
    document.querySelector('.number').textContent='?';
    document.querySelector('.number').style.width='15rem';
    document.querySelector('.guess').value='';
})