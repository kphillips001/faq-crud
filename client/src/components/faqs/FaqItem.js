import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import FaqContext from '../../context/faq/faqContext';

const FaqItem = ({ faq }) => {
  const faqContext = useContext(FaqContext);
  const AuthContext = useContext(AuthContext);
  const { deleteFaq, setCurrent, clearCurrent } = faqContext;

  const { id, question, answer } = faq;

  const onDelete = () => {
    deleteFaq(id);
    clearCurrent();
  }

  return (
    <div className='card bg-light'>
      <h3 className='text-primary text-left'>
        {faq.question}
      </h3>
        {faq.answer}
      <h4>
      </h4>
      <div>
          <button
            className='btn btn-dark btn-sm'
            onClick={() => setCurrent(faq)}
          >
            Edit
          </button>
          <button 
            className='btn btn-danger btn-sm' 
            onClick={onDelete}>
            Delete
          </button>
      </div>
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
}

export default FaqItem;
