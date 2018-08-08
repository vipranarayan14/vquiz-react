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
      currentQuestionNo: 1,
      totalQuestions: quizData.questions.length,
      quizState: 'begin',
      isFirstQuestion: false,
      isLastQuestion: false,
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

      prevState.currentQuestionNo === 1 ?

      { isFirstQuestion: true } :

      { isFirstQuestion: false }

    );

    this.setState(prevState =>

      prevState.currentQuestionNo === this.state.totalQuestions ?

      { isLastQuestion: true } :

      { isLastQuestion: false }

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

      if (this.state.currentQuestionNo !== 1)

        return {

          currentQuestionNo: prevState.currentQuestionNo - 1

        }

    });

    this.setQuestionState();

  }

  handleNextClick() {

    this.setState(prevState => {

      if (this.state.currentQuestionNo !== this.state.totalQuestions)

        return {

          currentQuestionNo: prevState.currentQuestionNo + 1

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
      currentQuestionNo: 1

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
          currentQuestionNo={this.state.currentQuestionNo}
          totalQuestions={this.state.totalQuestions}
        />

        <QuizContent />

        <QuizNav 
          quizState={this.state.quizState}
          isFirstQuestion={this.state.isFirstQuestion}
          isLastQuestion={this.state.isLastQuestion}
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
