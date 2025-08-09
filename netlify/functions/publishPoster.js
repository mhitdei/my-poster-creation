import admin from 'firebase-admin';

// This guard prevents re-initializing the app on every function call in a warm environment
if (!admin.apps.length) {
  try {
    // Initialize the Firebase Admin SDK using the secret key from your Netlify environment variables
    admin.initializeApp({
      credential: admin.credential.cert(
        JSON.parse(process.env.FIREBASE_PRIVATE_KEY)
      )
    });
  } catch (error) {
    console.error("Firebase initialization error:", error);
  }
}

// Get a reference to the Firestore database
const db = admin.firestore();

// This is the main function that Netlify will run
export const handler = async (event) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return { statusCode: 405, body: 'Method Not Allowed' };
  }

  try {
    // Parse the poster data sent from the front-end
    const posterData = JSON.parse(event.body);
    
    // Add the data to the 'posters' collection in Firestore
    const docRef = await db.collection('posters').add({
      ...posterData,
      createdAt: admin.firestore.FieldValue.serverTimestamp() // Add a timestamp
    });

    // If successful, return the unique ID of the newly created document
    return {
      statusCode: 200,
      body: JSON.stringify({ id: docRef.id }),
    };
  } catch (error) {
    console.error("Error in publishPoster function:", error);
    // If an error occurs, return a server error status
    return { 
      statusCode: 500, 
      body: JSON.stringify({ error: 'Failed to save poster.' }) 
    };
  }
};
