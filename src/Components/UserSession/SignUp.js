import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../../firebaseConfig/firebase';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const SignUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential)
        }).catch((error) => {
            console.log(error);
        });

    }
    return (
        <div className='sign-in-container'>
            <form onSubmit={SignUp}>
                <h1>Crear una cuenta</h1>
                <input type="email" placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)}></input>
                <input type="password" placeholder='contraseña' value={password} onChange={(e) => setPassword(e.target.value)}></input>
                <button type='submit'>Crear</button>
            </form>
        </div>
    )
}

export default SignUp;