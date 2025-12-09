const quizCard = [
    {
        question: "Which of the following is one of the New Seven Wonders of the World?",
        a: "The Great Barrier Reef",
        b: "Machu Picchu",
        c: "The Eiffel Tower",
        d: "Mount Rushmore",
        correct: "b"
    },
    {question: "Where is the ancient city of Petra located?",
        a: "Egypt",
        b: "Jordan",
        c: "Greece",
        d: "Turkey",
        correct: "b"
    },
    {
        question: "Which wonder was built as a mausoleum for Mughal emperor Shah Jahan's wife?",
        a: "Angkor Wat",
        b: "The Parthenon",
        c: "Taj Mahal",
        d: "Chichen Itza",
        correct: "c"
    },
    {
        question: "Christ the Reedemer, one of the Seven World Wonders, is located in which city?",
        a: "Lisbon",
        b: "Buenos Aires",
        c: "Rio de Janeiro",
        d: "Santagio",
        correct: "c"
    }
];

const quiz = document.getElementById('questionCard');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submitBtn');

let currentQuiz = 0;
let score = 0; 

loadQuiz();

function loadQuiz(){

    deselectAnswer();
    
    const currentQuizData = quizCard[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function deselectAnswer(){
    answerEls.forEach(answerEl => answerEl.checked = false);
};

function getSelected(){
    let answer;

    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === quizCard[currentQuiz].correct){
            score++
        }
        currentQuiz++

        if(currentQuiz < quizCard.length){
            loadQuiz()
        }else{
            quiz.innerHTML = `<h1> You answered ${score}/${quizCard.length} questions correctly</h1>
            
            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})