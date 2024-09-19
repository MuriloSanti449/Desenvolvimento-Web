const questions = [
    {
        question: "Originalmente, qual era o significado do verde e amarelo da bandeira do Brasil?",
        answers: ["A Dinastia de Bragança de D.Pedro 1, e a dinastia de Habsburgo, de D.Leopoldina", "A opulência das matas e a riqueza do ouro", "A esperança e o calor", "O Oiapoque, na Amazônia, e o Chuí, no Rio Grande do Sul"],
        correctAnswer: 0
    },
    {
        question: "Quantas vezes a princesa Isabel assumiu a Coroa brasileira por seu pai, D. Pedro II, estar ausente do Brasil?",
        answers: ["Nenhuma", "7", "3", "1"],
        correctAnswer: 2
    },
    {
        question: "O que o presidente Getúlio Vargas fez depois de ser deposto da Presidência da República em 1945, ao fim da ditadura do Estado Novo?",
        answers: [
            "Desistiu da política", "Elegeu-se senador", "Tornou-se presidente da Petrobras", "Suicidou-se"],
        correctAnswer: 1
    },
    {
        question: "Quem foi a primeira personalidade a propor a mudança da capital do Brasil do Rio de Janeiro para o interior do país?",
        answers: ["O ministro José Bonifácio de Andrada e Silva", "O jornalista Hipólito José da Costa", "O historiador Francisco Adolfo de Varnhagen", "O presidente Juscelino Kubitschek"],
        correctAnswer: 1
    },
    {
        question: "Em qual desses anos o Rio de Janeiro teve dois Carnavais?",
        answers: ["Em 1889, por causa da Proclamação da República", "Em 1964, por causa do golpe de Estado", "Em 1985, por causa da redemocratização", "Em 1912, por causa da morte do Barão do Rio Branco"],
        correctAnswer: 3
    },
    {
        question: "Qual foi o único político que se elegeu presidente da República depois de passar toda a campanha eleitoral fora do Brasil?",
        answers: [
            "Epitácio Pessoa, em 1919",
            "Getúlio Vargas, em 1930",
            "Juscelino Kubitschek, em 1956",
            "Marechal Castello Branco, em 1964"
        ],
        correctAnswer: 0
    }
];

// Carrega perguntas na página
function loadQuestions() {
    const questionContainer = document.getElementById('question-container');
    questions.forEach((q, index) => {
        const div = document.createElement('div');
        div.innerHTML = `<h3>${q.question}</h3>`;
        q.answers.forEach((answer, i) => {
            div.innerHTML += `<label>
                <input type="radio" name="question${index}" value="${i}"> ${answer}
            </label><br>`;
        });
        questionContainer.appendChild(div);
    });
}

// Avalia as respostas fornecidas pelo usuário
function submitAnswers() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedAnswer && parseInt(selectedAnswer.value) === q.correctAnswer) {
            score++;
        }
    });
    document.getElementById('result').innerHTML = `Você acertou ${score} de ${questions.length}`;
}

window.onload = loadQuestions;
