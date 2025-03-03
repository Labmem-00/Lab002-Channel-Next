import axios, {
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';
import { useChanStoreBase } from '@/store/persist/@chaner';

//不设置绝对baseURL，默认在当前路径寻找api，设置了的话生产环境会出现莫名的CORS错误
const Axios = axios.create({
  baseURL: '/api',
  timeout: 15000,
});

const controllers: { [key: string]: AbortController } = {}; //缓存当前请求的 AbortController 实例

Axios.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = useChanStoreBase.getState().chanAccessToken;
    const key = `${config.method}:${config.url?.split('?')[0]}`;

    // 自动添加 Token
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // 仅对 GET 请求去重
    if (config.method === 'get' && key && controllers[key]) {
      controllers[key].abort();
      delete controllers[key];
    }

    // 绑定新的 AbortController
    const controller = new AbortController();
    config.signal = controller.signal;
    if (config.method === 'get' && key) {
      controllers[key] = controller;
    }

    return config;
  },
  (error) => {
    console.error('请求错误:', error);
    return Promise.reject(error);
  }
);

Axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (axios.isCancel(error)) {
      return new Promise(() => {}); // 返回一个 pending 状态的 Promise，防止抛出错误
    }
    return Promise.reject(error);
  }
);

// 中断请求器
const abortRequests = (): void => {
  Object.values(controllers).forEach((controller) => controller.abort());
  Object.keys(controllers).forEach((url) => delete controllers[url]); // 清空控制器对象
};

export { Axios, abortRequests };
