import styles from './profileverification.module.scss';
import { Button, Form } from 'react-bootstrap';

function ProfileVerifyBox(props) {
  console.log(props.form);
  function handleChange(value) {
    props.onChange(value);
  }
  if (props.form == 3) {
    return (
      <div className={styles.rightBox + ' container'}>
        <Form action="/" className="row">
          <p className={styles.purple + ' col-12'}>Profile verification</p>
          <Form.Group controlId="formBasicEmail" className="mt-2 col-12">
            <Form.Label>Institute Name</Form.Label>
            <Form.Control type="email" placeholder="Institute Name" className={styles.inputbox} />
            <p className={styles.fontsmall + ' mt-1'}>Enter Name of the Institute you study in.</p>
          </Form.Group>
          <Form.Group controlId="formBasicEmail" className=" col-12 col-md-6">
            <Form.Label>Joining Year </Form.Label>
            <Form.Control type="email" placeholder="Joining Year" className={styles.inputbox} />
          </Form.Group>

          <Form.Group controlId="formBasicEmail" className="col-12 col-md-6">
            <Form.Label>Branch</Form.Label>
            <Form.Control type="email" placeholder="Branch" className={styles.inputbox} />
          </Form.Group>
          <Form.Group controlId="formBasicPassword" className="col-12">
            <Form.Label>Full Name as Registered in your institute</Form.Label>
            <Form.Control type="password" placeholder="Full Name" className={styles.inputbox} />
          </Form.Group>
          <p className={styles.fontsmall + ' col-12'}>
            Having trouble to find you? <a className={styles.fontgreen}>Contact us</a>{' '}
          </p>

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-12'}
            onClick={() => handleChange(4)}
          >
           <span className="font-weight-bold">Send OTP</span>
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

export default ProfileVerifyBox;
