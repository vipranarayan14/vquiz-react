export function handleChoiceClick() {

  return (questionId, choiceId) => {

    this.setState(prevState => ({
      answers: prevState.answers.set(questionId, choiceId)
    }));

  };

}
