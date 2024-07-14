const questions = [
    { question: "",answer: true, explanation: "Correct!", image: "q1.jpg" },
    { question: "", answer: true, explanation: "Good Job!", image: "q2.jpg" },
    { question: "", answer: false, explanation: " This is the correct version: Allah invites people to repent for any sins committed from dawn until dusk, and during the day. Not just during the day.", image: "q3.jpg" },
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const scoreElement = document.getElementById("score");
const explanationElement = document.getElementById("explanation");
const imageElement = document.getElementById("question-image");

function loadQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        questionElement.textContent = currentQuestion.question;
        imageElement.src = currentQuestion.image;
        explanationElement.textContent = "";
    } else {
        questionElement.textContent = "Game Over!";
        imageElement.style.display = "none";
        document.querySelector(".buttons").style.display = "none";
        explanationElement.textContent = "";
    }
}

function answer(isTrue) {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        if (currentQuestion.answer === isTrue) {
            score++;
        } else {
            explanationElement.textContent = currentQuestion.explanation;
        }
        currentQuestionIndex++;
        updateScore();
        setTimeout(loadQuestion, 5000); 
    }
}

function updateScore() {
    scoreElement.textContent = `Score: ${score}`;
}

// Load the first question when the page loads
loadQuestion();
