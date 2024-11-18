import { db } from './firebase'
import { DocumentSnapshot, QueryDocumentSnapshot, Timestamp, collection, doc, serverTimestamp } from 'firebase/firestore'
import dayjs from 'dayjs'

export class AppFirestoreModel {
  get toJson() {
    return {
      ...this,
    }
  }
}

export const converter = {
  toFirestore: <T extends AppFirestoreModel>(data: T) => (data instanceof AppFirestoreModel ? data.toJson : data),
  fromFirestore: <T>(snapshot: QueryDocumentSnapshot) => snapshot.data() as T,
}

export const generateDocId = () => {
  return doc(collection(db, 'authId')).id
}

export const getDocIdWithData = <T>(doc: DocumentSnapshot<T>) => {
  if (!doc.exists()) {
    throw new Error('Document does not exist')
  }

  return {
    id: doc.id,
    ...doc.data(),
  }
}

export const getDocData = <T>(doc: DocumentSnapshot<T>) => {
  if (!doc.exists()) {
    throw new Error('Document does not exist')
  }

  return doc.data()
}

export const appServerTimestamp = () => {
  return serverTimestamp()
}

export const toTimestamp = (date: Date) => {
  return Timestamp.fromDate(date)
}

export const toDateStr = (timestamp: Timestamp, format?: string) => {
  return dayjs(timestamp.toDate()).format(format ?? 'YYYY/MM/DD HH:mm')
}
