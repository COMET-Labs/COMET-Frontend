import styles from './register.module.scss';
import { Button, Form } from 'react-bootstrap';
import auth0 from "auth0-js";
import { useState, useEffect } from "react";

function RegisterBox(props) {
  
  var auth0Client = new auth0.WebAuth({
    domain: process.env.DOMAIN,
    clientID: process.env.CLIENTID,
    audience: process.env.APIAUDIENCENCE,
    redirectUri: process.env.CALLBACKURL,
    scope: process.env.SCOPE,
    responseType: "token id_token",
  });

  const [firstName,setfirstName] = useState("");
  const [firstNamechange,setfirstNamechange] = useState(false);
  const [firstNameerr,setfirstNameerr] = useState("");
  const [lastName,setlastName] = useState("");
  const [lastNamechange,setlastNamechange] = useState(false);
  const [lastNameerr,setlastNameerr] = useState("");
  const [email,setemail] = useState("");
  const [emailchange,setemailchange] = useState(false);
  const [emailerr,setemailerr] = useState("");
  const [password,setpassword] = useState("");
  const [passwordchange,setpasswordchange] = useState(false);
  const [passworderr,setpassworderr] = useState("");
  const [signupdisable,setsignupdisable] = useState(true);

  useEffect(()=>{
    if(firstNamechange && firstName.length<3)
      setfirstNameerr("First Name should contain atleast 3 letters")
    else
      setfirstNameerr("")
  },[firstName])
  
  useEffect(()=>{
    if(lastNamechange && lastName.length<3)
      setlastNameerr("Last Name should contain atleast 3 letters")
    else
      setlastNameerr("")
  },[lastName])
  
  useEffect(()=>{
    let valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email);
    if(emailchange && !valid)
      setemailerr("Not a valid email")
    else
      setemailerr("")
  },[email])
  
  useEffect(()=>{
    let valid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,100})/.test(password);
    if(passwordchange && !valid)
      setpassworderr("Weak Password")
    else
      setpassworderr("")
  },[password])

  useEffect(()=>{
    if(emailerr || passworderr || firstNameerr || lastNameerr || !emailchange || !passwordchange || !firstNamechange || !lastNamechange)
      setsignupdisable(true)
    else
      setsignupdisable(false)
  },[emailerr,passworderr,firstNameerr,lastNameerr])

  function handleChange(value) {
    props.onChange(value);
  }

  function signUp(){
    auth0Client.signup({
      connection: 'CheckInDatabase',
      email: email,
      password:password,
      user_metadata:{firstName:firstName,lastName:lastName}
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
            <Form.Label>Email </Form.Label>
            <Form.Control type="email" placeholder="example@mail.com" className={styles.inputbox} value={email} isInvalid={emailerr.length ? true : false} onChange={ e =>{setemail(e.target.value);setemailchange(true)}} />
            <Form.Control.Feedback type="invalid">{emailerr}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="formBasicPassword" className="col-12">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="* * * * * * * * *"
              className={styles.inputbox}
              value={password}
              onChange={e => {setpassword(e.target.value);setpasswordchange(true)}}
              isInvalid={passworderr.length ? true : false}
            />
            <Form.Control.Feedback type="invalid">{passworderr}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="firstname" className=" col-12 col-md-6">
            <Form.Label>First Name </Form.Label>
            <Form.Control type="text" placeholder="First Name" className={styles.inputbox} value={firstName} isInvalid={firstNameerr.length ? true : false} onChange={e => {setfirstName(e.target.value);setfirstNamechange(true)}}/>
            <Form.Control.Feedback type="invalid">{firstNameerr}</Form.Control.Feedback>
          </Form.Group>

          <Form.Group controlId="lastname" className="col-12 col-md-6">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Last Name" className={styles.inputbox} value={lastName} isInvalid={lastNameerr.length ? true : false} onChange={e => {setlastName(e.target.value);setlastNamechange(true);}} />
            <Form.Control.Feedback type="invalid">{lastNameerr}</Form.Control.Feedback>
          </Form.Group>
          <p className={styles.fontsmall + ' col-12'}>
            By signing up you agree to our <a className={styles.fontgreen}>Terms and Condition</a>{' '}
            and <a className={styles.fontgreen}>Policy</a>
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-3 col-12'}
            onClick={() => {signUp();handleChange(2)}}
            disabled={signupdisable}
          >
            <span className="font-weight-bold">Sign up</span>
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

export default RegisterBox;
