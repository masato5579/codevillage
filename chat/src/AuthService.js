import React, { useState, useEffect } from 'react'　//reactを読み込む
import firebase from './config/firebase' //firebaseを読み込む

const AuthContext = React.createContext()
// コンテクストオブジェクトを作成(どこからでもアクセス可能にする)
//つまりこのchatAppを例にするとApp.jsから現在の場所を読み取ることができる

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    //初期値がnullのuserのuseState

    //タイミングを調整するhooks
    //useEffectの実行タイミング
    //依存配列の更新された時

    useEffect(() => {
        //副作用を有する可能性のある命令型のコードを受け付ける。
        firebase.auth().onAuthStateChanged(user => {
            //現在ログインしているユーザーを取得する
            setUser(user)
            //userを更新
        })
    }, [])

    return (
        <AuthContext.Provider value={user}>
            {children}
        </AuthContext.Provider>
    )
}

export {
    AuthContext
    //AuthContextをインポート
}

export default AuthProvider
//defalutでAuthProviderをインポート