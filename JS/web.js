
var start = document.getElementById("StartPage");
var startBtn = document.getElementById("start");
var getQuestion = document.getElementById("TestPage");
var timeLe = document.getElementById("timer");

var questionbeg = document.getElementById("question");
var questionBox = document.querySelector("TestPage");



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
    Questions();
    countDown();
}

function Questions(){
    jumpQuestion(posQuestions[startQuestions]);

}

function jumpQuestion(question){
    questionbeg.innerText = question.question;
}


function answers(){

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

//"<script>","<scripting>","<body>","<html>"