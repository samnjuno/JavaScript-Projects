const questions = [
    {
        question: "What is the capital of France?",
        options: ["Paris", "London", "Berlin", "Madrid"],
        answer: 0
    },
    {
        question: "What is 2 + 2?",
        options: ["3", "4", "5", "6"],
        answer: 1
    }
];

function loadQuiz() {
    const quizContainer = document.getElementById('quiz');
    questions.forEach((q, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `<p>${q.question}</p>`;
        
        q.options.forEach((option, i) => {
            questionElement.innerHTML += `
                <input type="radio" name="q${index}" value="${i}"> ${option}<br>
            `;
        });
        quizContainer.appendChild(questionElement);
    });
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="q${index}"]:checked`);
        if (selectedOption && parseInt(selectedOption.value) === q.answer) {
            score++;
        }
    });
    document.getElementById('result').textContent = `Your score: ${score}/${questions.length}`;
}

loadQuiz();
