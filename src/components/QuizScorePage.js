import React from 'react';
import PropTypes from 'prop-types';

export const QuizScorePage = props =>

  <div className="quiz-score-page">
    <h3>Congratulations!</h3>
    <p>You got {props.score} correct out of {props.totalQuestions}</p>
  </div>

;

QuizScorePage.propTypes = {

  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,

};
