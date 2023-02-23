import React, { Component } from 'react';
import './Perculoops.css';
import song from '../Audios/song.mp3'
import song2 from '../Audios/sin nombre.mp3'
import SignIn from './../UserSession/SignIn';
import BotonDescargar from './BotonDescargar';
import DivInicioSesion from './DivInicioSesion';





class Perculoops extends Component {

   

    enReproduccion = null;

    state = [{
        // Get audio file in a variable
        audio: new Audio(song),
        nombre: "audio 1",

        // Set initial state of song
        isPlaying: false,
    },
    {
        audio2: new Audio(song2),
        nombre2: "audio 2",
        isPlaying2: false,
    }
    ];


    // Main function to handle both play and pause operations
    playPause = () => {
        // Get state of song
        let isPlaying = this.state.isPlaying;


        if (isPlaying) {
            // Pause the song if it is playing
            this.state[0].audio.pause();
        } else {
            // Play the song if it is paused
            this.state[0].audio.play();
        }

        // Change the state of song
        this.setState({ isPlaying: !isPlaying });
    
        return this.enReproduccion = this.state[0].nombre;

    };


    playPause2 = () => {
        // Get state of song
        let isPlaying2 = this.state.isPlaying2;

        if (isPlaying2) {
            // Pause the song if it is playing
            this.state[1].audio2.pause();
        } else {
            // Play the song if it is paused
            this.state[1].audio2.play();
        }

        // Change the state of song
        this.setState({ isPlaying2: !isPlaying2 });

        return this.enReproduccion = this.state[1].nombre2;
       
    };

    //   playPause3 = () => {
    //     // Get state of song
    //     let isPlaying3 = this.state.isPlaying3;

    //     if (isPlaying3) {
    //       // Pause the song if it is playing
    //       this.state.audio3.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio3.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying3: !isPlaying3 });
    //   };

    //   playPause4 = () => {
    //     // Get state of song
    //     let isPlaying4 = this.state.isPlaying4;

    //     if (isPlaying4) {
    //       // Pause the song if it is playing
    //       this.state.audio4.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio4.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying4: !isPlaying4 });
    //   };

    //   playPause5 = () => {
    //     // Get state of song
    //     let isPlaying5 = this.state.isPlaying5;

    //     if (isPlaying5) {
    //       // Pause the song if it is playing
    //       this.state.audio5.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio5.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying5: !isPlaying5 });
    //   };

    //   playPause6 = () => {
    //     // Get state of song
    //     let isPlaying6 = this.state.isPlaying6;

    //     if (isPlaying6) {
    //       // Pause the song if it is playing
    //       this.state.audio6.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio6.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying6: !isPlaying6 });
    //   };

    //   playPause7 = () => {
    //     // Get state of song
    //     let isPlaying7 = this.state.isPlaying7;

    //     if (isPlaying7) {
    //       // Pause the song if it is playing
    //       this.state.audio7.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio7.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying7: !isPlaying7 });
    //   };

    //   playPause = () => {
    //     // Get state of song
    //     let isPlaying8 = this.state.isPlaying8;

    //     if (isPlaying8) {
    //       // Pause the song if it is playing
    //       this.state.audio8.pause();
    //     } else {
    //       // Play the song if it is paused
    //       this.state.audio8.play();
    //     }

    //     // Change the state of song
    //     this.setState({ isPlaying8: !isPlaying8 });
    //   };

    

    stopReload = () => {
       
        this.setState({ isPlaying: false });
            this.state[0].audio.load();
    }

    stopReload1 = () => {

        this.setState({ isPlaying2: false });
        this.state[1].audio2.load();
    }


    

    render() {
        return (

            <>
                <div id="seccion-perculoops" className='perculoops'>

                    <div className='perculoops-indice'>
                        <div className='perculoops-indice-semiCirculo'>
                            <h2>Perculoops</h2>
                        </div>
                    </div>
                    {<DivInicioSesion/>}
                    <div className='contenedor-reproductor'>
                        
                        <div className='perculoops-reproductor'>
                            <h4>{this.enReproduccion}</h4>
                            <div className='perculoops-reproductor-progreso'></div>
                            <div className='perculoops-reproductor-duracion'></div>
                            <div className='perculoops-reproductor-controladores'>

                                <button className='btn-play'>Play</button>
                                <button className='btn-pausa'>Pausa</button>
                            </div>
                        </div>
                        <div class="perculoops-lista_de_temas">
                            <div class="item_1">

                                <div class="item-play"  >
                                    <button onClick={this.playPause} >{this.state.isPlaying ? "Pausa" : "Play"}</button>
                                </div>
                                
                                <div >
                                    <button onClick={this.stopReload} >Stop</button>
                                </div>
                                <div class="item-nombre">
                                    <p >{this.state[0].nombre}</p>
                                </div>

                               {<BotonDescargar/>}

                                <div class="item-duracion">
                                    <p>5:24</p>
                                </div>
                            </div>

                            <div class="item_2">
                                <div class="item-play">
                                    <button  onClick={this.playPause2} >{this.state.isPlaying2 ? "Pausa" : "Play"}</button>
                                </div>
                                <div >
                                    <button onClick={this.stopReload1} >Stop</button>
                                </div>
                                <div class="item-nombre">
                                    <p>Nombre canción 2</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>3:54</p>
                                </div>
                            </div>

                            <div class="item_3">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 3</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>1:44</p>
                                </div>
                            </div>

                            <div class="item_4">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 4</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>5:24</p>
                                </div>
                            </div>

                            <div class="item_5">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 5</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>3:54</p>
                                </div>
                            </div>

                            <div class="item_6">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 6</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>1:44</p>
                                </div>
                            </div>

                            <div class="item_7">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 7</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>3:54</p>
                                </div>
                            </div>

                            <div class="item_8">
                                <div class="item-play">
                                    <button>Play</button>
                                </div>

                                <div class="item-nombre">
                                    <p>Nombre canción 8</p>
                                </div>

                                <div class="item-descarga">
                                    <button>Descarga</button>
                                </div>

                                <div class="item-duracion">
                                    <p>1:44</p>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>


            </>

        )
    }
}

export { Perculoops }