import React, { useState, useContext } from 'react'
import { AuthContext } from '../AuthService'
import { Redirect } from 'react-router-dom'
import firebase from '../config/firebase'

const Login = ({ history }) => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                history.push('/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    const user = useContext(AuthContext)

    if (user) {
        return <Redirect to={"/"} />
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <>
                    <lable htmlFor="email">E-mail</lable>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        pleceholder="Email"
                        onChange={e => {
                            setEmail(e.target.value)
                        }}
                    />
                </>
                <>
                    <lable htmlFor="password">Password</lable>
                    <input
                        type="password"
                        id="password"
                        name="email"
                        pleceholder="password"
                        onChange={e => {
                            setPassword(e.target.value)
                        }}
                    />
                </>
                <button type="submit">Login</button>
            </form>
        </>
    )
}


export default Login