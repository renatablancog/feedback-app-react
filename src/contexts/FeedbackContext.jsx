import { createContext, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import React from 'react';

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([
    {
      id: 1,
      rating: 10,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.!!!',
    },
    {
      id: 2,
      rating: 9,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae. :))',
    },
    {
      id: 3,
      rating: 8,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. consequuntur vel vitae commodi alias voluptatem est voluptatum ipsa quae.',
    },
  ]);

  //Add
  const addFeedback = (newFeedback) => {
    newFeedback.id = uuidv4();
    // console.log(newFeedback);
    setFeedback([newFeedback, ...feedback]);
  };

  //Edit
  const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false });

  const editFeedback = (item) => {
    setFeedbackEdit({ item, edit: true });
  };

  //Update
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };

  //Delete
  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((element) => element.id !== id));
    }
  };

  //Provider
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        handleDelete,
        addFeedback,
        editFeedback,
        feedbackEdit,
        updateFeedback,
      }}>
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
