import React, { useState } from 'react'
import firebase from '../config/firebase'

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(({ user }) => {
                user.updateProfile({
                    displayName: name
                })
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>

                <div>
                    <lable htmlFor="name">Name
                    </lable>
                    <input name="name" type="name" id="name" placeholder="name"
                        onChange={e => { setName(e.target.value) }}></input>
                </div>

                <div><lable htmlFor="email">E-mail
                </lable>
                    <input name="email" type="email" id="email" placeholder="Email"
                        onChange={e => { setEmail(e.target.value) }} />
                </div>

                <div><lable htmlFor="password">Password
                </lable>
                    <input name="password" type="password" id="password" placeholder="Password"
                        onChange={e => { setPassword(e.target.value) }} />
                </div>
                <button type="submit">Sign Up</button></form>
        </>
    )

}

export default SignUp                 