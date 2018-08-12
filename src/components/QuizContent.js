import React from 'react';
import PropTypes from 'prop-types';
import { QuizStartPage } from './QuizStartView';
import { QuizQuestionsView } from './QuizQuestionsView';
import { QuizScorePage } from './QuizScoreView';

export const QuizContent = ({ quizState, ...otherProps }) =>

  <div className="quiz-content">
  {
  (quizState === 'progress' || quizState === 'check') ?
    <QuizQuestionsView {...otherProps}/>
  : (quizState === 'begin') ? <QuizStartPage {...otherProps}/> 
  : (quizState === 'end') ? <QuizScorePage {...otherProps}/>
  : null
  }
  </div>;

QuizContent.propTypes = {

  quizState: PropTypes.string.isRequired,
  intro: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};


