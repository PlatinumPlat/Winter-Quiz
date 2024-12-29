const questions = [
    {question: "Mistletoe berries are what colour?",options: {A: "Red",B: "Green",C: "White",D: "Black"},correctAnswer: "C"},
    {question: "The city of Yakutsk receives the most snow in the world. Where is it?",options: {A: "Russia",B: "Japan",C: "Canada",D: "Iceland"},correctAnswer: "A"},
    {question: "Chionophobia means the fear of...",options: {A: "Icicles",B: "Snow",C: "Christmas",D: "Santa"},correctAnswer: "B"},
    {question: "Which city hosts the largest New Year's Eve party?",options: {A: "Rio de Janeiro",B: "New York",C: "Toronto",D: "Moscow"},correctAnswer: "A"},
    {question: "What was the highest-grossing Christmas movie of all time?",options: {A: "Elf",B: "The Polar Express",C: "Home Alone",D: "How the Grinch Stole Christmas"},correctAnswer: "C"}
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById("answer A").disabled = document.getElementById("answer B").disabled = document.getElementById("answer C").disabled = document.getElementById("answer D").disabled = false;
    document.getElementById("next").disabled = true;
    const questionObj = questions[currentQuestion];
    document.getElementById("question").textContent = questionObj.question;
    document.getElementById("answer A").textContent = "A: " + questionObj.options.A;
    document.getElementById("answer B").textContent = "B: " + questionObj.options.B;
    document.getElementById("answer C").textContent = "C: " + questionObj.options.C;
    document.getElementById("answer D").textContent = "D: " + questionObj.options.D;

    document.getElementById("result").textContent = "";
}

function checkAnswer(answer) {
    document.getElementById("next").disabled = false;
    const questionObj = questions[currentQuestion];
    
    if (answer === questionObj.correctAnswer) {
        score++; // Increase score if the answer is correct
        document.getElementById("result").textContent = "Correct!";
    } else {
        document.getElementById("result").textContent = `Wrong :( The correct answer was: ${questionObj.correctAnswer}.`;
    }
    
    currentQuestion++;
    if (currentQuestion < 5) {
        document.getElementById("answer A").disabled = document.getElementById("answer B").disabled = document.getElementById("answer C").disabled = document.getElementById("answer D").disabled = true;
        nextButton();
    } else {
        document.getElementById("answer A").disabled = document.getElementById("answer B").disabled = document.getElementById("answer C").disabled = document.getElementById("answer D").disabled = true;
        document.getElementById('next').style.display="none";
        setTimeout(showFinalScore, 1500);
    }
}


function showFinalScore() {
    document.getElementById("answer A").style.display=document.getElementById("answer B").style.display=document.getElementById("answer C").style.display=document.getElementById("answer D").style.display=document.getElementById("question").style.display="none";
    document.getElementById("result").textContent = `The Quiz is over! Your final score is: ${score} out of ${questions.length}.`;
    document.getElementById('img').classList.toggle('show');
    document.getElementById("end").classList.toggle('show');
    document.getElementById("home").addEventListener("click", function() {
        location.href='index.html';
    });
}

function nextButton() { 
    document.getElementById("next").addEventListener("click", function() {
        loadQuestion();
    });
}

if (document.getElementById("answer A").disabled === false) {
    
    document.getElementById("answer A").addEventListener("click", function() {
        checkAnswer("A");
    });

    document.getElementById("answer B").addEventListener("click", function() {
        checkAnswer("B");
    });

    document.getElementById("answer C").addEventListener("click", function() {
        checkAnswer("C");
    });

    document.getElementById("answer D").addEventListener("click", function() {
        checkAnswer("D");
    });
}

loadQuestion()