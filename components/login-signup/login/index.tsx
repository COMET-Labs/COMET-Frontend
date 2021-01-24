import styles from './login.module.scss';
import { Button, Form } from 'react-bootstrap';
import auth0 from "auth0-js";
// import params from "../../auth0-param.json";
import { useState } from "react";

function LoginBox(props) {
  function handleChange() {
    props.onChange(props.form + 1);
  }

  var auth0Client = new auth0.WebAuth({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    audience: process.env.APIAUDIENCENCE,
    redirectUri: process.env.CALLBACKURL,
    scope: process.env.SCOPE,
    responseType: "token id_token",
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sending, setSending] = useState(false);
  const [errors, setErrors] = useState({});
  const onSubmitHandler = (e: any) => {
    e.preventDefault();
    login(email, password);
  };

  const login = (username: any, password: any) => {
    let hasError = false;
    const errors: any = {};
    if (!email) {
      errors.email = "Please fill in";
      hasError = true;
    }
    if (!password) {
      errors.email = "Password is required";
      hasError = true;
    }
    setErrors(errors);
    if (hasError) {
      setSending(false);
      return;
    }
    if (errors) {
      const errorElementId = Object.keys(errors)[0];
      const element = document.getElementById(errorElementId);
      if (element) {
        element.scrollIntoView({
          block: "center",
          behavior: "smooth",
          inline: "center",
        });
        element.focus();
      }
    }
    auth0Client.client.login({
      realm:'CheckInDatabase',
      username,
      password
    },(err: any,authResult: any)=>{
      if(err){
        console.log(err)
        // alert("Error",err.description)
        return
      }
      if(authResult){
        console.log(authResult)
        // window.origin = window.location.origin
      }
     
    })
  };  
  
  if (props.form == 0) {
    return (
      <div className={styles.rightBox}>
        <Button className={styles.google_logo + ' mb-2'} variant="light" block>
          <img src="./img/google.svg" alt="Google" /> Login with Google
        </Button>
        <Button className={styles.google_logo + ' mb-2'} variant="light" block>
          <img src="./img/linkedin.svg" alt="Linkedin" className={styles.linkedin_logo}/> Login with LinkedIn
        </Button>
        <div className="text-center"> <hr className={styles.hr}></hr> or <hr className={styles.hr}></hr></div>
        <Form action="/portfolio">
          <Form.Group controlId="formBasicEmail" className="mt-4">
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="example@mail.com" className={styles.inputbox} value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}/>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="mt-2">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="* * * * * * * * *" className={styles.inputbox} value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}/>
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox" className={styles.check}>
            <Form.Check type="checkbox" label="Remember me" />
          </Form.Group>
          <a className={styles.forget + ' float-right'}>Forgot Password?</a>
          <Button variant="primary" type="submit" className={styles.button + ' mt-3'} onClick={onSubmitHandler}>
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
