import styles from './otp1.module.scss';
import { Button, Form } from 'react-bootstrap';

function Otp1(props) {
  function handleChange(value) {
    props.onChange(value);
  }
  if (props.form == 2) {
    return (
      <div className={styles.rightBox + ' container'}>
        <Form action="/" className="row">
          <a className={styles.purple + ' col-12'} onClick={() => handleChange(1)}>
            <span className={styles.arrow}>&#8249;</span> Sign Up
          </a>
          <Form.Group controlId="otp" className="mt-2 col-12">
            <div className={styles.browncolor}>
            <Form.Label>Enter OTP</Form.Label>
            </div>
            <Form.Control type="number" placeholder=" - - - -" className={styles.inputbox} />
          </Form.Group>

          <p className={styles.fontsmall + ' col-12'}>
            An <a className={styles.fontbrown}>OTP</a> has been sent to your email address{' '}
            <a className={styles.fontbrown}> example@mail.com </a>
            Enter <a className={styles.fontbrown}>OTP </a>
            above to verify your email and complete signup{' '}
            <br/><br/><br/><br/><br/>
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-12'}
            onClick={() => handleChange(3)}
          >
            <span className="font-weight-bold">Complete COMET Profile</span>
          </Button>
          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-12'}
            onClick={() => handleChange(3)}
          >
            <span className="font-weight-bold">Complete Guest Profile</span>
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

export default Otp1;
