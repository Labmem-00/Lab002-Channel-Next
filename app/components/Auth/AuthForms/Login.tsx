import React from 'react';
import AuthInput from './AuthInput';

const Login: React.FC = () => {
  return (
    <form >
      <AuthInput id="username" type="text" label="用户名" required />
      <AuthInput id="password" type="password" label="密码" required />
    </form>
  );
};

export default Login;

