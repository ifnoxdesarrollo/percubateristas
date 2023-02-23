import React from 'react';
import './Galeria.css';

const Galeria = () => {
    return(
        <>
            <div id="seccion-galeria" className="galeria">
                <div className='galeria-indice'>
                    <div className='galeria-indice-semiCirculo'>
                        <h2>Galería</h2>
                    </div>
                </div>

                <div className='galeria-carrusell'>

                <div id="carouselExampleControls" className="carousel-products slide" data-bs-ride="carousel">
                        <div className="cards-wrapper">

                            <div className="carousel__container">
                                <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="./hero-muestra.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre">Foto 1</p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion">Tocando en el recital de Carnaval 2021</p>
                                            <a className="a-vermas" href="">Ver más</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="./muestra_A.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion"></p>
                                            <a className="a-vermas" href="">Ver más</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="./muestra_B.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion">Hola Mundo</p>
                                            <a className="a-vermas" href="">Ver más</a>
                                        </div>
                                    </div>
                                </div>
                                <div id="item-producto" className="carousel__item">
                                    <img className="carousel__item__img" src="./muestra_A.jpg" alt=""/>
                                    <div className="carousel__item__details">
                                        <div>
                                            <p className="carousel__item__details__title" text="Nombre"></p>
                                            <p className="carousel__item__details__subtitle" text="Descripcion"></p>
                                            <a className="a-vermas" href="">Ver más</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                
            </div>

        </>
    )
}

export { Galeria }