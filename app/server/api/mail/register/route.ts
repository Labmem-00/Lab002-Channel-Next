import { NextResponse } from 'next/server';
import { sendValidCodeMail } from '@/server/utils/sendVaildCode';

export async function POST(request: Request) {
  const { email } = await request.json();
  const result = await sendValidCodeMail(request, email, 'register');

  if (result) {
    return NextResponse.json({ message: 'yes' });
  } else {
    return NextResponse.json({ message: 'no' });
  }
}

