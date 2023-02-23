import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { auth } from '../../firebaseConfig/firebase';

const AuthDetails = () => {

    const [authUser, setAuthUser] = useState(null);

    useEffect(() => {
        const listen = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthUser(user)
            } else {
                setAuthUser(null);
            }
        });

        return () => {
            listen();
        }
    }, []);

    const UserSignOut = () => {
        signOut(auth).then(() => {
            console.log('cerro sesion')
        }).catch(error => console.log(error));
    }

    return (
        <div>{authUser ? <><p>Bienvenidx {authUser.email}</p><button onClick={UserSignOut}>Cerrar Sesión</button></> : <p>Cerró sesión</p>}</div>
    )
}

export default AuthDetails;