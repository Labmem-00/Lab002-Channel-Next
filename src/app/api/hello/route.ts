import { mongoDB } from '@/lib/mongoose';
import redis from '@/lib/redis';

export async function GET() {
    const key = 'my_key'
    try {
      const value = await redis.get(key)
      if(value){
        await redis.set(key,'me')
      }else{
        console.log('no data')
      }

    } catch (error) {
      console.log('something error')
    }
    await mongoDB();
    return new Response(JSON.stringify({ message: 'Hello, World!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
}
