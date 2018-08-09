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
      currQuestionNo: 1,
      totalQuestions: quizData.questions.length,
      quizState: 'begin',
      questionState: '',
      score: 0,
      question: '',
      choices: []
    };

    this.handleStartClick = this.handleStartClick.bind(this);
    this.handleBackClick = this.handleBackClick.bind(this);
    this.handleNextClick = this.handleNextClick.bind(this);
    this.handleSubmitClick = this.handleSubmitClick.bind(this);
    this.handleCheckClick = this.handleCheckClick.bind(this);

  }

  setQuestionState() {

    this.setState(prevState =>

      prevState.currQuestionNo === 1 ?

      { questionState: 'first' } :

      prevState.currQuestionNo === this.state.totalQuestions ?

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

      if (this.state.currQuestionNo !== 1)

        return {

          currQuestionNo: prevState.currQuestionNo - 1

        }

    });

    this.setQuestionState();

  }

  handleNextClick() {

    this.setState(prevState => {

      if (this.state.currQuestionNo !== this.state.totalQuestions)

        return {

          currQuestionNo: prevState.currQuestionNo + 1

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
      currQuestionNo: 1

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
          currQuestionNo={this.state.currQuestionNo}
          totalQuestions={this.state.totalQuestions}
        />

        <QuizContent />

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
