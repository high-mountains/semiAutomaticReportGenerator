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
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
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

export default app
export { auth, db, collection, doc, getDocs, serverTimestamp, storage }
