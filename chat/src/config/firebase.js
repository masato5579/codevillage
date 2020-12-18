import firebase from 'firebase/app'
//firebaseを読み込む

import 'firebase/firestore'
//firestoreを読み込む

import 'firebase/auth'
//authを読み込む
//authは Authenticationの略

const firebaseConfig = {
    apiKey: "AIzaSyDdlp4dAG3yhYfriEoroYsvFpoKytrkKmg",
    authDomain: "chat-app-abf43.firebaseapp.com",
    projectId: "chat-app-abf43",
    storageBucket: "chat-app-abf43.appspot.com",
    messagingSenderId: "1015121080459",
    appId: "1:1015121080459:web:3baa2b8866652e7ba7e48e"
    //各人の認証情報を記述
}

firebase.initializeApp(firebaseConfig)
//認証情報を引数に与えてFirebase Appの初期化

export default firebase
//初期化が完了したFirebase Appをエクスポート