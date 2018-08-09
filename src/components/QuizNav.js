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
      { ['progress', 'check'].includes(props.quizState) && props.questionState !== 'first' &&  back }
      { ['progress', 'check'].includes(props.quizState) && props.questionState !== 'last' &&  next }
      { props.quizState === 'progress' && props.questionState === 'last' && submit }
      { props.quizState === 'end' && check}
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
