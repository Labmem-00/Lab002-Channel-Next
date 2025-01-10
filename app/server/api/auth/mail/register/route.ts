import { sendValidCodeMail } from '@/server/utils/sendVaildCode';

export async function POST(request: Request) {
  const { email } = await request.json();
  const result = await sendValidCodeMail(request, email, 'register');
  if (result) {
    return new Response(JSON.stringify({ message:'yes'}), {
      headers: { 'Content-Type': 'application/json' },
    });
  } else {
    return new Response(JSON.stringify({ message: 'no' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
