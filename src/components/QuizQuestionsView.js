import React from 'react';
import PropTypes from 'prop-types';

export const QuizQuestionsView = props =>

  <div className="quiz-questions-view">
    <div className="quiz-question">
      <h3>{props.question}</h3>
    </div>

    <div className="quiz-choices">
      {props.choices.map((choice, index) => 
        <div 
          className="quiz-choice"
          key={`q${props.questionId}-i${index}`}
        >
          <label>
            <input 
              type="radio" 
              value={index}
              name={`q${props.questionId}-choice`}
              defaultChecked={index === Number(props.answers.get(props.questionId))}
              onChange={() => props.handleChoiceClick(props.questionId, index)}
            />
            {choice}
          </label>
        </div>
      )}
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
