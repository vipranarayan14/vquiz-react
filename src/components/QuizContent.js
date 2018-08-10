import React from 'react';
import PropTypes from 'prop-types';
import { QuizScorePage } from './QuizScorePage';
import { QuizStartPage } from './QuizStartPage';

export const QuizContent = props =>

  (props.quizState === 'progress' || props.quizState === 'check') ?

  <div className="quiz-content">
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

  : (props.quizState === 'begin') ? <QuizStartPage content={props.intro}/> 
  : (props.quizState === 'end') ? <QuizScorePage score={props.score} totalQuestions={props.totalQuestions}/>
  : null
;

QuizContent.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionId: PropTypes.number.isRequired,
  question: PropTypes.string.isRequired,
  choices: PropTypes.array.isRequired,
  answers: PropTypes.object.isRequired,
  handleChoiceClick: PropTypes.func.isRequired,
  intro: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired

};
