import React, { useState, useContext } from 'react'  //reactを読み込む
import { AuthContext } from '../AuthService' //AuthService
import { Redirect } from 'react-router-dom' //react-router-domを利用してRedirectを読み込む
import firebase from '../config/firebase' //firebaseを読み込む

const Login = ({ history }) => {
    //{history}を引数にLoginを定義

    const [email, setEmail] = useState('')
    //emailのuseState
    const [password, setPassword] = useState('')
    //passwordのuseState

    const handleSubmit = (e) => {
        //eを引数にhandleSubmitを定義
        e.preventDefault()
        //ブラウザのリロード時の挙動をなくす
        firebase.auth().signInWithEmailAndPassword(email, password)
            //既存のuserをログインとパスワードを使用してLoginさせる

            //非同期通信が成功したら
            .then(() => {
                history.push('/')
                // [/] = Room.js
            })

            //非同期通信が失敗したら
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)


    if (user) {
        return <Redirect to={"/"} />
        //もしuserだったら、[/]にリダイレクトする（自動的に）
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        pleceholder="Email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        id="password"
                        name="email"
                        pleceholder="password"
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </div>
                <button type="submit">Login</button>
            </form>
        </>
    )
}


export default Login