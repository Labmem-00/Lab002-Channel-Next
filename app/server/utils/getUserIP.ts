export const getUserIP = (request: Request) => {
  const ipForwarded = () => {
    const ip = request.headers.get('x-forwarded-for');
    if (ip) {
      return ip.split(',')[0].trim(); // 获取最前面的 IP
    }
    return '';
  };

  const xRealIp = request.headers.get('x-real-ip');
  const cfConnectingIp = request.headers.get('CF-Connecting-IP');

  // 返回第一个找到的 IP 地址
  return cfConnectingIp || ipForwarded() || xRealIp || '';
};
