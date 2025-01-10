// import { Quiz } from "./quiz.js";
import { questions, questionsContainer, quiz } from "./app.js";
export class Questions {
  constructor(index) {
    this.questionIndex = index;
    this.question = questions[index].question;
    this.correctAnswer = questions[index].correct_answer;
    this.inCorrectAnswers = questions[index].incorrect_answers;
    this.answers = this.mixAnswers();
    this.category = questions[index].category;
    this.answerd = false;
  }
  // mixing answers to change the ranking of the coorect answer
  mixAnswers() {
    return [...this.inCorrectAnswers, this.correctAnswer].sort();
  }
  // display one question
  displayQuestion() {
    console.log(this.correctAnswer);
    questionsContainer.classList.remove("d-none");
    let cartoona = "";
    cartoona = `    <div
                            class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">
                            <div class="w-100 d-flex justify-content-between">
                                <span
                                    class="btn btn-category">${
                                      this.category
                                    }</span>
                                <span
                                    class="fs-6 btn btn-questions">${
                                      this.questionIndex + 1
                                    } of ${questions.length}</span>
                            </div>
                            <h2
                                class="text-capitalize h4 text-center">${
                                  this.question
                                }</h2>
                            <ul
                                class="choices w-100 list-unstyled m-0 d-flex flex-wrap text-center">
                                ${this.answers
                                  .map((ele) => `<li>${ele}</li>`)
                                  .join("")}
                            </ul>
                            <h2
                                class="text-capitalize text-center score-color h3 fw-bold">
                                <i class="bi bi-emoji-laughing"></i>
                                Score:${quiz.score}
                            </h2>
                        </div>`;
    questionsContainer.innerHTML = cartoona;
    // to the user can choose the answer
    let choices = document.querySelectorAll(".choices li");
    choices.forEach((choice) => {
      choice.addEventListener("click", (e) => {
        this.checkTheAnswer(e);
      });
    });
  }
  // checking if the answer correct or wrong
  checkTheAnswer(e) {
    // this if to the user cant choose all answers in one question
    if (!this.answerd) {
      if (e.target.innerHTML == this.correctAnswer) {
        console.log("if", e.target.textContent, this.correctAnswer);
        quiz.score++;
        e.target.classList.add(
          "correct",
          "animate__animated",
          "animate__flipInY"
        );
      } else {
        console.log("else", e.target.innerHTML, this.correctAnswer);
        e.target.classList.add("wrong", "animate__animated", "animate__shakeY");
      }
      /* 
        getting next question after 2 seconds from answer the current question
        to the user can see if he choose the worng answer or the correct answer
      */
      setTimeout(() => {
        this.getNextQuestions();
      }, 2000);
    }
    this.answerd = true;
  }
  //getting the next question by question index in arr of questions
  async getNextQuestions() {
    this.questionIndex++;
    if (questions.length > this.questionIndex) {
      console.log("next");
      const nextQuestion = new Questions(this.questionIndex);
      nextQuestion.displayQuestion();
      return;
    }
    console.log("end");
    quiz.endQuiz();
  }
}
