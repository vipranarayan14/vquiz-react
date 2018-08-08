import React from 'react';
import PropTypes from 'prop-types';

export const QuizStartPage = props =>

  <p>{props.content}</p>;

QuizStartPage.propTypes = {

  content: PropTypes.string.isRequired

};
