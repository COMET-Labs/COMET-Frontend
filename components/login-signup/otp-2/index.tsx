import styles from './otp2.module.scss';
import { Button, Form } from 'react-bootstrap';

function Otp2(props) {
  console.log(props.form);
  function handleChange(value) {
    props.onChange(value);
  } 
  if (props.form == 4) {
    return (
      <div className={styles.rightBox + ' container'}>
        <Form action="/" className="row">
          <a className={styles.purple + ' col-12'} onClick={() => handleChange(3)}>
            {' '}
            <span className={styles.arrow}>&#8249;</span> Profile verification
          </a>
          <Form.Group controlId="formBasicEmail" className="mt-2 col-12">
          <div className={styles.browncolor}>
            <Form.Label>Enter OTP</Form.Label>
            </div>
            <Form.Control type="email" placeholder=" - - - -" className={styles.inputbox} />
          </Form.Group>

          <p className={styles.fontsmall + ' col-12'}>
            An <a className={styles.fontbrown}>OTP</a> has been sent to your institute registered
            email address. Enter <a className={styles.fontgreen}>OTP</a> above to verify your
            Information.{' '}
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-12'}
            onClick={() => handleChange(5)}
          >
          <span className="font-weight-bold">Verify & Continue</span>
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

export default Otp2;
