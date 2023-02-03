const quizData = [
  {
    question: `What is part of a database that holds only one type of information?
    `,
    a: "Report",
    b: "Field",
    c: "Record",
    d: "File",
    correct: "b"
  },
  {
    question: `
    'OS' computer abbreviation usually means ?`,
    a: `Order of Significance`,
    b: `Open Software`,
    c: `Operating System`,
    d: `Optical Sensor`,
    correct: "c"
  },
  {
    question: `'.MOV' extension refers usually to what kind of file?`,
    a: `Image file`,
    b: `Animation/movie file`,
    c: `Audio file`,
    d: `MS Office document`,
    correct: "b"
  },
  {
    question: `The members of the Rajya Sabha are elected by`,
    a: `
    the people`,
    b: `
    Lok Sabha`,
    c: `elected members of the legislative assembly`,
    d: `elected members of the legislative council`,
    correct: "c"
  },
  {
    question: `The power to decide an election petition is vested in the`,
    a: `Parliament`,
    b: `Supreme Court`,
    c: `High courts`,
    d: `Election Commission`,
    correct: "c"
  },
];

const questionEl = document.getElementById("question");

const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const a_text = document.getElementById("a_text");

const btn = document.getElementById("submit");
const quiz = document.getElementById("quiz");

const answerEl = document.querySelectorAll(".answer");

let currentQuiz = 0;
// let answer=undefined;
let score = 0;

function loadquiz() {
  deselectAns();
  const currentQuizData = quizData[currentQuiz];

  questionEl.innerHTML = `${currentQuiz + 1}. ` + currentQuizData.question;

  a_text.innerHTML = currentQuizData.a;
  b_text.innerHTML = currentQuizData.b;
  c_text.innerHTML = currentQuizData.c;
  d_text.innerHTML = currentQuizData.d;
}

btn.addEventListener("click", () => {
  const answer = getSelected();
  console.log(answer);

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < quizData.length) {
      loadquiz();
    } else {
      quiz.innerHTML = `<h2>your Score is ${score} out of ${quizData.length}</h2>
      
      <button onClick="location.reload()">Reload Quiz</button>
      `;
    }
  }

  console.log(score);
});

loadquiz();

function getSelected() {
  let answer = undefined;

  answerEl.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });

  return answer;
}

function deselectAns() {
  answerEl.forEach((answerEl) => {
    answerEl.checked = false;
  });
}
