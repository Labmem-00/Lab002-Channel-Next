import React, { useState } from 'react';
import AuthInput from './AuthInput';
import { Icon } from '@iconify/react/dist/iconify.js';
import {Axios} from '@/request/axios';
import { funMessage } from '@/components/Function/funMessage';

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginForm, setLoginForm] = useState({
    name: '',
    password: '',
  });

  const handleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const { id, value } = e.target;
    setLoginForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await Axios.get('/hello')
    alert(res.data.message)
    funMessage('666', 'info');
  };

  return (
    <form className="grid justify-center w-56" onSubmit={handleLogin}>
      <AuthInput
        id="username"
        type="text"
        label="用户名 / UID / 邮箱"
        value={loginForm.name}
        onValueChange={handleValueChange}
      />
      <AuthInput
        id="password"
        type={showPassword ? 'text' : 'password'}
        label="密码"
        value={loginForm.password}
        onValueChange={handleValueChange}
      ></AuthInput>
      <div className="relative left-48 bottom-6 z-10">
        <button type="button" onClick={handleShowPassword}>
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
