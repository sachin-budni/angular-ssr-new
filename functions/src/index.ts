import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
const universal = require('./../dist/willntrix/server/main.js').app;
//
export const universalapp = functions.https.onRequest(universal);
