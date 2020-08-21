import {Block, useBlock} from '../blocks';
import state from '../store/store';
import Plane from './Plane';
import {Dom} from 'react-three-fiber';
import {Text} from './Text';
import React from 'react';

function Paragraph({ image, index, offset, factor, header, aspect, text }) {
    const { contentMaxWidth: w, canvasWidth, margin, mobile } = useBlock();
    const size = aspect < 1 && !mobile ? 0.65 : 1;
    const alignRight = (canvasWidth - w * size - margin) / 2;
    const pixelWidth = w * state.zoom * size;
    const left = !(index % 2);
    const color = index % 2 ? "#D40749" : "#2FE8C3";
    return (
        <Block factor={factor} offset={offset}>
            <group position={[left ? -alignRight : alignRight, 0, 0]}>
                <Plane map={image} args={[1, 1, 32, 32]} shift={75} size={size} aspect={aspect} scale={[w * size, (w * size) / aspect, 1]} frustumCulled={false} />
                <Dom
                    style={{ width: pixelWidth / (mobile ? 1 : 2), textAlign: left ? "left" : "right" }}
                    position={[left || mobile ? (-w * size) / 2 : 0, (-w * size) / 2 / aspect - 0.4, 1]}>
                    <div tabIndex={index}>{text}</div>
                </Dom>
                <Text left={left} right={!left} size={w * 0.04} color={color} top position={[((left ? -w : w) * size) / 2, (w * size) / aspect / 2 + 0.5, -1]}>
                    {header}
                </Text>
                <Block factor={0.2}>
                    <Text opacity={0.5} size={w * 0.1} color="#1A1E2A" position={[((left ? w : -w) / 2) * size, (w * size) / aspect / 1.5, -10]}>
                        {"0" + (index + 1)}
                    </Text>
                </Block>
            </group>
        </Block>
    )
}

export default Paragraph;
