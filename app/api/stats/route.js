import { ulid } from 'ulid';
import { collection, isValid, format } from './emotions';

const isFromMe = (req) =>
  req.headers.get(process.env.HANDSHAKE_KEY) === process.env.HANDSHAKE_VALUE;

async function handler(req) {
  try {
    if (!isFromMe(req)) {
      console.warn('not from me');

      return new Response(null, { status: 404 });
    }

    const body = await req.json();

    console.log('wat.', JSON.stringify(body));
    if (!isValid(body)) {
      console.error('invalid request:', JSON.stringify(body));

      return new Response(null, { status: 400 });
    }

    const emotionDocs = format(body);

    await Promise.all(emotionDocs.map((d) => collection.doc(ulid()).set(d)));

    console.log('saved stats:', ...emotionDocs.map((d) => JSON.stringify(d)));
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('Error saving stats:', error.toString());

    return new Response(null, { status: 500 });
  }
}

export { handler as POST };
