import React from 'react';
import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer-logos">
                <div className="footer-logo">
                    <hr />
                    <h3>PercuBateristasOnLine</h3>
                    <hr />
                </div>
                <div className="footer-autoria">
                    <h3>2023 PERCUBATERISTASONLINE | Todos los derechos reservados</h3>
                </div>
            </div>
        </footer>
    )
}

export { Footer }