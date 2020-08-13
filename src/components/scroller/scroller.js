import React, {useEffect} from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import images from '../../images/images';
import { ScrollerCont } from '../../styles/StyledComponents';

const Scroller = () => {
  useEffect(() => {
    Aos.init({
      duration: 2000
    });
  }, []);
    return(
      <ScrollerCont >
        {images.map((image, index) => (
          <>
            <div key={index} className='img-container'>
              <img
                  data-aos="fade-up"
                  data-aos-mirror="true"
                  src={image}
                  alt={`project ${index}`} />
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
