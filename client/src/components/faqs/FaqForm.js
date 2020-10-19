import React, { useState, useContext, useEffect } from 'react';
import FaqContext from '../../context/faq/faqContext';
import AuthContext from '../../context/auth/authContext';

const FaqForm = () => {
  const authContext = useContext(AuthContext);
  const faqContext = useContext(FaqContext);
  
  const { addFaq, updateFaq, clearCurrent, current } = faqContext;
  const { isAuthenticated } = authContext;
  
  useEffect(() => {
    if(current !== null) {
      setFaq(current);
    } else {
      setFaq({
        question: '', 
        answer: ''
      });
    }
  }, [faqContext, current])

  const [faq, setFaq] = useState({
    question: '', 
    answer: ''
  });

  const { question, answer} = faq;

  const onChange = e => setFaq({...faq, [e.target.name] : e.target.value });

  const onSubmit = e => {
    e.preventDefault();
    if (current === null) {
      addFaq(faq);
    } else {
      updateFaq(faq);
    }
    clearAll();
  };

  const clearAll = () => {
    clearCurrent();
  };

  const authLinks = (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>{
        current ? 'Update FAQ' : 'Add FAQ'} 
      </h2>
      <input type 
        type='text'
        placeholder='Question'
        name='question'
        value={question}
        onChange={onChange}
      />
      <input type 
        type='text'
        placeholder='Answer'
        name='answer'
        value={answer}
        onChange={onChange}
      />
      <div>
        <input 
          type='submit' 
          value={current ? 'Update FAQ' : 'Add FAQ'}  
          className='btn btn-primary btn-block' />
      </div>
      {current && <div>
        <button className='btn btn-light btn-block' onClick={clearAll} >
          Clear
        </button>
      </div> }
    </form>
  )

  return (
    <>
      {isAuthenticated ? authLinks : null}
    </>
  );
};

export default FaqForm

