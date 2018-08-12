import React from 'react';
import PropTypes from 'prop-types';

export const QuizStartView = props =>

  <div className="quiz-start-view">
    <p>{props.intro}</p>
  </div>

;

QuizStartView.propTypes = {

  intro: PropTypes.string.isRequired

};
