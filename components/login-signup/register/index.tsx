import styles from './register.module.scss';
import { Button, Form } from 'react-bootstrap';

function RegisterBox(props) {
  function handleChange(value) {
    props.onChange(value);
  }
  if (props.form == 1) {
    return (
      <div className={styles.rightBox + ' container'}>
        <Button className={styles.google_logo + ' mb-2'} variant="light" block>
          <img src="./google.svg" alt="Google" /> Sign up with Google
        </Button>
        <div className="text-center">
          {' '}
          <hr className={styles.hr}></hr> or <hr className={styles.hr}></hr>
        </div>

        <Form action="/" className="row">
          <Form.Group controlId="formBasicEmail" className="mt-2 col-12">
            <div className={styles.brownColor}>
              <Form.Label>Email </Form.Label>
            </div>
            <Form.Control type="email" placeholder="example@mail.com" className={styles.inputbox} />
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="col-12">
            <div className={styles.brownColor}>
              <Form.Label>Password</Form.Label>
            </div>
            <Form.Control
              type="password"
              placeholder="* * * * * * * * *"
              className={styles.inputbox}
            />
          </Form.Group>

          <Form.Group controlId="firstname" className=" col-12 col-md-6">
            <div className={styles.brownColor}>
              <Form.Label>First Name </Form.Label>
            </div>
            <Form.Control type="text" placeholder="First Name" className={styles.inputbox} />
          </Form.Group>

          <Form.Group controlId="lastname" className="col-12 col-md-6">
            <div className={styles.brownColor}>
              <Form.Label>Last Name</Form.Label>
            </div>
            <Form.Control type="text" placeholder="Last Name" className={styles.inputbox} />
          </Form.Group>
          <p className={styles.fontsmall + ' col-12'}>
            By signing up you agree to our <a className={styles.fontbrown}>Terms and Condition</a>{' '}
            and <a className={styles.fontbrown}>Policy</a>
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-3 col-12'}
            onClick={() => handleChange(2)}
          >
            <span className="font-weight-bold">Sign up</span>
          </Button>
        </Form>
        <p className={styles.fontsmall + ' text-center mt-2'}>
          Already Registered to <span className="font-weight-bold">COMET</span>?{' '}
          <a className={styles.fontbrown} onClick={() => handleChange(0)}>
            Login
          </a>
        </p>
      </div>
    );
  } else {
    return <div></div>;
  }
}

export default RegisterBox;
