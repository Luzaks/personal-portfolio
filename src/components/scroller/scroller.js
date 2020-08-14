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
        {images.map((image) => (
          <>
          <Parallax className="project-number-parallax" y={[-40, 300]} tagOuter="figure">
            {image.name}
          </Parallax>
          <Parallax className="image-parallax" y={[100, 50]} tagOuter="figure">
            <ImageContainer key={image.name} >
              <img
                  src={image.image}
                  alt={`project ${image.name}`} />
            </ImageContainer>
          </Parallax>
          </>
        ))}
      </ScrollerCont>
  );
};

export default Scroller;
