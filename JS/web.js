
var start = document.getElementById("StartPage");
var startBtn = document.getElementById("start");
var getQuestion = document.getElementById("TestPage");


startBtn.addEventListener("click", pageQuestions);

function pageQuestions(){
    console.log("this is working");
    start.classList.add("hide");
    getQuestion.classList.remove("hide");
}