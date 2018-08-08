import React from 'react';
import PropTypes from 'prop-types';

export const QuizProgress = props =>

  (props.quizState === 'progress' || props.quizState === 'check') &&

  <div>
    <span>{props.currentQuestionNo}</span> / 
    <span>{props.totalQuestions}</span>
  </div>

;

QuizProgress.propTypes = {

  quizState: PropTypes.string.isRequired,
  currentQuestionNo: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
