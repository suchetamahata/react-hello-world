const { conversation } = require('@assistant/conversation');
const functions = require('firebase-functions');

const app = conversation();

app.handle('<your handler name>', conv => {
  // Implement your code here
  conv.add("<your prompt here>");
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);