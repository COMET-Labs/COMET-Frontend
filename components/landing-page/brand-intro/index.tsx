import styles from './brand-intro.module.scss';
import { Section } from '../section';
import { Html, useGLTF } from 'drei';

function Model({ url }) {
  const gltf = useGLTF(url, true);
  return <primitive object={gltf.scene} dispose={null} />;
}

function BrandIntro({ domContent }) {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 500, -100]}>
        <mesh position={[0, -100, -100]}>
          <Model url="/scene.gltf" />
        </mesh>
        <Html fullscreen portal={domContent}>
          <div className={styles.brand_intro}>
            <h1 className={styles.title}>
              <span>Project COMET</span>
              <span className={styles.smalltext}>An Initiative by IIITians Network</span>
            </h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

export default BrandIntro;