import React from 'react';
import { 
  Head,
  DevName,
  DevNameCont, } from '../../styles/StyledComponents';

const Header = () => {
  return(
    <Head>
      <DevName>
        <DevNameCont>
          <span className="Me" data-text="LUZAKS">LUZAKS</span>
        </DevNameCont>
      </DevName>
    </Head>
  );
};

export default Header;
