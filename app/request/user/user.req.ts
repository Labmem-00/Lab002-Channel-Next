import {Axios} from '../axios';
import type { LoginRequestParam, RegisterRequestParam } from '@/types/api/user';

export const chanRegister = (params: RegisterRequestParam) => {
  return Axios({
    method: 'post',
    url: '/user/register',
    data: params,
  });
};

export const chanLogin = (params: LoginRequestParam) => {
    return Axios({
      method: 'post',
      url: '/user/login',
      data: params,
    });
  };
  