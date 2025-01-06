import React, { useState } from 'react';
import styles from './auth.module.scss';
import Login from './AuthForms/Login';
import Register from './AuthForms/Register';
import { useSpring, animated } from '@react-spring/web';

enum FormType {
  // eslint-disable-next-line no-unused-vars
  Login = 'LOGIN',
  // eslint-disable-next-line no-unused-vars
  Register = 'REGISTER',
}

const Account: React.FC = () => {
  const [formType, setFormType] = useState<FormType>(FormType.Login);

  const [props, api] = useSpring(() => ({
    opacity: 1,
    config: { tension: 500, friction: 20 },
  }));

  const toggleFormType = () => {
    api.start({ opacity: 0 });

    setTimeout(() => {
      setFormType((prev) =>
        prev === FormType.Login ? FormType.Register : FormType.Login
      );
      api.start({ opacity: 1 });
    }, 200);
  };

  return (
    <div className={styles['chan-account']}>
      <div className={styles['account-form']}>
        <animated.div
          id={formType === FormType.Login ? 'chan-login' : 'chan-register'}
          className={styles['chan-form']}
          style={props}
        >
          {formType === FormType.Login ? <Login /> : <Register />}
          <div id="account-toggle" className={styles['account-toggle']}>
            <button onClick={toggleFormType}>
              <span
                className={
                  formType === FormType.Login
                    ? styles['login-toggle']
                    : styles['register-toggle']
                }
              >
                {formType === FormType.Login
                  ? '没有账号？立即注册'
                  : '已有账号，前往登录'}
              </span>
            </button>
            
          </div>
        </animated.div>
      </div>
    </div>
  );
};

export default Account;
