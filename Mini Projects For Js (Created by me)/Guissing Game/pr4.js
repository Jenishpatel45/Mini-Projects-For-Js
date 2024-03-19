let rn= parseInt(Math.random()* 100 +1);
const submit= document.querySelector('.subt')
const userInput =document.querySelector('.guessfield')
const guessslot= document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const lowhigh = document.querySelector('.Low-or-High');
const result = document.querySelector('.resultParas ');



const p= document.createElement('p');
 let prevGuess =[];
 let numGuess = 1;
  let playGame = true;

if(playGame){
  submit.addEventListener('click',(e)=>{
    e.preventDefault()
    const guess=parseInt(userInput.value);
    validateGuess(guess);
  })
}


  function validateGuess(guess){
     if(isNaN(guess)){
      alert('please enter a valid Number')
     }else if(guess<1){
      alert('please enter a valid Number')
     }
     else if(guess>100){
      alert('please enter a valid Number')
     }
     else{
      prevGuess.push(guess)
       if( numGuess === 11){
        displayGuess(guess);
        displayMessage(`game over random number was ${rn}`);
        endGame();
       } else{
        displayGuess(guess);
        checkGuess(guess);
       }
     }
  }
function checkGuess(guess){
  if(guess === rn){
    displayMessage('you guessed right')
     endGame()
  }else if(guess < rn){
    displayMessage('Number is TOO low')
  }
  else if( guess > rn){
       displayMessage('Number is TOO high')
  }

}
function displayGuess(guess) {
 userInput.value=''
 guessslot.innerHTML += `${guess}   `; 
 numGuess++;
 remaining.innerHTML=`${11 - numGuess}`
} 
function displayMessage(message){
  lowhigh.innerHTML=`<h2>${message}</h2>`; 
}
function endGame(){
  userInput.value=''
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id="newGame">start new Game</h2>`;
  result.appendChild(p)
  playGame = false
  newGame();
}
function newGame(){
  const newbtn=  document.querySelector('#newGame')

  newbtn.addEventListener('click',(e) =>{
    let rn= parseInt(Math.random()* 100 +1);
    prevGuess=[]
    numGuess = 1
   
    guessslot.innerHTML =''
    remaining.innerHTML= `${11 - numGuess}`
    userInput.removeAttribute('disabled'); 
    result.removeChild(p);

    playGame = true
  })
}

console.log(document.location)       
 