import styles from './otp1.module.scss';
import {useState} from 'react';
import { Button, Form } from 'react-bootstrap';

function Otp1(props) {
  function handleChange(value) {
    props.onChange(value);
  }
  const [ini,setIni] = useState(0);
  if (props.form == 2) {
    return (
      <div className={styles.rightBox + ' container'}>
        <Form action="/" className="row">
          <a className={styles.purple + ' col-12'} onClick={() => handleChange(1)}>
           <span className={styles.arrow}>&#8249;</span> Sign Up
          </a>
          <Form.Group controlId="otp" className="mt-2 col-12">
            <Form.Label>Enter OTP</Form.Label>
            <Form.Control type="number" placeholder=" - - - -" className={styles.inputbox} />
            <div className={styles.verifyotp}>Verify</div>
          </Form.Group>

          <p className={styles.fontsmall + ' col-12'}>
            An <a className={styles.fontgreen}>OTP</a> has been sent to your email address{' '}
            <a className={styles.fontgreen}> example@mail.com </a>
            Enter <a className={styles.fontgreen}>OTP </a>
            above to verify your email and complete signup{' '}
          </p>
          <span className={styles.fontsmall + ' col-6'}>Did not receive?</span>
          <a className={styles.font_resend+ ' col-6'}> Resend OTP </a>
          <br></br>
          <br></br>
          <br></br>
          <Form.Check
          disabled={ini===2}
          label="Sign up for COMET (INI Students Early Access)"
          type="radio"
          style={{
            color:"#858585",
            marginLeft:"10px",
            fontSize:"small"
          }}
          checked={ini==1}
          id="1"
          onClick={()=>{
            if(ini===1)
            setIni(0);
            else
            setIni(1);
          }}>
          </Form.Check>
          
          <Form.Check
          disabled={ini===1}
          label="Sign up for CodeFolio (Open Platform)"
          type="radio"
          style={{
            color:"#858585",
            marginLeft:"10px",
            marginTop:"5px",
            marginBottom:"10px",
            fontSize:"small"
          }}
          checked={ini==2}
          onClick={()=>{
            if(ini===2)
            setIni(0);
            else
            setIni(2);
          }}
          ></Form.Check>
          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-12'}
            onClick={() => handleChange(3)}
          >
            <span className="font-weight-bold">Complete Profile</span>
          </Button>
        </Form>
        <p className={styles.fontsmall + ' text-center mt-2'}>
          Already Registered to <span className="font-weight-bold">COMET</span>?{' '}
          <a className={styles.fontgreen} onClick={() => handleChange(0)}>
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
