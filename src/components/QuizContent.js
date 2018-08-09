import React from 'react';
import PropTypes from 'prop-types';

export const QuizContent = props =>

  (props.quizState === 'progress' || props.quizState === 'check') &&

  <div>
    <h3>{props.question}</h3>
    <div>
      {props.choices.map((choice, index) => {
        return (
          <label key={index}>
            <input type="radio" value={index + 1} />
            {choice}
          </label>
        );
      })}
    </div>
  </div>

;

QuizContent.propTypes = {

  quizState: PropTypes.string.isRequired,
  currQuestionNo: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired

};
