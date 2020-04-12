import * as functions from "firebase-functions";
import * as admin from "firebase-admin";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript

admin.initializeApp();

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
export const addMessage = functions.https.onRequest(async (req, res) => {
	// Grab the text parameters
	const original = req?.query?.text;

	// Push a message into the database using the Firebase Admin SDK
	// Need to confirm that this works with the firestore
	// Honestly don't care which one we use 😅
	const snapshot = await admin
		.database()
		.ref("/messages")
		.push({ original });

	// Redirect with 303 SEE othere to the url of the pushed object in the firebase console
	// Honestly don't know what this does need to look it up
	res.redirect(303, snapshot?.ref.toString());
});
