import { db } from './firebase'
import {
  DocumentSnapshot,
  QueryDocumentSnapshot,
  Timestamp,
  collection,
  doc,
  serverTimestamp,
} from 'firebase/firestore'
import dayjs from 'dayjs'

export class AppFirestoreModel {
  get toJson() {
    return {
      ...this,
    }
  }
}

export const converter = {
  toFirestore: <T extends AppFirestoreModel>(data: T) =>
    data instanceof AppFirestoreModel ? data.toJson : data,
  fromFirestore: <T>(snapshot: QueryDocumentSnapshot) => snapshot.data() as T,
}

export class ColName {
  // example
  // static readonly members = 'members';
}

export class ColRef {
  // example
  // static members = collection(db, ColName.members).withConverter<Member>(converter);
}

export class SubColName {
  // example
  // static readonly memberReports = 'memberReports';
}

export class SubColRef {
  // example
  // static memberReports = (id: string) => collection(DocRef.member(id), SubColName.memberReports).withConverter<MemberReport>(converter);
}

export class ColGroupRef {
  // example
  // static memberReports = collectionGroup(db, SubColName.memberReports).withConverter<MemberReport>(converter);
}

export class DocRef {
  // example
  // static member = (id: string) => doc(db, ColName.members, id).withConverter<Member>(converter);
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

export const toDateStr = (timestamp: Timestamp, format?: string) => {
  return dayjs(timestamp.toDate()).format(format ?? 'YYYY/MM/DD HH:mm')
}
