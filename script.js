let questions = [];
let currentQuestionIndex = 0;
let score = 0;

// Lade die Fragen aus der JSON-Datei
fetch('fragen.json')
    .then(response => response.json())
    .then(data => {
        questions = data; // Speichere die Fragen in der questions-Variable
        displayQuestion(); // Zeige die erste Frage an
    })
    .catch(error => console.error('Fehler beim Laden der Fragen:', error));

function displayQuestion() {
    if (currentQuestionIndex < questions.length) {
        const currentQuestion = questions[currentQuestionIndex];
        // Zeige die Frage an
        document.getElementById('question-text').textContent = currentQuestion.question;
        
        // Zeige die Antwortmöglichkeiten an
        document.getElementById('answer1').textContent = currentQuestion.answers[0];
        document.getElementById('answer2').textContent = currentQuestion.answers[1];
        document.getElementById('answer3').textContent = currentQuestion.answers[2];
    } else {
        alert('Quiz beendet! Dein Punktestand ist: ' + score);
        // Wenn alle Fragen durch sind, den Punktestand anzeigen
    }
}

function checkAnswer(answerIndex) {
    const currentQuestion = questions[currentQuestionIndex];
    if (currentQuestion.answers[answerIndex] === currentQuestion.correct_answer) {
        score++;
        document.getElementById('score').textContent = score;
    }

    currentQuestionIndex++; // Zur nächsten Frage wechseln
    displayQuestion(); // Nächste Frage anzeigen
}
