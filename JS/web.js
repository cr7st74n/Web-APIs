
var start = document.getElementById("StartPage");
var continua = document.getElementById("ContButton");

var startBtn = document.getElementById("start");
var getQuestion = document.getElementById("TestPage");
var timeLe = document.getElementById("timer");

var questionbeg = document.getElementById("question");
var questionBox = document.getElementById("TestPage");
var correctOrIncorrect = document.querySelector("check");

var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");



var startQuestions, posQuestions;



startBtn.addEventListener("click", pageQuestions);

function countDown(){
    var timeLeft = 60;

    var timeInt = setInterval(function(){
        timeLeft--;
        timeLe.textContent = 'Time left: ' +timeLeft;
        if(timeLeft <= 0){
            clearInterval(countDown);
            timeLe.textContent = '';
        }
    },1000);
}

function pageQuestions(){
    console.log("this is working");
    start.classList.add("hide");
    getQuestion.classList.remove("hide");
    startQuestions = 0;
    posQuestions = JSquestions;
    countDown();
    Questions();

}

function Questions(){
    startAgain();
    jumpQuestion(posQuestions[startQuestions]);
}





function jumpQuestion(question){
    questionbeg.innerText = question.question;

    question.answers.forEach(answer => {
        var button = document.createElement("button");
        button.classList.add("btn");
        button.innerText = answer.text;
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click",answers);
        questionBox.appendChild(button);
        
    });
}

function startAgain() {
    continua.classList.add("hide");
    while(questionBox.firstChild){
        questionBox.removeChild(questionBox.firstChild);
    }

}


function answers(obj){
    var selectButton = obj.target;
    var correct = selectButton.dataset.correct;
    
}

var JSquestions = [
    {
        question:"Inside which HTML element do we put the JavaScript?",
        answers: [ 
            {text:"<script>", correct: true},
            {text:"<scripting>", correct: false},
            {text:"<body>", correct: false},
            {text:"<html>", correct: false},
        ]
        // ,
        // question:"Which operator is used to assign a value to a variable?",
        // answers: [
        //     {text:"x", correct: false},
        //     {text:"*", correct: false},
        //     {text:"=", correct: true},
        //     {text:"-", correct: false},
        // ],


    }
]

