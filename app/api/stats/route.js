import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';
import { ulid } from 'ulid';

const app = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.STATSDB_CLIENT_EMAIL,
        privateKey: process.env.STATSDB_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });

const db = getFirestore(app, 'stats');
const emotionsCollection = db.collection('emotions');

const isFromMe = (req) =>
  req.headers.get(process.env.HANDSHAKE_KEY) === process.env.HANDSHAKE_VALUE;

async function handler(req) {
  try {
    if (!isFromMe(req)) {
      return new Response(null, { status: 404 });
    }

    const body = await req.json();

    if (!body?.user || !body?.emotion) {
      return new Response(null, { status: 400 });
    }

    await emotionsCollection.doc(ulid()).set({
      user: body.user,
      emotion: body.emotion,
    });

    return new Response(null, { status: 200 });
  } catch (error) {
    console.error('Error saving stats:', error.toString());
    return new Response(null, { status: 400 });
  }
}

export { handler as POST };
