import React from 'react';
import PropTypes from 'prop-types';

export const QuizTitle = props => 

  <h2>{props.content}</h2>;

QuizTitle.propTypes = {

  content: PropTypes.string.isRequired

};