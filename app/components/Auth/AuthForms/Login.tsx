import React from 'react';
import AuthInput from './AuthInput';

const Login: React.FC = () => {
  return (
    <form className="grid justify-center w-48">
      <AuthInput id="username" type="text" label="用户名 / UID / 邮箱" required />
      <AuthInput id="password" type="password" label="密码" required />
      <button
        className="grid place-items-center
        justify-self-center m-4 w-24 h-7
        bg-sky-500 text-white rounded-full hover:bg-sky-400"
      >
        登录
      </button>
    </form>
  );
};

export default Login;
