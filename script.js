'use strict';

let number= Math.trunc(Math.random()*20)+1;
let highScore=0;
let score=Number(document.querySelector('.score').textContent);
console.log(number)

document.querySelector('.check').addEventListener('click',()=>{
    let guessedNumber=document.querySelector('.guess').value;
    console.log(guessedNumber)
    if(guessedNumber && (guessedNumber>=0 || guessedNumber<=20)){
        console.log(guessedNumber)
        if(guessedNumber==number){
            document.querySelector('.message').textContent='You Guessed Right!!'
            document.querySelector('.number').textContent=guessedNumber;
            document.querySelector('.check').disabled=true;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if(highScore<score){
                highScore=score;
                document.querySelector('.highscore').textContent=highScore;
            }
        }
        else{
            if(score>1){
                guessedNumber>number?document.querySelector('.message').textContent='Too high, Guess again!':document.querySelector('.message').textContent='Too low, Guess again!'
                score--;
                document.querySelector('.score').textContent=score;
            }
            else{
                document.querySelector('.message').textContent='You lost the Game'
                document.querySelector('.score').textContent = 0;
            }   
        }
    }
    else{
        document.querySelector('.message').textContent='Guess a number between 1 and 20'
    }
})

document.querySelector('.again').addEventListener('click',()=>{
     number= Math.trunc(Math.random()*20)+1;
     console.log(number)
     score=20;
     document.querySelector('.message').textContent='Start guessing...'
     document.querySelector('.score').textContent=score;
     document.querySelector('.number').textContent='?';
     document.querySelector('.guess').value = '';
     document.querySelector('body').style.backgroundColor = '#222';
     document.querySelector('.number').style.width = '15rem';
})
