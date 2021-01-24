import { useState } from 'react';
import styles from './login.module.scss';
import Layout from '../../components/layouts/default';
import LoginBox from '../../components/login-signup/login';
import RegisterBox from '../../components/login-signup/register';
import ProfileverifyBox from '../../components/login-signup/profile-verification';
import Otp2 from '../../components/login-signup/otp-2';
import Otp1 from '../../components/login-signup/otp-1';
import Social from '../../components/login-signup/socialmedia-integration';

export default function Login() {
  const [form, setForm] = useState(0);
  function handleChange(newValue) {
    setForm(newValue);
  }

  return (
    <Layout darkTheme={false}>
      <div className={styles.login_page}>
        <div className="container">
          <div className={'row'}>
            <div className={'col-12 col-md-5 col-lg-7 ' + styles.left}></div>
            <div className={'col-12 col-md-7 col-lg-5 ' + styles.right}>
              {form == 0 && <LoginBox form={form} onChange={handleChange}></LoginBox>}
              {form == 1 && <RegisterBox form={form} onChange={handleChange}></RegisterBox>}
              {form == 2 && <Otp1 form={form} onChange={handleChange}></Otp1>}
              {form == 3 && (
                <ProfileverifyBox form={form} onChange={handleChange}></ProfileverifyBox>
              )}
              {form == 4 && <Otp2 form={form} onChange={handleChange}></Otp2>}
              {form == 5 && <Social form={form} onChange={handleChange}></Social>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
