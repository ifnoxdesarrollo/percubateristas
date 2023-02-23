import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import SignUp from './../UserSession/SignUp';

const DivInicioSesion = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  return <div>{authUser ? <></> : <>Iniciá sesión para descargar los audios. Si no tenés una cuenta, create una aquí <SignUp/></>}</div>;
};

export default DivInicioSesion;
