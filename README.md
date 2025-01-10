# Quiz App

## Introduction

Welcome to the **Quiz App**! This app allows users to take a quiz based on different categories, difficulty levels, and the number of questions they wish to answer. The app is built using HTML, CSS, Bootstrap, and JavaScript, and utilizes the Trivia API to fetch quiz questions. The app includes various animations and features to enhance the user experience.

### Features

- Choose the category of questions
- Select the difficulty level: Easy, Medium, or Hard
- Choose the number of questions
- Display quiz questions one by one with a dynamic progress bar
- Real-time feedback on answers with visual cues for correct and incorrect answers
- Display score at the end of the quiz
- Option to try again with new quiz settings

## Technologies Used

- **HTML**: Markup structure for the app
- **CSS**: Styling for the app
- **Bootstrap**: For responsive design and layout
- **Animate.css**: For animations (display the header and the inputs when the user open the app and flip, shake effects on answers)
- **JavaScript**: Logic for handling quiz functionality
- **API**: Trivia API to fetch quiz questions dynamically
- **Modules**: For separating files This makes the code readable and maintainable

### app.js
This file is the entry point that links the HTML page to JavaScript functionality. It handles user interaction and manages the flow of the quiz. When the user clicks the "Start" button, it:
- Retrieves the values of the selected inputs (category, difficulty, number of questions)
- Initializes the **Quiz** class
- Fetches the quiz questions from the Trivia API
- Displays the first question
- Hides the initial input options and shows the quiz interface

### quiz.js
This file contains the **Quiz** class, which is responsible for:
- Fetching quiz questions from the Trivia API using the selected category, difficulty, and number of questions
- Managing the flow of the quiz (starting and finishing the quiz)

- Has the score when the quiz is finished we display the score from there

### questions.js
This file contains the **Question** class, which is responsible for:
- Displaying questions one at a time
- Shuffling the answer options to prevent the correct answer from being in the same position every time
- Handling user answer selection and providing real-time feedback:
  - If the user selects the correct answer, it turns green and flips in the X dimension (using classes in Animate.css)
  - If the user selects the wrong answer, it turns red and shakes in the Y dimension (using classes in Animate.css)
- Updating the score after each answer

## How It Works

1. **Initial Setup**: When the user opens the app, they are presented with three input fields:
   - **Category**: Dropdown to select the quiz category
   - **Difficulty**: Dropdown to select difficulty level (Easy, Medium, Hard)
   - **Number of Questions**: Input field to choose the number of questions for the quiz
   - **Start Button**: Initiates the quiz once the inputs are filled

2. **Starting the Quiz**: When the user clicks the "Start" button:
   - The app gathers the values from the inputs.
   - An instance of the **Quiz** class is created with the selected inputs passed to it.
   - The app calls a method in the **Quiz** class to fetch questions from the Trivia API based on the chosen settings.

3. **Displaying Questions**: The quiz questions are displayed one by one:
   - The category and The current question number and number of all questions are displayed at the top.
   - The score is shown at the bottom.
   - When an answer is selected, it becomes unclickable for 2 seconds while the result is shown (correct or incorrect).
   - The correct answer is highlighted in green and flips, while the wrong answer is highlighted in red and shakes.

4. **Finishing the Quiz**: When all questions have been answered, the final score is displayed. The user is then given the option to try the quiz again with different settings by clicking the "Try Again" button.

## How to Use the App

1. **Open the app**: The user will see the inputs to select the quiz settings (category, difficulty, number of questions).
2. **Fill out the inputs**: Choose the quiz category, difficulty, and the number of questions.
3. **Click "Start"**: The quiz will begin, and the questions will be displayed one by one.
4. **Answer questions**: Choose an answer for each question. Feedback will be given immediately.
5. **View Final Score**: After completing all questions, the app will display the final score and a "Try Again" button to restart with new settings.

## Code Explanation

### JavaScript Classes

#### **Quiz Class (quiz.js)**

The **Quiz** class manages the flow of the entire quiz process, including:
- Fetching questions from the Trivia API using the user's input values (category, difficulty, number of questions).
- Finishing the quiz and display the inputs again.

#### **Question Class (questions.js)**

The **Question** class is responsible for:
- Displaying each question one by one.
- Shuffling answer choices to ensure randomness.
- Providing feedback for correct or incorrect answers.
- Updating the score based on user choices.

### Animations (handled using Animate.css)

- **Displaying The Head of the app and inputs**
- **Correct Answer**.
- **Incorrect Answer**

### [LinkedIn](https://www.linkedin.com/in/mohammed-ashraf0/)
### [Live Demo](https://mo-ashraf-elsayed.github.io/Quiz-App/)
