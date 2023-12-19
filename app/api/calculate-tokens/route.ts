import { getTokens } from '@/utils/getTokens';
import { NextApiResponse } from 'next';


export async function POST(req: Request, res: NextApiResponse) {
  const { question } = await req.json()

  try {
    const tokens = await getTokens(question)
    return new Response(JSON.stringify({ tokensLength: tokens?.length ?? 0 }), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response(
      'Webhook handler failed. View your nextjs function logs.',
      {
        status: 400
      }
    );
  }
}
