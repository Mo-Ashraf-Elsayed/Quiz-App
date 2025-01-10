import {
  questionsContainer,
  quizOptions,
  categoryMenuInput,
  questionsNumberInput,
  difficultyOptionsInput,
} from "./app.js";
export class Quiz {
  constructor(category, difficulty, questionsNum) {
    this.categoryMenu = category;
    this.difficultyOptions = difficulty;
    this.questionsNumber = questionsNum;
    this.score = 0;
  }
  async getQuiz() {
    const url = `https://opentdb.com/api.php?amount=${this.questionsNumber}&category=${this.categoryMenu}&difficulty=${this.difficultyOptions}&type=multiple`;
    let response = await fetch(url);
    if (response.ok) {
      response = await response.json();
      return response.results;
    }
  }
  endQuiz() {
    let endQuizHTML = `
            <div class="question shadow-lg col-lg-6 offset-lg-3  p-4 rounded-3 d-flex flex-column justify-content-center align-items-center gap-3 animate__animated animate__bounceIn">

                <h2 class="text-capitalize h4 text-center">The Quiz Is Finished You Score Is: ${this.score}</h2>
                <button id="tryAgain" class="btn btn-primary">Try Again</button>
            </div>`;
    questionsContainer.innerHTML = endQuizHTML;
    document.getElementById("tryAgain").addEventListener("click", () => {
      // disappearing questions and appearing form
      questionsContainer.classList.add("d-none");
      quizOptions.classList.remove("d-none");
      // to clear the form
      categoryMenuInput.value = "";
      questionsNumberInput.value = "";
      difficultyOptionsInput.value = "easy";
    });
  }
}

// const url = `https://opentdb.com/api.php?amount=10&category=21&difficulty=easy&type=multiple`
