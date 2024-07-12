const questions = [
    {
        question: "Por que é importante respeitar as diferenças entre as pessoas?",
        options: ["Porque todo mundo deve ser igual.", "Porque as diferenças nos tornam únicos e especiais.", "Porque é divertido fazer piadas sobre as diferenças."],
        answer: 1
    },
    {
        question: "Como podemos mostrar respeito aos nossos amigos?",
        options: ["Ignorando o que eles dizem.", "Ouvindo com atenção e sendo gentis.", "Falando apenas sobre nós mesmos."],
        answer: 1
    },
    {
        question: "Se alguém na sua escola tem uma opinião diferente da sua, o que você deve fazer?",
        options: ["Rir da opinião deles.", "Ouvir e tentar entender a perspectiva deles.", "Gritar até eles mudarem de ideia."],
        answer: 1
    },
    {
        question: "Qual é uma boa maneira de mostrar igualdade entre todos?",
        options: ["Tratar todos com a mesma bondade e respeito.", "Escolher favoritos e tratá-los melhor.", "Evitar falar com pessoas diferentes."],
        answer: 0
    },
    {
        question: "O que você deve fazer se vir alguém sendo maltratado por ser diferente?",
        options: ["Juntar-se àqueles que estão maltratando.", "Ficar em silêncio e fingir que não viu nada.", "Ajudar a pessoa e dizer aos adultos o que aconteceu."],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];

const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');

function startGame() {
    const questionCount = parseInt(document.getElementById('question-count').value);
    selectedQuestions = questions.slice(0, questionCount);
    currentQuestion = 0;
    score = 0;

    // Limpar mensagem de resultado anterior
    resultContainer.innerHTML = '';

    // Esconder container inicial
    document.querySelector('.start-container').style.display = 'none';

    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion < selectedQuestions.length) {
        const questionObj = selectedQuestions[currentQuestion];
        quizContainer.innerHTML = `
            <div class="question">${questionObj.question}</div>
            <div class="options">
                ${questionObj.options.map((option, index) => `<button onclick="checkAnswer(${index})">${option}</button>`).join('')}
            </div>
        `;
    } else {
        quizContainer.innerHTML = "";
        resultContainer.innerHTML = `Você terminou o jogo! Sua pontuação foi ${score} de ${selectedQuestions.length}.`;
        document.querySelector('.start-container').style.display = 'block';
    }
}

function checkAnswer(selected) {
    if (selected === selectedQuestions[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    loadQuestion();
}

function restartGame() {
    // Limpar mensagem de resultado anterior
    resultContainer.innerHTML = '';

    // Reiniciar o jogo
    startGame();
}

