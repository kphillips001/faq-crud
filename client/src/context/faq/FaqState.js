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
} from '../types'

const FaqState = props => {
  const initialState = {
    faqs: [
      {
        id: 1,
        question: "Who do I contact for tech support??",
        answer: "You can reach out to admin @ techsupport.com for assistance at any time!"
      },
      {
        id: 2,
        question: "What are your normal working hours?",
        answer: "Our normal working hours are Monday through Friday 9:00 am to 5:00 pm, however limited tech support hours are available outside of normal working hours. "
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