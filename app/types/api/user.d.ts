export interface RegisterRequestParam {
  name: string;
  email: string;
  code: string;
  password: string;
}

export interface LoginRequestParam {
  name: string;
  password: string;
}

export interface LoginResponseData {
  uid: number;
  name: string;
  token: string;
  roles: number;
}
