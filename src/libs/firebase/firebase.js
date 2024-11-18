import { initializeApp } from 'firebase/app'
import { connectAuthEmulator, getAuth } from 'firebase/auth'
import { connectStorageEmulator, getStorage } from 'firebase/storage'
import {
  collection,
  connectFirestoreEmulator,
  doc,
  getDocs,
  getFirestore,
  serverTimestamp,
} from 'firebase/firestore'

const isRemote = true

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID,
}

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app)

if (!isRemote) {
  const localhost = '192.168.0.19'
  // firebase.json
  connectFirestoreEmulator(db, localhost, 8080)
  connectAuthEmulator(auth, `http://${localhost}:9099`, {
    disableWarnings: true,
  })
  connectStorageEmulator(storage, localhost, 9199)
}

auth.languageCode = 'ja'

export { auth, db, collection, doc, getDocs, serverTimestamp, storage }

export default app