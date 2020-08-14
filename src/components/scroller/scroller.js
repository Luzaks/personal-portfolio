import React, {useRef, useEffect} from 'react';
import images from '../../images/images';
import { ScrollerCont, ScrollApp } from '../../styles/StyledComponents';

const Scroller = () => {
    const app = useRef();
    const scrollContainer = useRef();

    useEffect(() => {
        document.body.style.height= `${scrollContainer.current.getBoundingClientRect().height}px`
    }, []);

    return(
    <ScrollApp ref={app}>
      <ScrollerCont ref={scrollContainer} >
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
    </ScrollApp>
  );
};

export default Scroller;
