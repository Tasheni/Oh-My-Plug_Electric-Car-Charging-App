import { useEffect, useState } from 'react';
import './Users.css';
import loginImage from './images/loginImage.jpg'
import {Link} from 'react-router-dom'

function Login() {

    let [emailL, setEmailL] = useState()
    let [passwordL, setPasswordL] = useState()
    let [name, setName] = useState()
    let [email, setEmail] = useState()
    let [password, setPassword] = useState()

    useEffect(() => {
        const signUpButton = document.getElementById('signUp');
        const signInButton = document.getElementById('signIn');
        const container = document.getElementById('container');

        signUpButton.addEventListener('click', () => {
            container.classList.add("right-panel-active");
        });

        signInButton.addEventListener('click', () => {
            container.classList.remove("right-panel-active");
        });

    }, [])


    function onRegister() {
        let body = {
            name,
            email,
            password
        }

        fetch('http://localhost:8000/users/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(resp => console.log(resp))
    }

    function onLogin() {
        let body = {
            email: emailL,
            password: passwordL
        }

        fetch('http://localhost:8000/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        })
            .then(res => res.json())
            .then(resp => console.log(resp))
    }


    return (
          <><div className='users-register'>
            <h3>Sign In or Sign Up</h3>
            <div class="container" id="container">
                <div class="form-container sign-up-container">
                    <div className="form">
                        <h2>Sign Up</h2>
                        <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name" />
                        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" />
                        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" />
                        <button onClick={onRegister}>Sign Up</button>
                    </div>
                </div>
                <div class="form-container sign-in-container">
                    <div className="form">
                        <h2>Sign In</h2>
                        <input value={emailL} onChange={(e) => setEmailL(e.target.value)} type="email" placeholder="Email" />
                        <input value={passwordL} onChange={(e) => setPasswordL(e.target.value)} type="password" placeholder="Password" />
                        <p>Forgot your password?</p>
                        <button onClick={onLogin} ><Link to="/Chargers"></Link>Sign In</button>
                    </div>
                </div>

                <div class="overlay-container">
                    <div class="overlay">
                        <div class="overlay-panel overlay-left">
                            <h2>Welcome Back!</h2>
                            <p>Already have an account? Please sign in with your personal info</p>
                            <button class="ghost" id="signIn">Sign In</button>
                        </div>
                        <div class="overlay-panel overlay-right">
                            <h2>Sign Up</h2>
                            <p>To use our services, you are required to create a user account.</p>
                            <button class="ghost" id="signUp">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Login