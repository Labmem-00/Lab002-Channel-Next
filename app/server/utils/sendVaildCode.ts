import { createTransport } from 'nodemailer';
import { getUserIP } from './getUserIP';
import redis from '../lib/redis';

type MailType = 'register' | 'forget' | 'reset';

// 生成验证码
const createRandomCode = (length: number) => {
  const charset = '023456789abcdefghjkmnopqrstuvwxyzABCDEFGHJKLMNOPQRSTUVWXYZ';
  let code = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    code += charset[randomIndex];
  }
  return code;
};

// 邮件内容生成
const codeMailContent = (type: MailType, code: string) => {
  if (type === 'register') {
    return `@chan Account\n\nRegister Code\n\nYour verification code is:\n${code}\n\nPlease use this code to complete your registration`;
  }
  return '';
};

// 发送验证码邮件
export const sendValidCodeMail = async (
  request: Request,
  email: string,
  type: MailType
) => {
  const ip = getUserIP(request); // 获取用户 IP
  console.log(ip);

  // 限制特定邮件和 IP 的发送频率
  const limitEmail = await redis.get(`limit:email:${email}`);
  const limitIP = await redis.get(`limit:ip:${ip}`);
  
  if (limitEmail === '1' || limitIP === '1') {
    return false;
  }

  const code = createRandomCode(6);

  await redis.set(email, code, 'EX', 5 * 60);
  // 限制邮件和 IP 的发送频率，设置限制时间为 30 秒
  await redis.set(`limit:email:${email}`, '1', 'EX', 60); // 每 30 秒限制一次邮件
  await redis.set(`limit:ip:${ip}`, '1', 'EX', 60); // 每 30 秒限制一次 IP
  return true;
  //   await redis.set(email, code, 'EX', 5 * 60); // 验证码有效期 5 分钟
  //   await redis.set(`limit:email:${email}`, code, 'EX', 30);
  //   await redis.set(`limit:ip:${ip}`, code, 'EX', 30);

  //   const transporter = createTransport({
  //     service: 'qq',
  //     port: 465,
  //     secure: true,
  //     auth: {
  //       user: process.env.CHAN_EMAIL_ACCOUNT,
  //       pass: process.env.CHAN_EMAIL_PASSWORD,
  //     },
  //   });

  //   const mailOptions = {
  //     from: `labmem.chat <${process.env.CHAN_EMAIL_ACCOUNT}>`,
  //     sender: process.env.CHAN_EMAIL_ACCOUNT,
  //     to: email,
  //     subject: '@chan verification code',
  //     text: codeMailContent(type, code),
  //   };

  //   try {
  //     const info = await transporter.sendMail(mailOptions);
  //     console.log(`验证邮件已发送: ${info.messageId}`);
  //     return true
  //   } catch (error) {
  //     console.error('发送失败:', error);
  //     return null
  //   }
};
