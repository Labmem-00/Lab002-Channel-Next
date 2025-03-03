import {Axios} from './axios';

export const chanTemplate = (params: any) => {
  return Axios({
    method: 'post',
    url: '/...',
    data: params,
  });
};
