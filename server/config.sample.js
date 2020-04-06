/* eslint-disable no-console */
const firebase       = require("firebase-admin");
const path           = require('path');
const serviceAccount = require(path.join(__dirname, '../firebase.json'));
const dotenv         = require('dotenv').config(path.join(__dirname, '../.env'));
/**
  Environment Files
*/
firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
  measurementId: "",
  credential: firebase.credential.cert(serviceAccount)
});
const db  = firebase.database();
const ref = db.ref("eminmuhammadi/emigatron");

module.exports = {
    FIREBASE: firebase,
    DB: {
      db: db,
      ref: ref,
      child:ref.child,
    },
    HTTP_PORT: 88,
    HTTPS_PORT: 8443,
    TELEGRAM_TOKEN: '',
    NGROK_TOKEN: '',
    OPTIONS:{
      polling:true,
      filepath: false
    }
};
