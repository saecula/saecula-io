import { collection, isValid, format } from './emotions';

const isFromMe = (req) =>
  req.headers.get(process.env.HANDSHAKE_KEY) === process.env.HANDSHAKE_VALUE;

async function handler(req) {
  try {
    const body = await req.json();
    console.log('received request:', JSON.stringify(body));

    if (!isFromMe(req)) {
      console.warn('not from me');
      return new Response(null, { status: 404 });
    }

    if (!isValid(body)) {
      console.error('invalid request');
      return new Response(null, { status: 400 });
    }

    const emotionDocs = format(body);

    await Promise.all(emotionDocs.map((d) => collection.doc(d.id).set(d)));

    console.log('saved stats:', ...emotionDocs.map((d) => JSON.stringify(d)));
    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('Error saving stats:', error.toString());
    return new Response(null, { status: 500 });
  }
}

export { handler as POST };
