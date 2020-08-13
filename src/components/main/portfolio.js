import React from 'react';
import Scroller from '../scroller/scroller';
import { PortfolioCont, AboutMeCont } from '../../styles/StyledComponents';

const Portfolio = () => {
  return(
    <PortfolioCont>
      <AboutMeCont>
        <h1>
          Luzaks
        </h1>
        <span>
          portfolio
        </span>
      </AboutMeCont>
      <Scroller />
    </PortfolioCont>
  );
};

export default Portfolio;
