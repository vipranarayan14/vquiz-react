import React from 'react';
import PropTypes from 'prop-types';

export const QuizProgress = ({
    quizState,
    questionId,
    totalQuestions
  }) =>

  (quizState === 'progress' || quizState === 'check') &&

  <div className="quiz-progress">
    <span>{questionId + 1}</span>
    &nbsp;/&nbsp; 
    <span>{totalQuestions}</span>
  </div>

;

QuizProgress.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
