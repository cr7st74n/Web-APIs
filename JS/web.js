
var start = document.getElementById("StartPage");
var continua = document.getElementById("ContButton");
var startBtn = document.getElementById("start");
var getQuestion = document.getElementById("TestPage");
var timeLe = document.getElementById("timer");
var questionbeg = document.getElementById("question");
var questionBox = document.getElementById("TestPage");
var correctOrIncorrect = document.querySelector("check");
var ShowResponse = document.getElementById("respond");

var option1 = document.getElementById("opt1");
var option2 = document.getElementById("opt2");
var option3 = document.getElementById("opt3");
var option4 = document.getElementById("opt4");

var ArrayOpt = [option1,option2,option3,option4];

var startQuestions, posQuestions;



startBtn.addEventListener("click", pageQuestions);
continua.addEventListener("click", function(){})

var timeLeft = 60;
function countDown(){

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
    //console.log("this is working");
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

    for(var i = 0; i<ArrayOpt.length ; i++){
        var answer = question.answers[i];
        ArrayOpt[i].innerText = answer.text;
    
        // var button = document.createElement("button");
        // button.classList.add("btn");
        // button.innerText = answer.text;
        if (answer.correct){
            ArrayOpt[i].dataset.correct = answer.correct;
        }
        ArrayOpt[i].addEventListener("click",answers);
        //questionBox.appendChild(option1);
    }
    ;
}

function startAgain() {
    continua.classList.remove("hide");
    continua.classList.add("btn1");
    
    ShowResponse.classList.remove("hide");
    ShowResponse.classList.add("x");
    ShowResponse.innerText ="";

    for (var i = 0 ; i < ArrayOpt.length; i++){
        ArrayOpt[i].Text=""
    }

}


function answers(obj){
    var selectButton = obj.target;  //werever we click on 
    var correct = selectButton.dataset.correct;
    if (correct){
        console.log("correct");
        ShowResponse.innerText= "correct";
    }else{
        console.log("incorrect");
        ShowResponse.innerText= "incorrect";
        //timeLeft=-10;
    }
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
    },
    {
        question:"Which operator is used to assign a value to a variable?",
        answers: [
            {text:"x", correct: false},
            {text:"*", correct: false},
            {text:"=", correct: true},
            {text:"-", correct: false},
        ]
    }
]
