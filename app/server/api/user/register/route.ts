import { getUserIP } from '@/server/utils/getUserIP';
import { chanError } from '@/server/utils/response';
import { RegisterRequestParam } from '@/types/api/user';
import {
  isValidEmail,
  isValidMailConfirmCode,
  isValidName,
  isValidPassword,
} from '@/utils/valid';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const { name, email, password, code }: RegisterRequestParam =
    await req.json();
  const ip = getUserIP(req);
  
  if (
    !isValidName(name) ||
    !isValidEmail(email) ||
    !isValidPassword(password) ||
    !isValidMailConfirmCode(code)
  ) {
    return chanError(517064);
  }

  return NextResponse.json({ ip });
}
