import ReactDOM from 'react-dom';
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, Dom, useFrame } from 'react-three-fiber';
import lerp from 'lerp';
import Content from './components/Content';
import Plane from './components/Plane';
import state from './store/store';
import './styles/styles.css';

function Startup() {
    const ref = useRef();
    useFrame(() => (ref.current.material.opacity = lerp(ref.current.material.opacity, 0, 0.025)));
    return <Plane ref={ref} color="#0e0e0f" position={[0, 0, 200]} scale={[100, 100, 1]} />
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
