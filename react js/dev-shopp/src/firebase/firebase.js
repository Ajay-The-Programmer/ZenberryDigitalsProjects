import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

import config from '../config'

const firebase = initializeApp(config)
const db = getStorage(firebase)
const fstore = getFirestore(firebase)
const auth = getAuth()

export default { fstore, db, auth }
