import React from 'react';
import PropTypes from 'prop-types';

export const QuizQuestionsView = ({
    question,
    choices,
    questionId,
    answers,
    handleChoiceClick
  }) =>

  <div className="quiz-questions-view">
    
    <div className="quiz-question">
      <h3>{question}</h3>
    </div>

    <div className="quiz-choices">
      {choices.map((choice, index) => 
        <div 
          className="quiz-choice"
          key={`q${questionId}-i${index}`}
        >
          <label>
            <input 
              type="radio" 
              value={index}
              name={`q${questionId}-choice`}
              defaultChecked={index === answers.get(questionId)}
              onChange={() => handleChoiceClick(questionId, index)}
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
