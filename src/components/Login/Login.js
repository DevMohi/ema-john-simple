import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css'
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');
    const navigate = useNavigate()

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    if (user) {
        navigate('/shop')
    }

    const handleUserSignIn = event => {
        event.preventDefault();
        signInWithEmailAndPassword(email, password)
    }
    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" name='email' onBlur={handleEmailBlur} id='' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input type="password"
                            onBlur={handlePasswordBlur}
                            name='password' id='' required />
                    </div>
                    <p style={{ color: 'red' }}>{error?.message}</p>
                    {
                        loading && <p>Loading...</p>
                    }
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p>New to Ema-John? <Link className='form-link' to="/signup">Create New Account</Link></p>
            </div>
        </div>
    );
};

export default Login;