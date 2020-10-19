import React, { useContext } from 'react';
import PropTypes from 'prop-types'
import FaqContext from '../../context/faq/faqContext';
import AuthContext from '../../context/auth/authContext';

const FaqItem = ({ faq }) => {
  const authContext = useContext(AuthContext);
  const faqContext = useContext(FaqContext);
 
  const { deleteFaq, setCurrent, clearCurrent } = faqContext;
  const { isAuthenticated } = authContext;

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
      
      {isAuthenticated ?
      
      (<button 
        className='btn btn-dark btn-sm' 
        onClick={() => setCurrent(faq)}>
          Edit
      </button> 
      ) && (
        <button 
          className='btn btn-danger btn-sm' 
          onClick={onDelete}>
          Delete
        </button>
        ) : null 
      }
      {/* <div>
                 
          <button 
            className='btn btn-danger btn-sm' 
            onClick={onDelete}>
            Delete
          </button>
      </div> */}
    </div>
  );
};

FaqItem.propTypes = {
  faq: PropTypes.object.isRequired,
}

export default FaqItem;