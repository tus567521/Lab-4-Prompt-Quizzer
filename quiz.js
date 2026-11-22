// Web Dev I - Lab Assignment 4
// Prompt Quizzer - A Quiz Game

// Quiz Questions Array
const quizQuestions = [
    {
        question: "What is the capital of France?",
        answer: "paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answer: "mars"
    },
    {
        question: "What is 5 + 7?",
        answer: "12"
    },
    {
        question: "Which is the largest ocean in the world?",
        answer: "pacific"
    },
    {
        question: "Which language is used for web development?",
        answer: "javascript"
    }
];

// Function to run the quiz
function runQuiz() {
    let score = 0;

    // Loop through questions
    for (let i = 0; i < quizQuestions.length; i++) {

        // Take user input
        const userAnswer = prompt(
            quizQuestions[i].question
        );

        // Normalize input
        const normalizedAnswer = userAnswer === null
            ? ""
            : userAnswer.toLowerCase().trim();

        // Check answer
        if (normalizedAnswer === quizQuestions[i].answer) {
            score++;
            alert("Correct!");
        } else {
            alert(
                "Wrong! Correct answer is: " +
                quizQuestions[i].answer
            );
        }
    }

    // Display final score
    alert(
        "Quiz Over! Your final score is " +
        score + " out of " + quizQuestions.length
    );
}

// Start Quiz
runQuiz();