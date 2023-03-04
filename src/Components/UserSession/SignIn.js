import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import withReactContent from "sweetalert2-react-content";
import React, { useState, useEffect } from "react";
import { auth } from "../../firebaseConfig/firebase";
import "../Navbar/Navbar.css";
import Swal from "sweetalert2";

const SignIn = () => {
  //manejo de estado de sesion

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

  //Funcion para cerrar sesion

  const UserSignOut = () => {
    signOut(auth)
      .then(() => {
        cerroSesion();
      })
      .catch((error) => console.log(error));
  };

  //Sweet alert, alerta de operacion exitosa, cerro sesion

  const MySwal = withReactContent(Swal);

  const exitoso = () => {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "¡Operación realizada con éxito!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

 

  const cerroSesion = () => {
    MySwal.fire({
      position: "center",
      icon: "success",
      title: "Cerraste sesión",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  // inicio de sesion

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const SignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
        exitoso();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <>
        {authUser ? (
          <>
            <button className="btn-inicio" onClick={UserSignOut}>
              Cerrar Sesión
            </button>
          </>
        ) : (
          <>
            <button
              className="btn-inicio"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
            >
              Iniciar sesión
            </button>
          </>
        )}
      </>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="titulo">
                Iniciar Sesión
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <div className="sign-in-container">
                <form onSubmit={SignIn}>
                  <h1 id="titulo-1">Ingresar con tu cuenta</h1>
                  <div id="inputs">
                    <input
                      id="input-email"
                      type="email"
                      placeholder="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    ></input>
                    <input
                      id="input-password"
                      type="password"
                      placeholder="contraseña"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    ></input>
                  </div>
                  <p id="mensaje">
                    {authUser ? (
                      <>Ingresaste</>
                    ) : (
                      <>Email o contraseña incorrectos</>
                    )}
                  </p>
                  <button id="btn-ingresar" type="submit">
                    Ingresar
                  </button>
                </form>
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
