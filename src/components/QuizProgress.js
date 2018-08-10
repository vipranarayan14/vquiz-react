import React from 'react';
import PropTypes from 'prop-types';

export const QuizProgress = props =>

  (props.quizState === 'progress' || props.quizState === 'check') &&

  <div className="quiz-progress">
    <span>{props.questionId + 1}</span> / 
    <span>{props.totalQuestions}</span>
  </div>

;

QuizProgress.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
