import React from 'react';
import Header from '../components/main/header';
import Portfolio from '../components/main/portfolio';
import { Default } from '../styles/StyledComponents';

const Main = () => {

  return(
    <Default>
      <Header />
      <Portfolio />
    </Default>
  );
};

export default Main;
