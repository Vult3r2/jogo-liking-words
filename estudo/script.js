const questions = [
    {
        question: "Calm",
        options: ["Quiet", "Loud", "Fast", "Soft"],
        answer: "Quiet"
    },
    {
        question: "Rain",
        options: ["Sun", "Shine", "Cloud", "Thunder"],
        answer: "Thunder"
    },
    {
        question: "Love",
        options: ["Hate", "Anger", "Sadness", "Joy"],
        answer: "Joy"
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById('question');
const optionsElement = document.getElementById('options');
const nextButton = document.getElementById('nextButton');

function loadQuestion() {
    const q = questions[currentQuestion];
    questionElement.textContent = q.question;
    optionsElement.innerHTML = '';
    q.options.forEach(option => {
        const button = document.createElement('button');
        button.textContent = option;
        button.addEventListener('click', () => {
            checkAnswer(option === q.answer);
        });
        optionsElement.appendChild(button);
    });
}

function checkAnswer(isCorrect) {
    if (isCorrect) {
        alert('Resposta Correta!');
    } else {
        alert('Resposta Incorreta!');
    }
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        alert('Fim do Quiz!');
    }
}

nextButton.addEventListener('click', loadQuestion);

loadQuestion();