import React from 'react';
import PropTypes from 'prop-types';

export const QuizStartView = props =>

  <p>{props.intro}</p>;

QuizStartView.propTypes = {

  intro: PropTypes.string.isRequired

};
