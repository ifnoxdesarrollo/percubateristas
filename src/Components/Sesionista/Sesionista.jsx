import React from 'react';
import './Sesionista.css';

const Sesionista = () => {
    return(

        <>
        <div id="seccion-sesionista" className='sesiones'>
            <div className='sesiones-indice'>
                <div className='sesiones-indice-semiCirculo'>
                    <h2>Sesionista</h2>
                </div>
            </div>
                
            <div className='sesiones-tarjeta'>
                <h3 className='sesiones-tarjeta-titulo'>¿Grabamos juntxs?</h3>
                <div className='sesiones-tarjeta-planes'>
                    <div className='sesiones-planes_izq'>
                        <img src="./muestra_A.jpg" alt=""/>
                    </div>
                    
                    <div className='sesiones-planes_cen' >
                        <img src="./muestra_B.jpg" alt=""/>
                    </div>
                    
                    <div className='sesiones-planes_der'>
                        <img src="./hero-muestra.jpg" alt="" />
                    </div>
                </div>
                <div className='sesiones-tarjeta-texto'>
                    <div className='sesiones-tarjeta-texto_izq'>Si estás buscando otro tipo de percusión para tu canción, podemos grabar de forma exclusiva para vos.</div>
                    <div className='sesiones-tarjeta-texto_der'>Elegí qué es lo que necesitás!</div>
                </div>
            </div>
        </div>    
            
        
        </>

        
    )
}

export { Sesionista }