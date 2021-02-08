import styles from './login.module.scss';
import { Button, Form } from 'react-bootstrap';
import { LINKEDIN_URL } from "./auth";
function LoginBox(props) {
  function handleChange() {
    props.onChange(props.form + 1);
  }
  if (props.form == 0) {
    return (
      <div className={styles.rightBox}>
        <Button className={styles.google_logo + ' mb-2'} variant="light" block>
          <img src="./img/google.svg" alt="Google" /> Login with Google
        </Button>
        <a href={LINKEDIN_URL}>
        <Button className={styles.google_logo + ' mb-2'} variant="light" block>
          <img src="./img/linkedin.svg" alt="Linkedin" className={styles.linkedin_logo}/> Login with LinkedIn
        </Button>
        </a>
        <div className="text-center"> <hr className={styles.hr}></hr> or <hr className={styles.hr}></hr></div>
        <Form action="/portfolio">
          <Form.Group controlId="formBasicEmail" className="mt-4">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="example@mail.com" className={styles.inputbox} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="* * * * * * * * *" className={styles.inputbox} />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className={styles.check}>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <a className={styles.forget + ' float-right'}>Forgot Password?</a>
          <Button variant="primary" type="submit" className={styles.button + ' mt-3'}>
           <span className="font-weight-bold">Login</span>
          </Button>
        </Form>
        <p className={styles.fontsmall + ' text-center mt-2'}>
          New to <span className="font-weight-bold">COMET</span>?{' '}
          <a className={styles.register} onClick={handleChange}>
            Register Now
          </a>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default LoginBox;
