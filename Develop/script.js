var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["strings", "booleans", "alerts", "numbers"],
        answer: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        choices: ["quotes", "curly brackets", "parentheses", "square brackets"],
        answer: "parentheses"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        choices: ["last()", "get()", "pop()", "None of the Above"],
        answer: "pop()"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        choices: ["toLowerCase()", "toLower()", "changeCase(case)", "None of the Above"],
        answer: "toLowerCase()"
    },
    {
        question: "Which of the following function of Number object returns the number's value",
        choices: ["toString()", "valueOf()", "toLocaleString()", "toPrecision()"],
        answer: "valueOf()"
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: ["concat()", "join()", "pop()", "map()"],
        answer: "join()"
    }
];


var startButton = document.getElementById('start-btn')
var questionContainerElement = document.getElementById('question-container')
var questionElement = document.getElementById('question')
var answerButtonsElement = document.getElementById('answer-buttons')
var timerEl = document.getElementById('timer')
var timeLeft = 10;

let shuffleQuestions, currentQuestionIndex;


startButton.addEventListener('click', startGame, startTimer);

//1. start game
function startGame() {
    console.log("game started")
    startButton.classList.add('hide');
    shuffleQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    startTimer();
    setNextQuestion();
}

//2. start countdown timer
function startTimer() {
    timerEl.classList.remove('hide');

    //  a. timer takes away time for wrong answer
    var timeInterval = setInterval(function () {
        if (timeLeft > 0) {
            timerEl.textContent = 'Time: ' + timeLeft;
            timeLeft--;
            //  b. displays game over message when timer reaches zero
            if (timeLeft <= 0) {
                timerEl.classList.add("hide")
                questionContainerElement.classList.add("hide")
                console.log("ran out of time")
                endGame();
   
            }
        }
    }, 1000);

}


//3. display question with answers
function setNextQuestion() {
    console.log("question appears")
    resetState();
    showQuestion(shuffleQuestions[currentQuestionIndex]);
    
}

function showQuestion(question) {

    questionElement.innerText = question.question
    question.choices.forEach(function (choices, i) {

        var choiceBtn = document.createElement("button");
        choiceBtn.setAttribute("value", choices);
        choiceBtn.textContent = i + 1 + ". " + choices;
        choiceBtn.onclick = selectAnswer;
        answerButtonsElement.appendChild(choiceBtn);
    });
    console.log("answers appear")
}

function selectAnswer() {
    if (this.value !== questions[currentQuestionIndex].answer) {
        console.log("wrong")
        timeLeft -= 10
        timerEl.textContent = 'Time: ' + timeLeft;
    if (currentQuestionIndex === questions.length) {
      endGame();
    } 
    } else {
        console.log("correct")
        currentQuestionIndex++;
        setNextQuestion();
    }
}





function resetState() {
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

//  a. after question is answered correctly display next question
//  b. repeat last function until game is complete
//4. after game is finished allow user to save initials and view highscores
function endGame() {

    console.log("game over")
}