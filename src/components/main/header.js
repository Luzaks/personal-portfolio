import React from 'react';
import { 
  Head,
  DevName,
  DevNameCont,
  DevLinks,
  DevUl,
  DevLinksElem, } from '../../styles/StyledComponents';

const Header = () => {
  return(
    <Head>
      <DevName>
        <DevNameCont>
          <span className="Me" data-text="LUZAKS">Guadalupe Rangel</span>
        </DevNameCont>
      </DevName>
      <DevLinks>
        <DevUl>
          <DevLinksElem>
            ABOUT
          </DevLinksElem>
          <DevLinksElem>
            WORK
          </DevLinksElem>    
          <DevLinksElem>
            CONTACT
          </DevLinksElem>  
        </DevUl>
      </DevLinks>
    </Head>
  );
};

export default Header;
