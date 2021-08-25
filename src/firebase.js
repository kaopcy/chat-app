import firebase from "firebase";
import 'firebase/auth'
import 'firebase/database'

import { ref } from 'vue'

firebase.initializeApp({
    apiKey: "AIzaSyC-I-vfN3oMPvDuTa2UuJ6JMHSKFeUe6jE",
    authDomain: "kpcymessenger.firebaseapp.com",
    projectId: "kpcymessenger",
    storageBucket: "kpcymessenger.appspot.com",
    messagingSenderId: "703699437509",
    appId: "1:703699437509:web:0f1f8647177978f8236dac"
});

const auth = firebase.auth()
const db = firebase.database()
