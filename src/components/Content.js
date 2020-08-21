import {Dom, useLoader} from 'react-three-fiber';
import {LinearFilter, TextureLoader} from 'three';
import state from '../store/store';
import React, {useMemo} from 'react';
import {Block, useBlock} from '../blocks';
import {Text} from './Text';
import Plane from './Plane';

function Content() {
    const images = useLoader(
        TextureLoader,
        state.paragraphs.map(({ image }) => image)
    )
    useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images]);
    const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock();
    return (
        <>
            <Block factor={1} offset={0}>
                <Block factor={1.2}>
                    <Text left size={w * 0.08} position={[-w / 3.2, 0.5, -1]} color="#d40749">
                        LUZAKS
                    </Text>
                </Block>
                <Block factor={1.0}>
                    <Dom position={[-w / 4.5, -w * 0.08 + 0.25, -1]}>FULL STACK DEVELOPER{mobile ? <br /> : " "}PORTFOLIO</Dom>
                </Block>
            </Block>
            <Block factor={1.2} offset={6}>
                <Dom>
                    hello color="#2fe8c3"
                </Dom>
                <Dom className="bottom-left" position={[-canvasWidth / 2, -canvasHeight / 2, 0]}>
                    Hay que realizar todos tus sueños.
                </Dom>
            </Block>
            <Block factor={1.4} offset={7}>
                <Dom center>
                    hello
                </Dom>
            </Block>
            {state.paragraphs.map((props, index) => (
                <Paragraph key={index} index={index} {...props} image={images[index]} />
            ))}
            {state.stripes.map(({ offset, color, height }, index) => (
                <Block key={index} factor={-1.5} offset={offset}>
                    <Plane args={[50, height, 32, 32]} shift={-4} color={color} rotation={[0, 0, Math.PI / 8]} position={[0, 0, -10]} />
                </Block>
            ))}
        </>
    )
}

export default Content;