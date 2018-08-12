import React from 'react';
import PropTypes from 'prop-types';

export const QuizQuestionsView = props =>

  <div className="quiz-questions-view">
    <h3>{props.question}</h3>
      <div className="quiz-question">
        {props.choices.map((choice, index) => {
          return (
            <div 
              className="quiz-choice" 
              key={`q-${props.questionId}-i-${index}`}
              onChange={props.handleChoiceClick}
            >
              <label>
                <input 
                  type="radio" 
                  value={index + 1} 
                  name={`q-${props.questionId}-choice`}
                  data-questionid={props.questionId + 1}
                  defaultChecked={(index + 1) === Number(props.answers[props.questionId + 1])}
                />
                {choice}
              </label>
            </div>
          );
        })}
      </div>
  </div>

;

QuizQuestionsView.propTypes = {

  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
  handleChoiceClick: PropTypes.func.isRequired,

};
