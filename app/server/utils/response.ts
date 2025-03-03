//统一的后端返回数据格式
import { NextResponse } from 'next/server';

//错误代码返回函数
export const chanError = (code: number, errorCode: number = 233) => {
  const response = new NextResponse(null, {
    status: errorCode,
  });

  response.headers.set('chan-error', code.toString());

  return response;
};
