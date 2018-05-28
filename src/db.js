import Firebase from 'firebase'

let config = {
// Enter your own config...
}

let app = Firebase.initializeApp(config)
let db = app.database()
export default db
