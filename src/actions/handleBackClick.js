export function handleBackClick(quizData) {

  return () => {

    this.setState(prevState => {

      const questionId = prevState.questionId - 1;

      if (this.state.questionId !== 0) {

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
