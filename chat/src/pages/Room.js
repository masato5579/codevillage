import React, { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../AuthService'
import firebase from '../config/firebase'


const Room = () => {
    const [messages, setMessage] = useState(null)
    const [value, setValue] = useState('')

    useEffect(() => {
        firebase.firestore().collection('messages')
            .onSnapshot((snapshot) => {
                const messages = snapshot.docs.map(doc => {
                    return doc.data()
                })
                setMessage(messages)
            })
    }, [])

    //onSnapshot クライアントとDBとのリアルタイムな同期を簡単に実装

    const user = useContext(AuthContext)

    const handleSubmit = () => {
        firebase.firestore().collection('messages').add({
            content: value,
            user: user.displayName
        })
    }


    return (
        <>
            <h1>Room</h1>
            <ul>
                <li>sample user : sample message</li>
                {
                    messages ?
                        messages.map((message, index) => (
                            <li key={index}>{message.user}:{message.content}</li>
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
        </>
    )
}

export default Room