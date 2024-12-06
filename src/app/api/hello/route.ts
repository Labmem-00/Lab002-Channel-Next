export async function GET(req: any) {
    return new Response(JSON.stringify({ message: 'Hello, World!' }), {
      headers: { 'Content-Type': 'application/json' },
    });
  }
  