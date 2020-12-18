import React, { useContext } from 'react' //reactを読み込む
import { Route, Redirect } from 'react-router-dom' //react-router-domを読み込む
import { AuthContext } from './AuthService' //AuthCotextを読み込む

const LoggedInRoute = ({ component: Component, ...rest }) => {
    // JSXを用いてコンポーネントを呼び出す際は、先頭の文字をuppercaseにしなければエラーが発生
    //だからComponent
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={props =>
                //ログイン済
                user ? (
                    <Component{...props} />
                ) : ( //未ログイン
                        <Redirect to={'login'} />
                    )
            }
        />
    )
}

export default LoggedInRoute