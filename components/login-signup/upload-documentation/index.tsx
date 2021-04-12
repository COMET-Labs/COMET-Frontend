import styles from './otp2.module.scss';
import { Button, Form } from 'react-bootstrap';

function UploadDocumentation(props) {
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
            <span className={styles.arrow}>&#8249;</span> Additional Documentation
          </a>
          <Form.Group controlId="formBasicEmail" className="mt-2 col-12">
            <Form.Label>
              <h6>Verify your identity, Upload Documents</h6>
              <p className={styles.fontsmall}>
              Please upload a copy of documentation issued to you by your educational institution
              (e.g. tuition receipt or student ID, employee ID) as a proof that you attend a qualified 
              educational institution
              </p>
              <p style={{fontSize:"small"}}>
                You have 7 days to upload your documentation.
                <br></br>
                Else the profiles will auto delete after 7 days.
                <br></br>
                Non Verified profiles do not get all feature access.
              </p>
              <p className={styles.fontsmall}>
                Preferred documents include:
                <br></br>
                • Transcript
                <br></br>
                • School-issued confirmation letter
                <br></br>
                • A copy of your student ID (photo ID not required)
              </p>
            </Form.Label>
            <Form.Label htmlFor="file-upload" className={styles.upload_button}>
              <img src="/upload.png" className={styles.upload}></img>
              Drag documents here, or browser
            </Form.Label>
            <input type="file" style={{visibility:"hidden"}} id="file-upload">
              
            </input>
            
          </Form.Group>

          <p className={styles.fontsmall + ' col-12'}>
            Supported file types: JPEG, PDF, PNG, GIF
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.buttonwhite + ' mt-2 col-6'}
            onClick={() => handleChange(5)}
          >
          <span className="font-weight-bold">Submit within 7 days</span>
          </Button>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-5'}
            onClick={() => handleChange(5)}
          >
          <span className="font-weight-bold">Submit</span>
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

export default UploadDocumentation;
