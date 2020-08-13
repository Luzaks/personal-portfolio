import React from 'react';
import images from '../../images/images';
import { ScrollerCont } from '../../styles/StyledComponents';

const Scroller = () => {
  return(
    <ScrollerCont>
        {images.map((image, index) => (
            <>
                <div key={index} className='img-container'>
                    <img src={image} alt={`people ${index}`} />
                </div>
                <h2>
                    Skew <span className='outline'>Scrolling</span>
                </h2>
            </>
        ))}
    </ScrollerCont>
  );
};

export default Scroller;
