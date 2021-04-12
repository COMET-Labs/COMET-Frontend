import styles from './social.module.scss';
import { Button } from 'react-bootstrap';


function ProfileVerifyBox(props) {
  function handleChange(value) {
    props.onChange(value);
  }
  if (props.form == 5) {
    return (
      <div className={styles.rightBox + ' container'}>
        <div className="row">
          <div className="col-12">
            <p className={styles.purple + ' col-12'}><h5>Social Accounts Integration</h5></p>
            <p className={styles.tagline + ' col-12'}>Link all the Social Accounts to Join</p>
            <Button className={styles.google + ' mb-2'} variant="light" block>
              <img src="./img/discord-brands.svg" className={styles.logo} alt="Logo" />{' '}
              <span className={styles.fontgreen+' text-monospace'}> D i s c o r d</span>
            </Button>
            <Button className={styles.google + ' mb-2'} variant="light" block>
              <img src="./img/linkedin.svg" className={styles.logo} alt="Logo" />{' '}
              <span className={styles.fontgreen+ ' text-monospace'}> L i n k e d I n</span>
            </Button>
            <Button className={styles.google + ' mb-2'} variant="light" block>
              <img src="./img/facebook-brands.svg" className={styles.logo} alt="Logo" />{' '}
              <span className={styles.fontgreen+ ' text-monospace'}> F a c e b o o k</span>
            </Button>
            <Button className={styles.google + ' mb-2'} variant="light" block>
              <img src="./img/instagram-brands.svg" className={styles.logo} alt="Logo" />{' '}
              <span className={styles.fontgreen+ ' text-monospace'}> I n s t a g r a m</span>
            </Button>
            <p className={styles.fontsmall + ' col-12'}>
              By continuing, you agree to our <a className={styles.fontgreen}>Terms</a> and to
              receive COMET emails and updates and acknowledge that you read our{' '}
              <a className={styles.fontgreen}>Privacy Policy</a>.
            </p>

            <Button
              variant="primary"
              type="submit"
              className={styles.button + ' mt-2 col-8'}
              onClick={() => handleChange(0)}
            >
              <span className="font-weight-bold">Finish Sign Up</span>
            </Button>

            <p className={styles.fontsmall + ' text-center mt-2'}>
              Already registered to <span className="font-weight-bold">COMET</span>?{' '}
              <a className={styles.fontgreen} onClick={() => handleChange(0)}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default ProfileVerifyBox;
