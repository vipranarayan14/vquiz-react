import React from 'react';
import './index.css';

import { quizData } from './questions';
import { QuizTitle } from './components/QuizTitle';
import { QuizProgress } from './components/QuizProgress';
import { QuizContent } from './components/QuizContent';
import { QuizNav } from './components/QuizNav';
import { handleStartClick } from './actions/handleStartClick';
import { handleBackClick } from './actions/handleBackClick';
import { handleNextClick } from './actions/handleNextClick';
import { handleSubmitClick } from './actions/handleSubmitClick';
import { handleCheckClick } from './actions/handleCheckClick';
import { handleChoiceClick } from './actions/handleChoiceClick';

const totalQuestions = quizData.questions.length;

export class App extends React.Component {

  constructor(props) {

    super(props);

    this.state = {
      questionId: 0,
      quizState: 'begin',
      questionState: '',
      score: 0,
      question: quizData.questions[0].question,
      choices: quizData.questions[0].choices,
      userAnswers: new Map()
    };

    this.handleStartClick = handleStartClick.bind(this)();
    this.handleBackClick = handleBackClick.bind(this)(quizData);
    this.handleNextClick = handleNextClick.bind(this)(quizData);
    this.handleSubmitClick = handleSubmitClick.bind(this)();
    this.handleCheckClick = handleCheckClick.bind(this)(quizData);
    this.handleChoiceClick = handleChoiceClick.bind(this)();

  }

  setQuestionState() {

    this.setState(prevState =>

      prevState.questionId === 0 ?

      { questionState: 'first' } :

      prevState.questionId === (totalQuestions - 1) ?

      { questionState: 'last' } :

      { questionState: 'middle' }

    );

  }

  setScore() {

    let score = 0;

    Object.keys(this.state.userAnswers).forEach(key => {

        const question = quizData.questions[key];
        const userAnswer = this.state.userAnswers.get(key);

        if (question) {

          score = userAnswer === question.answer ? score + 1 : score;

        }

      }

    );

    this.setState({
      score
    })

  }

  render() {

    return (
      <main>

        <h1>A Quiz</h1>
        
        <QuizTitle content={quizData.title}/>

        <QuizProgress
          questionId={this.state.questionId}
          quizState={this.state.quizState}
          totalQuestions={totalQuestions}
        />

        <QuizContent 
          handleChoiceClick={this.handleChoiceClick}
          intro={quizData.intro}
          totalQuestions={totalQuestions}
          {...this.state}
        />

        <QuizNav 
          handleBackClick={this.handleBackClick}
          handleCheckClick={this.handleCheckClick}
          handleNextClick={this.handleNextClick}
          handleSubmitClick={this.handleSubmitClick}
          handleStartClick={this.handleStartClick}
          questionState={this.state.questionState}
          quizState={this.state.quizState}
        />

      </main>
    );

  }

}
