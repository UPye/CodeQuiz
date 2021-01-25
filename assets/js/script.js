var timerEl = document.querySelector(".timer");
var scoreBoard = document.querySelector("#score-board");
var highScores = document.querySelector("#high-scores");
var beginQuizButton = document.querySelector("#btn-start");
var saveScoreButton = document.querySelector("#btn-save-score");
var answers = document.querySelector("#answers");
var questionsContainer = document.querySelector("#questions-container");
var timeLeft;
var score;
var trackQuestions;
var currentCorrectAnswer;
var scoreResult = document.querySelector("#score");
var endOfQuiz = document.querySelector("#quiz-end");
var question = document.querySelector("#question");
var result = document.querySelector("#result");
var answer1 = document.querySelector("#a-btn-answer-1");
var answer2 = document.querySelector("#a-btn-answer-2");
var answer3 = document.querySelector("#a-btn-answer-3");
var answer4 = document.querySelector("#a-btn-answer-4");
answer1.addEventListener("click", checkAnswer); 
answer2.addEventListener("click", checkAnswer); 
answer3.addEventListener("click", checkAnswer); 
answer4.addEventListener("click", checkAnswer); 

var goBackButton = document.querySelector("#btn-go-back");
var clearHighScoresButton = document.querySelector("#btn-clear-high-scores");
goBackButton.addEventListener("click", goBack);
clearHighScoresButton.addEventListener("click", clearHighScores); 

beginQuizButton.addEventListener("click", startQuiz); 
saveScoreButton.addEventListener("click", saveScore); 

//Hide question and answers on first screen
document.getElementById("questions-container").style.display = 'none';

//create array for questions
const questions = [ 
    //Question 1
    { 
        question: 'How can you get the total number of arguments passed to a function?', 
        answer: ['1. Using args.length property', '2. Using arguments.length property', '3. Both of the above', '4. None of the above'],
        correctAnswer: 2
    }
    ,
    //Question 2
    { 
        question: 'Which of the following type of variable is visible only within a function where it is defined?', 
        answer: [ '1. Global Variable ', '2. Local Variable', '3. Both of the above', '4. None of the above'],
        correctAnswer: 2
    },
    //Question 3
    { 
        question: 'Which of the following code creates an object?', 
        answer: [ '1. Var book = new Object();', '2. Var book  Object();', '3. Var book = new OBJECT();', '4. Var book = new Book();'],
        correctAnswer: 1
    },
    //Question 4
    { 
        question: 'Which of the following function of Number object returns a string value version of the current number in a format that may vary according to a browsers locale settings?', 
        answer: [ '1. toString()', '2. toExponential()', '3. toFixed()', '4. toLocaleString'],
        correctAnswer: 4
    },
    //Question 5
    { 
        question: 'Which of the following function of Array object reverses the order of the elements of an array?', 
        answer: [ '1. reduce()', '2. push()', '3. reverse()', '4. reduceRight()'],
        correctAnswer: 4
    }
]; 

//create variable to begin quiz and display questions in array
// timer starts at click of button, score will start at 0
function startQuiz() {
    timeLeft = 60;
    trackQuestions = 0;
    score = 0;
    scoreName = '';
    console.log('startQuiz');
    document.getElementById('intro-text').style.display = 'none';
    document.getElementById("score-name").value = '';
    questionsContainer.style.display = 'block';
    endOfQuiz.style.display = 'none';
    highScores.style.display = 'none';

    startTimer();

    askQuestion(questions[trackQuestions]);
}

//Loop through each question, end quix at last question
function askQuestion(q){
    console.log('timeout' + ' ' + trackQuestions + ' ' + questions.length)
    if(trackQuestions < questions.length - 1)
    {
        console.log('question count: ' + trackQuestions);
        answers.style.visibility = 'visible';

        currentCorrectAnswer = q.correctAnswer;
        result.innerHTML = '';

        question.innerHTML = q.question;
        answer1.innerHTML = q.answer[0];
        answer1.data = q.answer[0];
        answer2.innerHTML = q.answer[1];        
        answer3.innerHTML = q.answer[2];        
        answer4.innerHTML = q.answer[3];  

        console.log(q);
    }
    else
        endQuiz();
}

// check answers when clicked, display correct or incorrect
function checkAnswer() {
    var chosenAnswer = (this.getAttribute('data-answer-id'));

    console.log('checkAnswer');
    console.log(currentCorrectAnswer);
    console.log(chosenAnswer);

    answers.style.visibility = 'hidden';

    if(currentCorrectAnswer == chosenAnswer){
        console.log('correct');
        result.innerHTML = '<span style="color:green;">Correct!</span>';
        score += 10;
    }
    else{
        decreaseTime();
        console.log('incorrect');
        result.innerHTML = '<span style="color:red;">Incorrect!</span>';
        score -= 2;
    }

    trackQuestions++; 

    setTimeout(function(){
        askQuestion(questions[trackQuestions]);
    }, 1000);
}

//Save score at end of game and show Highscores
function saveScore(){
    console.log(document.getElementById("score-name").value);
    var node = document.createElement("p");
    var nodeValue = document.createTextNode(document.getElementById("score-name").value + ': ' + score);
    node.appendChild(nodeValue);
    scoreBoard.appendChild(node);
    endOfQuiz.style.display = 'none';
    highScores.style.display = 'block';
}

//decrease time by 10 point when answer is incorrect
function decreaseTime() {
    timeLeft -= 10;
}

//start timer when Begin Quiz button is clicked, end time after all questiosn are answered or time is at 0
function startTimer() {
    console.log('startTimer')
    var timer = setInterval(function()
    {
        timeLeft--;
        timerEl.innerHTML = timeLeft;
        if(timeLeft < 0 || trackQuestions == questions.length - 1)
        {
            clearInterval(timer);
            endQuiz(timer);
        }    
    },1000);
}

//Show Final Score
function endQuiz(timer){
    timerEl.innerHTML = 'Time has Lapsed!';
    questionsContainer.style.display = 'none';
    endOfQuiz.style.display = 'block';
    scoreResult.innerHTML = 'Your final score is: ' + score;
}

//Go back to start of quiz when it is over
function goBack(){
    startQuiz();
}

//clear high scores
function clearHighScores(){
    scoreBoard.innerHTML='';
}
