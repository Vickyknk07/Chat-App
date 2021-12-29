import React from 'react'
import { Button } from '@material-ui/core'
import './Login.css'
import { auth, provider } from './firebase'

function Login() {
    const signIn = () => {
        auth
            .signInWithPopup(provider)
            .then(result => console.log(result))
            .catch((error) => alert(error.message))
    }

    return (
        <div className='login'>
            <div className='login_container'>
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/765px-WhatsApp.svg.png" alt="" />
                <div className='login_text'>
                    <h1>Sign in to Whatsapp</h1>
                </div>

                <Button onClick={signIn}>
                    Sign in With Google
                </Button>
            </div>
        </div>
    )
}

export default Login