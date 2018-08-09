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
      questionId: 0,
      totalQuestions: quizData.questions.length,
      quizState: 'begin',
      questionState: '',
      score: 0,
      question: quizData.questions[0].question,
      choices: quizData.questions[0].choices
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);

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

    this.setQuestionState();

  }

  handleCheckClick() {

    this.setState({

      quizState: 'check',
      questionId: 0

    });

    this.setQuestionState();

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
