<script>
import Firebase from 'firebase'
let config = {
  apiKey: 'AIzaSyBjgHyVQpvQFqTrI1FxZ4u8VYJtpz5oQYg',
  authDomain: 'jarvis-47822.firebaseapp.com',
  databaseURL: 'https://jarvis-47822.firebaseio.com',
  projectId: 'jarvis-47822',
  storageBucket: 'jarvis-47822.appspot.com',
  messagingSenderId: '564438243917'
}

let fire = Firebase.initializeApp(config, 'ares')
let db = fire.database()

export default {
  db
}
</script>
