import Firebase from 'firebase'

let config = {
  apiKey: 'AIzaSyB-i25nPzLwHPSx7qCwdzjmKTm3-fW8SbA',
  authDomain: 'omega-scope-184911.firebaseapp.com',
  databaseURL: 'https://omega-scope-184911.firebaseio.com',
  projectId: 'omega-scope-184911',
  storageBucket: '',
  messagingSenderId: '969690656239'
}

let app = Firebase.initializeApp(config)
let db = app.database()
export default db
