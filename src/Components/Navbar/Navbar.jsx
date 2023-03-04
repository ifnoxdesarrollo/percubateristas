import React, { useState } from 'react';
import './Navbar.css';
import SignIn from './../UserSession/SignIn';
import SignUp from '../UserSession/SignUp';
import { Hero } from '../Hero/Hero';

const Navbar = () => {


    const [mostrarHamb, setMostrarHamb] = useState(false);

    const isActive = () => {
        setMostrarHamb(!mostrarHamb);
    }


    return (
        <>
            <div className='navbar-renglon-redes'>
                <div className='navbar-contenedor-renglon'>
                    <div className="nav-redes">

                        <div><a href="https://www.facebook.com/facuberjeli98?mibextid=ZbWKwL" target="_blank"><i className="bi-facebook btn-facebook"></i></a></div>
                        <div><a href="https://instagram.com/facundoberjeli?igshid=ZDdkNTZiNTM=" target="_blank"><i className="bi-instagram btn-instagram"></i></a></div>
                        <div><a href="https://youtube.com/@percubateristasonline" target="_blank"><i className="bi-youtube btn-youtube"></i></a></div>

                    </div>

                    <div className='nav-logueo'>
                        <SignIn/>
                        <SignUp/>
                    </div>
                </div>

            </div>

            <nav className='navbar'>
                <div className='navbar-contenedor'>

                    <div className="nav-logo">
                        <h1 className='nav-logo-texto'>PercuBateristasOnLine</h1>
                    </div>

                    <div className='nav-contenedor-lista'>
                        <ul className={`nav-lista ${mostrarHamb ? "abierto" : " "}`}>
                            <li><a href="#seccion-hero">Home</a></li>
                            <li><a href="#seccion-nosotrxs">Nosotrxs</a></li>
                            <li><a href="#seccion-perculoops">Perculoops</a></li>
                            <li><a href="#seccion-galeria">Imágenes</a></li>
                            <li><a href="#seccion-sesionista">Sesionista</a></li>
                            <li><a href="#seccion-contacto">Contacto</a></li>

                        </ul>
                    </div>

                    <div className="btn-hamburguesa" >
                        <button className='btn' onClick={isActive}><i className="bi-list btn-hamburguesa-icono"></i></button>
                    </div>

                </div>

            </nav>
            <Hero isActive={mostrarHamb} />

        </>
    )
}

export { Navbar } 