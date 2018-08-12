export function handleChoiceClick() {

  return e => {

    const questionId = e.target.getAttribute('data-questionid');
    const choice = e.target.getAttribute('value');

    this.setState(prevState => (

        {
          answers: Object.assign({},

            prevState.answers,

            prevState.answers[questionId] = choice
          )
        }

      )

    );

  };

}
