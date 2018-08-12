export function handleNextClick(quizData) {

  return () => {

    this.setState(prevState => {

      if (this.state.questionId !== (quizData.questions.length - 1)) {

        const questionId = prevState.questionId + 1;

        return {

          questionId,
          question: quizData.questions[questionId].question,
          choices: quizData.questions[questionId].choices

        }

      }

    });

    this.setQuestionState();

  };

}
