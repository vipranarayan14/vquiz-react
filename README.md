# vquiz

A quiz generation utility using reactjs.

## Demo

<https://vquiz.netlify.com/>

## Features

### App

-   Quiz Title
-   Start-page:
    -   Intro to the Quiz
-   In questions page:
    -   The progress of the quiz is indicated using a progress bar.
    -   Current question's number and total number of questions are displayed.
    -   Question and choices for its answer are displayed.
    -   Navigation to previous and next questions is provided.
-   In the score page,
    -   Total number of correct answers of the user is shown.
    -   A link to check the user's answers against the correct answers is be provided.  

### Development

-   The file `src/data/quiz-data.js` can be used to customize following parameters of the quiz:
    1.  Title
    2.  Intro
    3.  Questions
    4.  Choices for each question (as an Array)
    5.  Correct answer for each question (as the index of the correct answer in the Choices Array)
-   All questions can only be in multiple-choice format where only one choice can be opted as answer.
-   Answers (opted choices) can be reviewed before submitting the quiz.
-   Upon the submition of the quiz:
    -   A score page will be shown and
    -   A link to check the user's answers against the correct answers will be provided.
