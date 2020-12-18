import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'


const Room = () => {
    const [messages, setMessage] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages')
            // firebase.firestore()でfirestoreにアクセス
            //collectionでデータを取得
            .onSnapshot((snapshot) => {
                // 対象のコレクション(今回はmessages)に変更があるたびに発生するため、
                // リアルタイムでアプリケーションにデータを反映
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                    //snapshotの全ての要素のdataをmessagesに返している
                })
                setMessage(messages)
                //messagesを更新
            })
    }, [])

    //onSnapshot クライアントとDBとのリアルタイムな同期を簡単に実装

    const user = useContext(AuthContext)
    //現在ログインしているユーザー情報を取得

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName,
            date: new Date()
        })
    }


    return (
        <>
            <h1>Room</h1>
            <ul>
                {
                    messages ?
                        messages.map((message) => (
                            <li>{message.user}:{message.content}</li>
                        )) :
                        <p>...loading</p>
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={e => setValue(e.target.value)}
                />
                <button type="submit">送信</button>
            </form>
            <button onClick={() => firebase.auth().signOut()}>Logout</button>
            {/* signoutをするメソッド */}
        </>
    )
}

export default Room