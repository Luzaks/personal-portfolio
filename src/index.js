import ReactDOM from 'react-dom';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, Dom, useFrame } from 'react-three-fiber';
import lerp from 'lerp';
import Content from './components/Content';
import { Text } from './components/Text';
import Plane from './components/Plane';
import { Block, useBlock } from './blocks';
import state from './store/store';
import './styles/styles.css';

function Startup() {
    const ref = useRef();
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)));
    return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
}

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

function App() {
    const scrollArea = useRef();
    const onScroll = e => (state.top.current = e.target.scrollTop);
    useEffect(() => void onScroll({ target: scrollArea.current }), []);
    return (
        <>
            <Canvas className="canvas" concurrent pixelRatio={1} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
                <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
                    <Content />
                    <Startup />
                </Suspense>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
                {new Array(state.sections).fill().map((_, index) => (
                    <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
                ))}
            </div>
            <div className="frame">
                <h1 className="frame__title">Guadalupe Rangel</h1>
                <div className="frame__links">
                    <a className="frame__link" href="https://github.com/Luzaks/">
                        some link
                    </a>
                    <a className="frame__link" href="https://github.com/Luzaks/">
                        some link
                    </a>
                    <a className="frame__link" href="https://github.com/Luzaks/">
                        some link
                    </a>
                </div>
                <div className="frame__nav">
                    <a className="frame__link" href="#00" children="intro" />
                    <a className="frame__link" href="#01" children="01" />
                    <a className="frame__link" href="#02" children="02" />
                    <a className="frame__link" href="#03" children="03" />
                    <a className="frame__link" href="#04" children="04" />
                    <a className="frame__link" href="#05" children="05" />
                    <a className="frame__link" href="#06" children="06" />
                    <a className="frame__link" href="#07" children="07" />
                </div>
            </div>
        </>
    )
}

ReactDOM.render(<App />, document.getElementById("root"))
