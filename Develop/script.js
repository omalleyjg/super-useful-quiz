const startButton = document.getElementById('start-btn')

startButton.addEventListener('click', startGame)

//1. start game
function startGame(){
console.log('started');
startButton.classList.add('hide');
}
//2. start countdown timer
//  a. timer takes away time for wrong answer
//  b. displays game over message when timer reaches zero
//3. display question with answers
//  a. after question is answered correctly display next question
//  b. repeat last function until game is complete
//4. after game is finished allow user to save initials and view highscores

