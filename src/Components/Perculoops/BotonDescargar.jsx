import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import "../Perculoops/Perculoops.css";
import SignIn from "./../UserSession/SignIn";

const BotonDescargar = () => {
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

  return (
    <>
      <button className="btn-descarga">
        {authUser ? (
          <>Descargar</>
        ) : (
          <>
            <SignIn />
          </>
        )}
      </button>
    </>
  );
};

export default BotonDescargar;
