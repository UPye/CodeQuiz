
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Javascript Quiz</title>
    <link rel= "stylesheet" href="assets\style.css">
</head>

<body>
    <header class = "header-container">
        <div class ="header-style">
            <div class="scoring ">
                <button id = "see-scores">View Highscores</button>
            </div>
            <div class="timer">
                Time
            </div>
        </div>
    </header>

    <main id= main-quiz>
        <div class="quiz-start">
            <h1> Coding Challenge Quiz</h1>
            <div id = "intro-text">
                <p>
                    Let's test your knowledge with JavaScript! This will be a timed quiz. </br> For every wrong answer, you will be penalized 10 seconds. </br> Click the button below to begin. Good luck!
                </p>
                <button id="btn-start">Begin Quiz</button>
            </div>    
        </div>

    <!--BEGIN MAIN -->
    <main>
        <section class="Container" id="Contain">
            <!-- TOP DIV CONTENT [TITLE/QUESTION]-->
            <div class="div" id="row-top">
                <h1 class="switch" id="switch-out">Coding Quiz Challenge</h1>
            </div>
            <!--MIDDLE DIV CONTENT [OPENING PARAGRAPH/POSSIBLE ANSWERS]-->
            <div class="div" id="row-middle">
                <p class="p-style" id="question-li">Try to answer the follwing code-related question with the time
                    limit. Keep in mind that incorrect answers will penalize your score-time by 10 seconds</>
            </div>
            <!--BOTTOM DIV CONTENT [START/RESULTS]-->
            <div class="div" id="row-bottow">
                <button onclick="buttonClick(1)" class="btn-start" id="button-start">Start Quiz</button>
            </div>
            <!---->
        </section>
        <section onclick="buttonClick" class="btn-start" id="intquestion">
            <div class="questions-list style-1">
                <div class="style-3"></div>
                <div class="style-6">
                    <ul class="questions-ul">
                        <h2 id="question">Here is the question</h2>
                        <li class="questions-li"><button id="answer-1" value="0" type="button"
                                class="ans-btn">Answer-1</button></li>
                        <li class="questions-li"><button id="answer-2" value="1" type="button"
                                class="ans-btn">Answer-2</button></li>
                        <li class="questions-li"><button id="answer-3" value="2" type="button"
                                class="ans-btn">Answer-3</button></li>
                        <li class="questions-li"><button id="answer-4" value="3" type="button"
                                class="ans-btn btn-style-1">Answer-4</button></li>
                    </ul>
                    <div id="correct-wrong" class="font-weight-light font-italic">
                        <hr>
                        <!-- Correct or Wrong will be added via JS -->
                    </div>
                </div>
            </div>
        </section>
        <section id="final-score">
            <div class="style-1">
                <div class="style-3"></div>
                <div class="style-6">
                    <h2>All Done!</h2>
                    <p>Your final score is: <span id="score" class="style-10">0</span></p>
                    <p>Enter initials: <span class="style-11"><input placeholder="initials" id="initials"></span>
                        <button id="submit-score" class="submit-score-btn btn-style-1">Submit</button>
                    </p>
                </div>
            </div>
        </section>
