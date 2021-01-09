import styles from './features.module.scss';
import { Section } from '../section';
import { Html } from 'drei';

function Features({ domContent }) {
  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, 250, -100]}>
        <Html fullscreen portal={domContent}>
          <div className={styles.features}>
            <h1 className={styles.title}>
              <span>This is the features component.</span>
            </h1>
          </div>
        </Html>
      </group>
    </Section>
  );
}

export default Features;
