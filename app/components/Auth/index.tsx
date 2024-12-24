import React, { useState } from 'react';
import styles from './auth.module.scss';
import Login from './AuthForms/Login';
import Register from './AuthForms/Register';

enum FormType {
  // eslint-disable-next-line no-unused-vars
  Login = 'LOGIN',
  // eslint-disable-next-line no-unused-vars
  Register = 'REGISTER',
}

const Account: React.FC = () => {
  const [formType, setFormType] = useState<FormType>(FormType.Login);

  const toggleFormType = () => {
    setFormType((currentState) =>
      currentState === FormType.Login ? FormType.Register : FormType.Login
    );
  };

  const accountHeader = (
    <div id="account-header" className={`${styles['account-header']}`}>
      <h2>{formType === FormType.Login ? '登录' : '注册'}</h2>
      <button onClick={toggleFormType}>
        {formType === FormType.Login
          ? '没有账号？立即注册 >'
          : '< 已有账号，前往登录'}
      </button>
    </div>
  );

  return (
    <div className={`${styles['chan-account']} `}>
      <div className={`${styles['account-form']}`}>
        {formType === FormType.Login ? (
          <div id="chan-login">
            {accountHeader}
            <Login></Login>
          </div>
        ) : (
          <div id="chan-register">
            {accountHeader}
            <Register></Register>
          </div>
        )}
      </div>
    </div>
  );
};

export default Account;
