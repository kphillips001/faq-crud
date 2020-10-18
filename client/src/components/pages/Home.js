import React, { useContext, useEffect } from 'react';
import Faqs from '../faqs/Faqs';
import FaqForm from '../faqs/FaqForm';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <div>
        <Faqs />
      </div>
      <div>
        <FaqForm />
      </div>
    </div>
  )
}

export default Home;