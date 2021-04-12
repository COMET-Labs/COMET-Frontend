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
          <p className={styles.purple + ' col-12'}>Profile Verification</p>
          <Form.Group controlId="formBasicEmail" className="mt-2 col-12">
            <Form.Label>Name of the Institute</Form.Label>
            <Form.Control type="email" placeholder="Name of the Institute" className={styles.inputbox} />
            <p className={styles.fontsmall2 + ' col-12'}>
              Having trouble to find your institute? <a className={styles.fontgreen}>Contact Us</a>{' '}
            </p>
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
            <Form.Label>Full Name as Registered in your Institute</Form.Label>
            <Form.Control type="password" placeholder="Full Name" className={styles.inputbox} />
          </Form.Group>
          

          <Button
            variant="primary"
            type="submit"
            className={styles.button + ' mt-2 col-8'}
            onClick={() => handleChange(4)}
          >
           <span className="font-weight-bold">Verify Identity</span>
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
