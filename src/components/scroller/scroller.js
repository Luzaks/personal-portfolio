import React, {useEffect} from 'react';
import { Parallax } from 'react-scroll-parallax';
import Aos from 'aos';
import 'aos/dist/aos.css';
import images from '../../images/images';
import { ScrollerCont, ImageContainer } from '../../styles/StyledComponents';

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
          <Parallax className="project-number-parallax" y={[-50, 200]} tagOuter="figure">
            {`0${index+1}`}
          </Parallax>
            <ImageContainer key={index} >
              <img
                  src={image}
                  alt={`project ${index}`} />
            </ImageContainer>
          </>
        ))}
      </ScrollerCont>
  );
};

export default Scroller;
