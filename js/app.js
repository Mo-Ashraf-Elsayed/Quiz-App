import { Questions } from "./question.js";
import { Quiz } from "./quiz.js";
export const quizOptions = document.getElementById("quizOptions");
export const questionsContainer = document.querySelector(
  ".questions-container"
);
export const categoryMenuInput = document.getElementById("categoryMenu");
export const difficultyOptionsInput =
  document.getElementById("difficultyOptions");
export const questionsNumberInput = document.getElementById("questionsNumber");
const startQuiz = document.getElementById("startQuiz");
export let questions;
export let quiz;
/* 
starting the quiz after choosing category , difficulty & questions number 
and getting data form getQuiz method from Quiz class
*/
startQuiz.onclick = async function () {
  let categoryValue = categoryMenuInput.value;
  let difficultyOptionsValue = difficultyOptionsInput.value;
  let questionsNumberValue = questionsNumberInput.value;
  quiz = new Quiz(categoryValue, difficultyOptionsValue, questionsNumberValue);
  questions = await quiz.getQuiz();
  quizOptions.classList.add("d-none");
  let questionsClass = new Questions(0);
  questionsClass.displayQuestion();
  console.log(questions);
};
