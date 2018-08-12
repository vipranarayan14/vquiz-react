import React from 'react';
import PropTypes from 'prop-types';

export const QuizNav = ({

  quizState,
  questionState,
  handleStartClick,
  handleBackClick,
  handleNextClick,
  handleSubmitClick,
  handleCheckClick

}) => {

  const start = <button onClick={handleStartClick}>Start</button>;
  const back = <button onClick={handleBackClick}>Back</button>;
  const next = <button onClick={handleNextClick}>Next</button>;
  const submit = <button onClick={handleSubmitClick}>Submit</button>;
  const check = <button onClick={handleCheckClick}>Check Answers</button>;

  return (
    <div className="quiz-nav">
      { quizState === 'begin' &&  start}
      { ['progress', 'check'].includes(quizState) && questionState !== 'first' &&  back }
      { ['progress', 'check'].includes(quizState) && questionState !== 'last' &&  next }
      { quizState === 'progress' && questionState === 'last' && submit }
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

};
