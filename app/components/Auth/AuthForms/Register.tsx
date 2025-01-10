import React, { useEffect, useState } from 'react';
import AuthInput from './AuthInput';
import Axios from '@/lib/axios';

const Register: React.FC = () => {
  const [registerForm, setRegisterForm] = useState({
    username: '',
    email: '',
    code: '',
    password: '',
  });

  const [countdown, setCountdown] = useState(0); // 倒计时的状态
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000); // 每秒减少1
      return () => clearTimeout(timer); // 清除定时器
    }
  }, [countdown]);

  const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setRegisterForm((prev) => ({ ...prev, [id]: value }));
  };

  const handleSendEmail = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (countdown === 0) {
      const res = await Axios.post('/auth/mail/register', {
        email: registerForm.email,
      });
      setCountdown(60);
      console.log(res);
      if (res.data.message == 'yes') {
        alert('发送成功');
      } else {
        alert('发送失败');
      }
    }
  };

  // 表单项
  const formFields = [
    { id: 'username', type: 'text', label: '用户名' },
    { id: 'email', type: 'email', label: '电子邮箱' },
    { id: 'code', type: 'text', label: '验证码', hasButton: true },
    { id: 'password', type: 'password', label: '密码' },
  ];

  return (
    <form className="grid justify-center w-56">
      {formFields.map(({ id, type, label, hasButton }) => (
        <AuthInput
          key={id}
          id={id}
          type={type}
          label={label}
          value={registerForm[id as keyof typeof registerForm]}
          onValueChange={handleValueChange}
        >
          {hasButton && (
            <button
              type="button"
              className="border-solid border-2 rounded-md
                      text-blue-400 hover:text-white hover:bg-blue-400 
                        transition-colors duration-300"
              onClick={handleSendEmail}
            >
              {countdown > 0 ? countdown : '发送验证码'}
            </button>
          )}
        </AuthInput>
      ))}
      <button
        type="submit"
        className="grid place-items-center justify-self-center m-4 w-24 h-7 bg-sky-500 text-white rounded-full hover:bg-sky-400"
      >
        注册
      </button>
    </form>
  );
};

export default Register;
