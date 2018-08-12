import React from 'react';
import PropTypes from 'prop-types';

export const QuizTitle = ({ content }) =>

  <h2>{content}</h2>;

QuizTitle.propTypes = {

  content: PropTypes.string.isRequired

};
