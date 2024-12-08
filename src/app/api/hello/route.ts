import { mongoDB } from '@/lib/mongoose';

export async function GET() {
    await mongoDB();
    return new Response(JSON.stringify({ message: 'Hello, World!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
}
