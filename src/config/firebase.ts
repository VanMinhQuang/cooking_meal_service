import admin from "firebase-admin";

// Load your Firebase Admin SDK credentials
admin.initializeApp({
    credential: admin.credential.cert(require("../serviceAccountKey.json")),
});

export default admin;