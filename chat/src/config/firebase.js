import firebase from 'firebase/app'
import 'firebase/firestore'

import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDdlp4dAG3yhYfriEoroYsvFpoKytrkKmg",
    authDomain: "chat-app-abf43.firebaseapp.com",
    projectId: "chat-app-abf43",
    storageBucket: "chat-app-abf43.appspot.com",
    messagingSenderId: "1015121080459",
    appId: "1:1015121080459:web:3baa2b8866652e7ba7e48e"
}

firebase.initializeApp(firebaseConfig)

export default firebase