import { initializeApp, getApps, getApp, cert } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore';

const app = getApps().length
  ? getApp()
  : initializeApp({
      credential: cert({
        projectId: process.env.PROJECT_ID,
        clientEmail: process.env.STATSDB_CLIENT_EMAIL,
        privateKey: process.env.STATSDB_PRIVATE_KEY.replace(/\\n/g, '\n'),
      }),
    });

export default getFirestore(app, 'stats');
