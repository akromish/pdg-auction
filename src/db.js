// Conveniently import this file anywhere to use db
import firebase from 'firebase/app'
import 'firebase/firestore'

// Get a Firestore instance
export const db = firebase
    .initializeApp({ projectId: 'pdg-app-f75fb' })
    .firestore()

// Export types that exists in Firestore - Uncomment if you need them in your app
// const { Timestamp, GeoPoint } = firebase.firestore
// export { Timestamp, GeoPoint }
