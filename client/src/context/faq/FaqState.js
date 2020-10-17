import React, { useReducer } from 'react';
import uuid from 'uuid';
import FaqContext from './faqContext';
import faqReducer from './faqReducer';
import {
  ADD_FAQ,
  DELETE_FAQ,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FAQ,
  FILTER_FAQS,
  CLEAR_FILTER
} from '../types'

const FaqState = props => {
  const initialState = {
    faqs: [
      {
        id: 1,
        question: "When will I get paid?",
        answer: "Pay dates are on the 15th and last day of the month."
      },
      {
        id: 2,
        question: "Do I really have to work here? I hate this job!",
        answer: "Yes you must suck it up and work here!"
      }
    ],
    current: null
  };

  const [state, dispatch] = useReducer(faqReducer, initialState)

  // Add FAQ
  const addFaq = faq => {
    faq.id = uuid.v4();
    dispatch({ type: ADD_FAQ, payload: faq });
  }

  // Delete FAQ
  const deleteFaq = id => {
     dispatch({ type: DELETE_FAQ, payload: id });
  }
  // Set Current FAQ
  const setCurrent = faq => {
      dispatch({ type: SET_CURRENT, payload: faq });
  }
  // Clear Current FAQ
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  }
  // Update FAQ
  const updateFaq = faq => {
    dispatch({ type: UPDATE_FAQ, payload: faq})
  }
  // Filter FAQ

  // Clear Filter

  return (
    <FaqContext.Provider
      value={{
        faqs: state.faqs,
        current: state.current,
        addFaq,
        deleteFaq,
        setCurrent,
        clearCurrent,
        updateFaq
      }}
    >
      { props.children }
    </FaqContext.Provider>
  )
};

export default FaqState