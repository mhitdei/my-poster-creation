// netlify/functions/getPoster.js

import admin from 'firebase-admin';
if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(JSON.parse(process.env.FIREBASE_PRIVATE_KEY))
  });
}

const db = admin.firestore();

export const handler = async (event) => {
  const posterId = event.queryStringParameters.id;

  if (!posterId) {
    return { statusCode: 400, body: 'Missing poster ID' };
  }

  try {
    const doc = await db.collection('posters').doc(posterId).get();
    if (!doc.exists) {
      return { statusCode: 404, body: 'Poster not found' };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ id: doc.id, ...doc.data() }),
    };
  } catch (error) {
    return { statusCode: 500, body: 'Error fetching poster.' };
  }
};
