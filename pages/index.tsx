import React, { useRef, useEffect, useState, Suspense } from 'react';
import BrandIntro from '../components/landing-page/brand-intro';
import Features from '../components/landing-page/features';
import { Canvas } from 'react-three-fiber';
import { Stars } from 'drei';
import state from '../components/landing-page/state';

export default function Home() {
  const domContent = useRef();
  const scrollArea = useRef();
<<<<<<< HEAD
  const onScroll = (e) => (state.top = e.target.scrollTop);
=======
  // @ts-ignore
  const onScroll = (e) => (state.top.current = e.target.scrollTop);
>>>>>>> 771b6aa99ab583e8d88b09bc1514bb712a060380
  useEffect(() => void onScroll({ target: scrollArea.current }), []);
  return (
    <>
      <Canvas colorManagement camera={{ position: [0, 0, 120], fov: 70 }}>
        <Suspense fallback={null}>
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
          <Stars />
          <BrandIntro domContent={domContent} />
          <Features domContent={domContent} />
        </Suspense>
      </Canvas>
      <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
        <div style={{ position: 'sticky', top: 0 }} ref={domContent} />
        <div style={{ height: `${state.sections * 100}vh` }} />
      </div>
    </>
  );
}
