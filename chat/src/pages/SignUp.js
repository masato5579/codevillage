import React, { useState } from 'react' //Reactを読み込む
import firebase from '../config/firebase' //firebaseを読み込み

const SignUp = ({ history }) => {
    const [email, setEmail] = useState('') //emailのuseStateを設定
    const [password, setPassword] = useState('') //emailのuseStateを設定
    const [name, setName] = useState('') //nameのuseStateを設定

    const handleSubmit = (e) => {
        //引数eでhandleSubmitを定義
        e.preventDefault()
        //ブラウザの挙動をキャンセル
        firebase.auth().createUserWithEmailAndPassword(email, password)
            // stateで管理しているemailとpasswordを引数に与えている
            //createだから作成しているuserのemailとpassword
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                    //表示されるnameはuseStateにあるname
                })
                history.push('/')
            })
            //.thenはPromiseを返す
            //Promiseは非同期処理の最終的な完了処理 (もしくは失敗) およびその結果の値を表現
            .catch(err => {
                console.log(err)
            })
        //拒絶された場合のみコンソールにerrを表示する
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <label htmlFor="name">Name
                    </label>
                    <input name="name" type="name" id="name" placeholder="name"
                        onChange={e => { setName(e.target.value) }}></input>
                </div>

                <div><label htmlFor="email">E-mail
                </label>
                    <input name="email" type="email" id="email" placeholder="Email"
                        onChange={e => { setEmail(e.target.value) }} />
                </div>

                <div><label htmlFor="password">Password
                </label>
                    <input name="password" type="password" id="password" placeholder="Password"
                        onChange={e => { setPassword(e.target.value) }} />
                </div>
                <button type="submit">Sign Up</button></form>
        </>
    )

}

export default SignUp                 