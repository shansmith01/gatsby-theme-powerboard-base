import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { typography, space, color } from 'styled-system';

const Question = styled.h4`
  &:hover {
    color: #000;
    cursor: pointer;
  }
  ${typography};
  ${color}
`;

Question.defaultProps = {
  fontSize: [2, 4, 4, 4],
  fontWeight: 700,
  mb: 5,
  color: 'primary',
};

const Answer = styled.div`
  display: none;
  ${space};
  ${color};
  ${typography};
`;

Answer.defaultProps = {
  fontSize: [2, 3, 3, 3],
  color: 'text',
  mb: 3,
};

/**
 *  A simple FAQ compnent which displays a Question as a title and on click will show the answer
 */
const QuestionAnswer = ({ question, answer }) => {
  const [showDetails, setshowDetails] = useState(false);

  return (
    <>
      <Question
        onClick={() => setshowDetails(!showDetails)}
        dangerouslySetInnerHTML={{ __html: question }}
      />
      <Answer className={showDetails ? 'showdetails' : ''}>
        <div dangerouslySetInnerHTML={{ __html: answer }} />
      </Answer>
    </>
  );
};

QuestionAnswer.propTypes = {
  /**
   * Passes a question for an FAQ in string format  */
  question: PropTypes.string,
  /**
   * Passes and answer for an FAQ in a string format
   */
  answer: PropTypes.string,
};

export default QuestionAnswer;
