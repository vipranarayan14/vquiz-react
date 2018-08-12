import React from 'react';
import PropTypes from 'prop-types';

export const QuizQuestionsView = ({
    answer,
    question,
    choices,
    questionId,
    userAnswers,
    handleChoiceClick,
    showAnswers
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
              defaultChecked={index === userAnswers.get(questionId)}
              onChange={() => handleChoiceClick(questionId, index)}
            />
            {choice}
          </label>
        </div>
      )}
    </div>

    { showAnswers &&
      <div className="quiz-answer">
        <p><b>Right Answer:</b> {choices[answer]}</p>
      </div>
    }

  </div>

;

QuizQuestionsView.propTypes = {

  answer: PropTypes.number,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  userAnswers: PropTypes.object.isRequired,
  handleChoiceClick: PropTypes.func.isRequired,
  showAnswers: PropTypes.bool

};
