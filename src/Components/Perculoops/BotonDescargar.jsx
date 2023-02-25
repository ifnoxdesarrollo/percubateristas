import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import "../Perculoops/Perculoops.css";
import SignIn from "./../UserSession/SignIn";

const BotonDescargar = (audio) => {
  let audioApasar = null;

  if (audio === "Samba 1") {
    audioApasar = "Ritmo Samba 80 bpm 1.mp3";
  } else if (audio === "Samba 2") {
    audioApasar = "Ritmo Samba 80 bpm 2.mp3";
  } else if (audio === "Samba 3") {
    audioApasar = "Ritmo Samba 90 bpm 1.mp3";
  } else if (audio === "Samba 4") {
    audioApasar = "Ritmo Samba 90 bpm 2.mp3";
  } else if (audio === "Coco 1") {
    audioApasar = "Ritmo Coco 100 bpm 1.mp3";
  } else if (audio === "Coco 2") {
    audioApasar = "Ritmo Coco 100 bpm 2.mp3";
  } else if (audio === "Afoxe 1") {
    audioApasar = "Ritmo Afoxe 80 bpm 1.mp3";
  } else if (audio === "Afoxe 2") {
    audioApasar = "Ritmo afoxe 80 bpm 2.mp3";
  }

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
          <><a href={audioApasar} download={audioApasar}>Descargar</a></>
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
