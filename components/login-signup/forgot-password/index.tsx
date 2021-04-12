import styles from './forgotpassword.module.scss';
import { Button, Form } from 'react-bootstrap';

function ForgotPassword(props){
    function handleChange(value) {
        props.onChange(value);
    }
    if (props.form == 6) {
        return (
          <div className={styles.rightBox}>
            <a className={styles.purple + ' col-12'} onClick={() => handleChange(0)}>
            <span className={styles.arrow}>&#8249;</span> Forgot Password
            </a>
            <Form action="/">
              <Form.Group controlId="formBasicEmail" className="mt-4">
                <Form.Label>Email </Form.Label>
                <Form.Control type="email" placeholder="example@mail.com" className={styles.inputbox} />
                <div className={styles.sendotp}>Send OTP</div>
              </Form.Group>
    
              <Form.Group controlId="formBasicPassword" className="mt-2">
                <Form.Label>Enter OTP</Form.Label>
                <Form.Control type="string" placeholder="123456" className={styles.inputbox} />
                <div className={styles.sendotp}>Verify</div>
              </Form.Group>
              <span className={styles.fontmedium}>Did not receive?</span>
              <a className={styles.forget + ' float-right'}>Resend OTP</a>
              <Form.Group controlId="formBasicPassword" className="mt-2">
                <Form.Label>Enter new password</Form.Label>
                <Form.Control type="password" placeholder="* * * * * * * * *" className={styles.inputbox} />
            </Form.Group>
              <Button variant="primary" onClick={()=>{handleChange(0)}} className={styles.button + ' mt-3'}>
               <span className="font-weight-bold">Reset Password</span>
              </Button>
            </Form>
            <p className={styles.fontsmall + ' text-center mt-2'}>
              Already Registered to <span className="font-weight-bold">COMET</span>?{' '}
              <a className={styles.register} onClick={()=>{handleChange(0)}}>
                Login
              </a>
            </p>
          </div>
        );
      } else {
        return <div></div>;
      }
}

export default ForgotPassword;