export async function POST(request: Request) {
  const { name, email, password, code } = await request.json();
}
