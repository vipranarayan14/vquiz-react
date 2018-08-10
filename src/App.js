import React from 'react';
import './index.css';

import { quizData } from './questions';
import { QuizTitle } from './components/QuizTitle';
import { QuizProgress } from './components/QuizProgress';
import { QuizContent } from './components/QuizContent';
import { QuizNav } from './components/QuizNav';

export class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      quizData,
      intro: quizData.intro,
      questionId: 0,
      totalQuestions: quizData.questions.length,
      quizState: 'begin',
      questionState: '',
      score: 0,
      question: quizData.questions[0].question,
      choices: quizData.questions[0].choices,
      answers: {}
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);
    this.handleChoiceClick = this.handleChoiceClick.bind(this);

  }

  setQuestionState() {

    this.setState(prevState =>

      prevState.questionId === 0 ?

      { questionState: 'first' } :

      prevState.questionId === (this.state.totalQuestions - 1) ?

      { questionState: 'last' } :

      { questionState: 'middle' }

    );

  }

  setScore() {

    let score = 0;

    Object.keys(this.state.answers).forEach(key => {

        const question = this.state.quizData.questions[key - 1];
        const userAnswer = this.state.answers[key];

        if (question) {

          score = Number(userAnswer) === Number(question.answer) ? score + 1 : score;

        }

      }

    );

    this.setState({
      score
    })

  }

  handleStartClick() {

    this.setState({

      quizState: 'progress',

    });

    this.setQuestionState();

  }

  handleBackClick() {

    this.setState(prevState => {

      const questionId = prevState.questionId - 1;

      if (this.state.questionId !== 0) {

        return {

          questionId,
          question: this.state.quizData.questions[questionId].question,
          choices: this.state.quizData.questions[questionId].choices

        }

      }

    });

    this.setQuestionState();

  }

  handleNextClick() {

    this.setState(prevState => {

      const questionId = prevState.questionId + 1;

      if (this.state.questionId !== (this.state.totalQuestions - 1)) {

        return {

          questionId,
          question: this.state.quizData.questions[questionId].question,
          choices: this.state.quizData.questions[questionId].choices

        }

      }

    });

    this.setQuestionState();

  }

  handleSubmitClick() {

    this.setState({

      quizState: 'end'

    });

    this.setScore();

  }

  handleCheckClick() {

    this.setState({

      quizState: 'check',
      questionState: 'first',
      questionId: 0,
      question: quizData.questions[0].question,
      choices: quizData.questions[0].choices,

    });

  }

  handleChoiceClick(e) {

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

  }

  render() {

    return (
      <main>

        <h1>A Quiz</h1>
        
        <QuizTitle content={this.state.quizData.title}/>

        <QuizProgress
          quizState={this.state.quizState}
          questionId={this.state.questionId}
          totalQuestions={this.state.totalQuestions}
        />

        <QuizContent 
          quizState={this.state.quizState}
          questionId={this.state.questionId}
          question={this.state.question} 
          choices={this.state.choices}
          answers={this.state.answers}
          handleChoiceClick={this.handleChoiceClick}
          intro={this.state.intro}
          score={this.state.score}
          totalQuestions={this.state.totalQuestions}
        />

        <QuizNav 
          quizState={this.state.quizState}
          questionState={this.state.questionState}
          handleStartClick={this.handleStartClick}
          handleBackClick={this.handleBackClick}
          handleNextClick={this.handleNextClick}
          handleSubmitClick={this.handleSubmitClick}
          handleCheckClick={this.handleCheckClick}
        />

      </main>
    );

  }

}
