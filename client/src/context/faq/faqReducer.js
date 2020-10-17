import {
  ADD_FAQ,
  DELETE_FAQ,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_FAQ,
  FILTER_FAQS,
  CLEAR_FILTER
} from '../types'

export default (state, action) => {
  switch(action.type) {
    case ADD_FAQ:
      return {
        ...state,
        faqs: [...state.faqs, action.payload]
      };
    case UPDATE_FAQ:
      return {
        ...state,
        faqs: state.faqs.map(faq => faq.id === action.payload.id ? action.payload : faq)
      };
    case DELETE_FAQ:
      return {
        ...state,
        faqs: state.faqs.filter(faq => faq.id !== action.payload)
      };
    case SET_CURRENT:
      return {
        ...state,
        current: action.payload
      };
    case CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };
    
    default:
      return state;
  }
}