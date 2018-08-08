import React from 'react';
import PropTypes from 'prop-types';

export const QuizNav = props => {

  const start = <button onClick={props.handleStartClick}>Start</button>;
  const back = <button onClick={props.handleBackClick}>Back</button>;
  const next = <button onClick={props.handleNextClick}>Next</button>;
  const submit = <button onClick={props.handleSubmitClick}>Submit</button>;
  const check = <button onClick={props.handleCheckClick}>Check Answers</button>;

  return (
    <div className="quiz-nav">
      { props.quizState === 'begin' &&  start}
      { ((props.quizState === 'progress' || props.quizState === 'check') && !props.isFirstQuestion) &&  back}
      { props.quizState === 'progress' && (!props.isLastQuestion ?  next : submit) }
      { props.quizState === 'check' && (!props.isLastQuestion ?  next : null) }
      { props.quizState === 'end' && check}
    </div>
  );
};

QuizNav.propTypes = {

  quizState: PropTypes.string.isRequired,
  isFirstQuestion: PropTypes.bool.isRequired,
  isLastQuestion: PropTypes.bool.isRequired,
  handleStartClick: PropTypes.func.isRequired,
  handleBackClick: PropTypes.func.isRequired,
  handleNextClick: PropTypes.func.isRequired,
  handleSubmitClick: PropTypes.func.isRequired,
  handleCheckClick: PropTypes.func.isRequired,

};
