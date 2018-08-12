import React from 'react';
import PropTypes from 'prop-types';

export const QuizScoreView = props =>

  <div className="quiz-score-view">
    <h3>Congratulations!</h3>
    <p>You got {props.score} correct out of {props.totalQuestions}</p>
  </div>

;

QuizScoreView.propTypes = {

  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,

};
