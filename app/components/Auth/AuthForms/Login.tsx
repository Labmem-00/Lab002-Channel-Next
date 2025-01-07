import React, { useState } from 'react';
import AuthInput from './AuthInput';
import { Icon } from '@iconify/react/dist/iconify.js';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setShowPassword((prev) => !prev);
  };

  return (
    <form className="grid justify-center w-56">
      <AuthInput
        id="username"
        type="text"
        label="用户名 / UID / 邮箱"
        required
      />
      <AuthInput
        id="password"
        type={showPassword ? 'text' : 'password'}
        label="密码"
        required
      ></AuthInput>
      <div className="relative left-48 bottom-6 z-10">
        <button onClick={handleShowPassword}>
          <Icon
            className="relative bottom-1 ml-2 mr-2 w-5 h-5 hover:text-blue-400"
            icon={
              showPassword
                ? 'garden:eye-stroke-16'
                : 'pepicons-pencil:eye-closed'
            }
          ></Icon>
        </button>
      </div>
      <button className="relative left-16 ">忘记密码</button>
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
