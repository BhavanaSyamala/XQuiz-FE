const questions = [
  {
  text: "Which language is primarily used for web app development?",
  options: ["C#", "Python", "JavaScript", "Swift"],
  correct: 2
},
{
  text: "Which of the following is a relational database management system?",
  options: ["Oracle", "Scala", "Perl", "Java"],
  correct: 0
},
{
  text: "In which language is memory management provided by JVM?",
  options: ["Java", "C", "C++", "Python"],
  correct: 0
},
{
  text: "What does HTML stand for?",
  options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
  correct: 2
},
{
  text: "Which of the following is not a valid variable name in Python?",
  options: ["_myVar", "myVar2", "2myVar", "my_var"],
  correct: 2
},
{
  text: "Which of the following is not an object-oriented programming language?",
  options: ["Java", "C#", "Scala", "C"],
  correct: 3
},
{
  text: "Which tool is used to ensure code quality in JavaScript?",
  options: ["JSLint", "TypeScript", "Babel", "Webpack"],
  correct: 0
},
{
  text: "In which data structure, elements are added at one end and removed from the other?",
  options: ["Array", "Stack", "Queue", "LinkedList"],
  correct: 2
},
{
  text: "What is the primary use of the Git command 'clone'?",
  options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
  correct: 1
},
{
  text: "What does API stand for in the context of programming?",
  options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
  correct: 1
}
];

let currentQuestionIndex = 0;
let score = 0;
let selectedOption = null;

const questionElement = document.getElementById('question');
const answerList = document.getElementById('answer-list');
const submitButton = document.getElementById('submit');
const nextButton = document.getElementById('next');

function renderQuestion() {
  answerList.innerHTML = '';
  selectedOption = null;
  
  const currentQuestion = questions[currentQuestionIndex];
  questionElement.textContent = currentQuestion.text;

  currentQuestion.options.forEach((option, index) => {
      const li = document.createElement('li');
      li.className = 'option-item';

      const input = document.createElement('input');
      input.type = 'radio';
      input.name = 'answer';
      input.value = index;
      input.id = `option-${index}`;

      const label = document.createElement('label');
      label.htmlFor = `option-${index}`;
      label.textContent = option;

      li.appendChild(input);
      li.appendChild(label);
      
      li.addEventListener('click', () => {
          document.querySelectorAll('input[name="answer"]').forEach(el => el.checked = false);
          input.checked = true;
          selectedOption = index;
      });
      
      answerList.appendChild(li);
  });

  submitButton.style.display = 'block';
  nextButton.style.display = 'none';
}

function handleSubmit() {
  if (selectedOption === null) {
      alert("Please select an answer!");
      return;
  }

  const currentQuestion = questions[currentQuestionIndex];
  const allOptions = document.querySelectorAll('#answer-list li');

  allOptions[currentQuestion.correct].classList.add('correct-answer');

  if (selectedOption === currentQuestion.correct) {
      score++;
  } else {
      allOptions[selectedOption].classList.add('incorrect-answer');
  }

  submitButton.style.display = 'none';
  nextButton.style.display = 'block';
}

function handleNext() {
  currentQuestionIndex++;
  selectedOption = null;

  if (currentQuestionIndex < questions.length) {
      renderQuestion();
  } else {
      alert(`Quiz finished! Your score is ${score} out of ${questions.length}.`);
      currentQuestionIndex = 0;
      score = 0;
      renderQuestion();
  }
}

submitButton.addEventListener("click", handleSubmit);
nextButton.addEventListener("click", handleNext);

document.addEventListener('DOMContentLoaded', renderQuestion);



























// const questions = [
//     {
//         text: "Which language is primarily used for web app development?",
//         options: ["C#", "Python", "JavaScript", "Swift"],
//         correct: 2
//     },
//     {
//         text: "Which of the following is a relational database management system?",
//         options: ["Oracle", "Scala", "Perl", "Java"],
//         correct: 0
//     },
//     {
//         text: "In which language is memory management provided by JVM?",
//         options: ["Java", "C", "C++", "Python"],
//         correct: 0
//     },
//     {
//         text: "What does HTML stand for?",
//         options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
//         correct: 2
//     },
//     {
//         text: "Which of the following is not a valid variable name in Python?",
//         options: ["_myVar", "myVar2", "2myVar", "my_var"],
//         correct: 2
//     },
//     {
//         text: "Which of the following is not an object-oriented programming language?",
//         options: ["Java", "C#", "Scala", "C"],
//         correct: 3
//     },
//     {
//         text: "Which tool is used to ensure code quality in JavaScript?",
//         options: ["JSLint", "TypeScript", "Babel", "Webpack"],
//         correct: 0
//     },
//     {
//         text: "In which data structure, elements are added at one end and removed from the other?",
//         options: ["Array", "Stack", "Queue", "LinkedList"],
//         correct: 2
//     },
//     {
//         text: "What is the primary use of the Git command 'clone'?",
//         options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
//         correct: 1
//     },
//     {
//         text: "What does API stand for in the context of programming?",
//         options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
//         correct: 1
//     }
// ];

// let currentQuestionIndex = 0;
// let score = 0;

// const questionText = document.getElementById("question");
// const optionsContainer = document.getElementById("answer-list");
// const submitButton = document.getElementById("submit");
// const nextButton = document.getElementById("next");

// function loadQuestion(index) {
//     const question = questions[index];
//     questionText.textContent = question.text;
//     optionsContainer.innerHTML = "";

//     question.options.forEach((option, i) => {
//         const li = document.createElement("li");
//         const label = document.createElement("label");
//         const input = document.createElement("input");

//         input.type = "radio";
//         input.name = "answer";
//         input.value = i;

//         label.appendChild(input);
//         label.appendChild(document.createTextNode(option));
//         li.appendChild(label);
//         optionsContainer.appendChild(li);
//     });
// }

// submitButton.addEventListener("click", () => {
//     const selected = document.querySelector('input[name="answer"]:checked');
//     if (!selected) {
//         alert("Please select an answer!");
//         return;
//     }

//     const question = questions[currentQuestionIndex];
//     const selectedIndex = parseInt(selected.value);

//     // Highlight correct and wrong answers
//     const radios = document.querySelectorAll('input[name="answer"]');
//     radios.forEach((radio, i) => {
//         if (i === question.correct) {
//             radio.parentElement.style.color = "green";
//         } else if (i === selectedIndex) {
//             radio.parentElement.style.color = "red";
//         } else {
//             radio.parentElement.style.color = "black";
//         }
//         radio.disabled = true;
//     });

//     if (selectedIndex === question.correct) {
//         score++;
//     }
// });

// nextButton.addEventListener("click", () => {
//     currentQuestionIndex++;
//     if (currentQuestionIndex < questions.length) {
//         loadQuestion(currentQuestionIndex);
//     } else {
//         alert(`Your score is ${score} out of ${questions.length}`);
//     }
// });

// // Load first question
// loadQuestion(currentQuestionIndex);
