import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Question = styled.h4`
  color: ${props => props.theme.secondaryColor};
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
  font-weight: bold;
  &:hover {
    color: #000;
    cursor: pointer;
  }
`;

const Answer = styled.div`
  display: none;
  margin-bottom: 2rem;
  color: ${props => props.theme.lightGreyText};
`;
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
   * Passes a question for an FAQ in string format - Sourced in DatoCMS */
  question: PropTypes.string,
  /**
   * Passes and answer for an FAQ in a string format - Sourced in DatoCMS
   */
  answer: PropTypes.string,
};

export default QuestionAnswer;
