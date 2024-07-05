import React from 'react';
import { useContext } from 'react';
import FeedbackContext from '../contexts/FeedbackContext';

const FeedbackStats = () => {
  const { feedback } = useContext(FeedbackContext);

  let average =
    feedback.reduce((acc, currentValue) => {
      return acc + currentValue.rating;
    }, 0) / feedback.length;

  average = average.toFixed(1).replace(/[.,]0$/, '');

  return (
    <div className='feedback-stats'>
      <h4>{feedback.length} Reviews </h4>
      <h4>{feedback.length > 0 && `Average Rating: ${average}`}</h4>
    </div>
  );
};

export default FeedbackStats;
