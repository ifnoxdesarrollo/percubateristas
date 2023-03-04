import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../firebaseConfig/firebase";
import "../Perculoops/Perculoops.css";
import SignIn from "./../UserSession/SignIn";

const BotonDescargar = (props) => {
  let audioApasar = null;

  if (props.audioApasar === "Samba 1") {
    audioApasar = "Ritmo Samba 80 bpm 1.mp3";
  } else if (props.audioApasar === "Samba 2") {
    audioApasar = "Ritmo Samba 80 bpm 2.mp3";
  } else if (props.audioApasar === "Samba 3") {
    audioApasar = "Ritmo Samba 90 bpm 1.mp3";
  } else if (props.audioApasar === "Samba 4") {
    audioApasar = "Ritmo Samba 90 bpm 2.mp3";
  } else if (props.audioApasar === "Coco 1") {
    audioApasar = "Ritmo Coco 100 bpm 1.mp3";
  } else if (props.audioApasar === "Coco 2") {
    audioApasar = "Ritmo Coco 100 bpm 2.mp3";
  } else if (props.audioApasar === "Afoxe 1") {
    audioApasar = "Ritmo Afoxe 80 bpm 1.mp3";
  } else if (props.audioApasar === "Afoxe 2") {
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
      {authUser ? (
        <>
          <button className="btn-descarga">
            <a href={audioApasar} download={audioApasar}>
              Descargar
            </a>
          </button>
        </>
      ) : (
        <>
          <SignIn />
        </>
      )}
    </>
  );
};

export default BotonDescargar;
