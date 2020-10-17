import React, { useContext } from 'react';
import FaqItem from './FaqItem';
import FaqContext from '../../context/faq/faqContext'

const Faqs = () => {
  const faqContext = useContext(FaqContext);

  const { faqs } = faqContext;

  return (
    <>
      {faqs.map(faq => (
        <FaqItem key={faq.id} faq={faq} />
      ))}
    </>
  )
}

export default Faqs
