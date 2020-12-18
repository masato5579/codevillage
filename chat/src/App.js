import React from 'react' //reactを読み込む

import Login from './pages/Login' //Login.jsを読み込む
import SignUp from './pages/SignUp' //SignUp.jsを読み込む
import Room from './pages/Room' //Room.jsを読み込む

import AuthProvider from './AuthService' //AuthProviderを読み込む



import {
    BrowserRouter as Router,
    //HTML5履歴APIを使用しています（pushState、replaceStateおよびpopstateURLと同期して、あなたのUIを維持するためのイベント
    Switch,
    //ルートを排他的にレンダリングする
    Route
    //path、現在のURLと一致するときにUIをレンダリングすること
} from 'react-router-dom'
//react-router-domからBrowserRouter・Switch・Routeを読み込む

import LoggedInRoute from './LoggedInRoute'
//LoggedInRoute.jsからLoggedInRouteを読み込む



const App = () => {
    return (
        <AuthProvider /*Authproviderはログイン済みのユーザーにアクセスできる */>
            <Router>
                <Switch>
                    <LoggedInRoute exact path="/" component={Room} />
                    <Route exact path="/login" component={Login} />
                    <Route exact path="/signup" component={SignUp} />
                </Switch>
            </Router>
        </AuthProvider>
    )
}

export default App

