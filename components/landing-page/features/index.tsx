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
              <span>FEATURES OF COMET</span>
            </h1>
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-12">
                  {/* <p>A social media platform for all IIITIANS</p> */}
                </div>
              </div>
            </div>
          </div>
        </Html>
      </group>
    </Section>
  );
}

export default Features;
