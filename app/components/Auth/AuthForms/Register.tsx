import React from 'react';
import AuthInput from './AuthInput';

const Register: React.FC = ()=>{
  return (
    <form className='w-48'>
        <AuthInput id="username" type="text" label="用户名" required/>
        <AuthInput id="email" type='email' label='电子邮箱' required/>
        <AuthInput id='verific' type='text' label='验证码' required>
          <button className='whitespace-nowra' onClick={(e)=>e.preventDefault()}>发送验证码</button>
        </AuthInput>
        <AuthInput id="password" type="password" label="密码" required />
    </form>
  )
}

export default Register;