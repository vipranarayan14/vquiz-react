import React from 'react';
import PropTypes from 'prop-types';

export const QuizNav = ({

  handleBackClick,
  handleCheckClick,
  handleStartClick,
  handleExitClick,
  handleNextClick,
  handleSubmitClick,
  questionState,
  quizState

}) => {

  const start = <button onClick={handleStartClick}>Start</button>;
  const back = <button onClick={handleBackClick}>Back</button>;
  const next = <button onClick={handleNextClick}>Next</button>;
  const submit = <button onClick={handleSubmitClick}>Submit</button>;
  const check = <button onClick={handleCheckClick}>Check Answers</button>;
  const exit = <button onClick={handleExitClick}>Exit</button>;

  return (
    <div className="quiz-nav">
      { quizState === 'begin' &&  start}
      { ['progress', 'check'].includes(quizState) && questionState !== 'first' &&  back }
      { ['progress', 'check'].includes(quizState) && questionState !== 'last' &&  next }
      { quizState === 'progress' && questionState === 'last' && submit }
      { quizState === 'check' && questionState === 'last' && exit }
      { quizState === 'end' && check}
    </div>
  );
};

QuizNav.propTypes = {

  quizState: PropTypes.string.isRequired,
  questionState: PropTypes.string.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleCheckClick: PropTypes.func.isRequired,
  handleExitClick: PropTypes.func.isRequired,

};
