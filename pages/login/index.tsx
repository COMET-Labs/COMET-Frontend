import { useState } from 'react';
import styles from './login.module.scss';
import Layout from '../../components/layouts/default';
import LoginBox from '../../components/login-signup/login';
import RegisterBox from '../../components/login-signup/register';
import ProfileverifyBox from '../../components/login-signup/profile-verification';
import UploadDocumentation from '../../components/login-signup/upload-documentation';
import Otp1 from '../../components/login-signup/otp-1';
import Social from '../../components/login-signup/socialmedia-integration';
import ForgotPassword from '../../components/login-signup/forgot-password';

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
              {form == 4 && <UploadDocumentation form={form} onChange={handleChange}></UploadDocumentation>}
              {form == 5 && <Social form={form} onChange={handleChange}></Social>}
              {form == 6 && <ForgotPassword form={form} onChange={handleChange}></ForgotPassword>}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
