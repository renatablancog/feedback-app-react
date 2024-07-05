import React from 'react';
import { useState } from 'react';
import Card from './shared/Card';
import Button from './shared/Button';
import RatingSelect from './RatingSelect';
import { useContext } from 'react';
import FeedbackContext from '../contexts/FeedbackContext';
import { useEffect } from 'react';

const FeedbackForm = () => {
  const [text, setText] = useState('');
  const [btnDisabled, setBtnDisabled] = useState(true);
  const [messageNumOfChar, setMessageNumOfChar] = useState('');
  const [rating, setRating] = useState(10);

  const { addFeedback, feedbackEdit, updateFeedback } =
    useContext(FeedbackContext);

  useEffect(() => {
    if (feedbackEdit.edit === true) {
      setBtnDisabled(false);
      setText(feedbackEdit.item.text);
      setRating(feedbackEdit.item.rating);
    }
  }, [feedbackEdit]);

  const handleFeedbackInput = (e) => {
    setText(e.target.value);
    if (text.trim() === '') {
      setBtnDisabled(true);
      setMessageNumOfChar('');
    } else if (text.trim().length <= 10) {
      setBtnDisabled(true);
      setMessageNumOfChar('You must at least write 10 characters');
    } else {
      setMessageNumOfChar('');
      setBtnDisabled(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text.trim().length > 10) {
      const newFeedback = {
        text,
        rating,
      };

      if (feedbackEdit.edit === true) {
        updateFeedback(feedbackEdit.item.id, newFeedback);
      } else {
        addFeedback(newFeedback);
      }

      setText('');
    }
  };

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <h2>How would you rate our service?</h2>
        <RatingSelect select={(input) => setRating(input)} />
        <div className='input-group'>
          <input
            type='text'
            placeholder='Write a review'
            onChange={handleFeedbackInput}
            value={text}
          />
          <Button type='submit' isDisabled={btnDisabled}>
            Send
          </Button>
        </div>
        {messageNumOfChar && <div className='message'>{messageNumOfChar}</div>}
      </form>
    </Card>
  );
};

export default FeedbackForm;
