import React, { Component, useState, useEffect } from "react";
import { auth } from "../../firebaseConfig/firebase";
import "./Perculoops.css";
import samba from "../Audios/Ritmo Samba 80 bpm 1.mp3";
import samba2 from "../Audios/Ritmo Samba 80 bpm 2.mp3";
import samba3 from "../Audios/Ritmo Samba 90 bpm 1.mp3";
import samba4 from "../Audios/Ritmo Samba 90 bpm 2.mp3";
import coco from "../Audios/Ritmo Coco 100 bpm 1.mp3";
import coco2 from "../Audios/Ritmo Coco 100 bpm 2.mp3";
import afoxe from "../Audios/Ritmo Afoxe 80 bpm 1.mp3";
import afoxe2 from "../Audios/Ritmo afoxe 80 bpm 2.mp3";

import BotonDescargar from "./BotonDescargar";
import DivInicioSesion from "./DivInicioSesion";
import { onAuthStateChanged } from 'firebase/auth';

class Perculoops extends Component {

        
  aDetener = null;
  enReproduccion = null;
  enReproduccionNombre = null;

  state = [
    {
      // Get audio file in a variable
      audio: new Audio(samba),
      nombre: "Ritmo Samba 80 bpm 1",
      duracion: "4:00",

      // Set initial state of song
      isPlaying: false,
    },
    {
      audio: new Audio(samba2),
      nombre: "Ritmo Samba 80 bpm 2",
      duracion: "4:00",
      isPlaying2: false,
    },
    {
      audio: new Audio(samba3),
      nombre: "Ritmo Samba 90 bpm 1",
      duracion: "4:00",
      isPlaying3: false,
    },
    {
      audio: new Audio(samba4),
      nombre: "Ritmo Samba 90 bpm 2",
      duracion: "4:00",
      isPlaying4: false,
    },
    {
      audio: new Audio(coco),
      nombre: "Ritmo Coco 100 bpm 1",
      duracion: "4:00",
      isPlaying5: false,
    },
    {
      audio: new Audio(coco2),
      nombre: "Ritmo Coco 100 bpm 2",
      duracion: "4:00",
      isPlaying6: false,
    },
    {
      audio: new Audio(afoxe),
      nombre: "Ritmo Afoxe 80 bpm 1",
      duracion: "4:00",
      isPlaying7: false,
    },
    {
      audio: new Audio(afoxe2),
      nombre: "Ritmo Afoxe 80 bpm 2",
      duracion: "4:00",
      isPlaying8: false,
    },
  ];

 
 

  // Main function to handle both play and pause operations
  playPause = () => {
    // Get state of song
    let isPlaying = this.state.isPlaying;
    this.stopReload2();
    this.stopReload3();
    this.stopReload4();
    this.stopReload5();
    this.stopReload6();
    this.stopReload7();
    this.stopReload8();

    if (isPlaying) {
      // Pause the song if it is playing
      this.state[0].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[0].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying: !isPlaying });

    this.enReproduccion = this.playPause;
    this.enReproduccionNombre = this.state[0].nombre;
    this.aDetener = this.stopReload;
  };

  playPause2 = () => {
    // Get state of song
    let isPlaying2 = this.state.isPlaying2;

    this.stopReload();
    this.stopReload3();
    this.stopReload4();
    this.stopReload5();
    this.stopReload6();
    this.stopReload7();
    this.stopReload8();

    if (isPlaying2) {
      // Pause the song if it is playing
      this.state[1].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[1].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying2: !isPlaying2 });

    this.enReproduccion = this.playPause2;
    this.enReproduccionNombre = this.state[1].nombre;
    this.aDetener = this.stopReload2;
  };

  playPause3 = () => {
    // Get state of song
    let isPlaying3 = this.state.isPlaying3;
    this.stopReload2();
    this.stopReload();
    this.stopReload4();
    this.stopReload5();
    this.stopReload6();
    this.stopReload7();
    this.stopReload8();

    if (isPlaying3) {
      // Pause the song if it is playing
      this.state[2].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[2].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying3: !isPlaying3 });

    this.enReproduccion = this.state[2];

    this.enReproduccion = this.playPause3;
    this.enReproduccionNombre = this.state[2].nombre;
    this.aDetener = this.stopReload3;
  };

  playPause4 = () => {
    // Get state of song
    let isPlaying4 = this.state.isPlaying4;
    this.stopReload2();
    this.stopReload3();
    this.stopReload();
    this.stopReload5();
    this.stopReload6();
    this.stopReload7();
    this.stopReload8();
    
    if (isPlaying4) {
      // Pause the song if it is playing
      this.state[3].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[3].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying4: !isPlaying4 });

    this.enReproduccion = this.state[3];

    this.enReproduccion = this.playPause4;
    this.enReproduccionNombre = this.state[3].nombre;
    this.aDetener = this.stopReload4;
  };

  playPause5 = () => {
    // Get state of song
    let isPlaying5 = this.state.isPlaying5;
    this.stopReload2();
    this.stopReload3();
    this.stopReload4();
    this.stopReload();
    this.stopReload6();
    this.stopReload7();
    this.stopReload8();

    if (isPlaying5) {
      // Pause the song if it is playing
      this.state[4].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[4].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying5: !isPlaying5 });

    this.enReproduccion = this.state[4];

    this.enReproduccion = this.playPause5;
    this.enReproduccionNombre = this.state[4].nombre;
    this.aDetener = this.stopReload5;
  };

  playPause6 = () => {
    // Get state of song
    let isPlaying6 = this.state.isPlaying6;
    this.stopReload2();
    this.stopReload3();
    this.stopReload4();
    this.stopReload5();
    this.stopReload();
    this.stopReload7();
    this.stopReload8();

    if (isPlaying6) {
      // Pause the song if it is playing
      this.state[5].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[5].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying6: !isPlaying6 });

    this.enReproduccion = this.state[5];

    this.enReproduccion = this.playPause6;
    this.enReproduccionNombre = this.state[5].nombre;
    this.aDetener = this.stopReload6;
  };

  playPause7 = () => {
    // Get state of song
    let isPlaying7 = this.state.isPlaying7;
    this.stopReload2();
    this.stopReload3();
    this.stopReload4();
    this.stopReload5();
    this.stopReload6();
    this.stopReload();
    this.stopReload8();

    if (isPlaying7) {
      // Pause the song if it is playing
      this.state[6].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[6].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying7: !isPlaying7 });

    this.enReproduccion = this.state[6];

    this.enReproduccion = this.playPause7;
    this.enReproduccionNombre = this.state[6].nombre;
    this.aDetener = this.stopReload7;
  };

  playPause8 = () => {
    // Get state of song
    let isPlaying8 = this.state.isPlaying8;
    this.stopReload2();
    this.stopReload3();
    this.stopReload4();
    this.stopReload5();
    this.stopReload6();
    this.stopReload7();
    this.stopReload();

    if (isPlaying8) {
      // Pause the song if it is playing
      this.state[7].audio.pause();
    } else {
      // Play the song if it is paused
      this.state[7].audio.play();
    }

    // Change the state of song
    this.setState({ isPlaying8: !isPlaying8 });

    this.enReproduccion = this.state[7];

    this.enReproduccion = this.playPause8;
    this.enReproduccionNombre = this.state[7].nombre;
    this.aDetener = this.stopReload8;
  };

  //métodos stop para cada audio

  stopReload = () => {
    this.setState({ isPlaying: false });
    this.state[0].audio.load();
  };

  stopReload2 = () => {
    this.setState({ isPlaying2: false });
    this.state[1].audio.load();
  };

  stopReload3 = () => {
    this.setState({ isPlaying3: false });
    this.state[2].audio.load();
  };

  stopReload4 = () => {
    this.setState({ isPlaying4: false });
    this.state[3].audio.load();
  };

  stopReload5 = () => {
    this.setState({ isPlaying5: false });
    this.state[4].audio.load();
  };

  stopReload6 = () => {
    this.setState({ isPlaying6: false });
    this.state[5].audio.load();
  };

  stopReload7 = () => {
    this.setState({ isPlaying7: false });
    this.state[6].audio.load();
  };

  stopReload8 = () => {
    this.setState({ isPlaying8: false });
    this.state[7].audio.load();
  };

  render() {
    return (
      <>
        <div id="seccion-perculoops" className="perculoops">
          <div className="perculoops-indice">
            <div className="perculoops-indice-semiCirculo">
              <h2>Perculoops</h2>
            </div>
          </div>
          {<DivInicioSesion />}
          <div className="contenedor-reproductor">
            <div className="perculoops-reproductor">
              <h4>{this.enReproduccionNombre}</h4>
              <div className="perculoops-reproductor-progreso"></div>
              <div className="perculoops-reproductor-duracion"></div>
              <div className="perculoops-reproductor-controladores">
                <button onClick={this.aDetener} className="btn-stop">
                  Stop
                </button>
                <button onClick={this.enReproduccion} className="btn-play">
                  Play
                </button>
                <button onClick={this.enReproduccion} className="btn-pausa">
                  Pausa
                </button>
              </div>
            </div>
            <div class="perculoops-lista_de_temas">
              <div class="item_1">
                <div class="item-play">
                  <button onClick={this.playPause}>
                    {this.state.isPlaying ? "Pausa" : "Play"}
                  </button>
                </div>

                {/* <div>
                  <button onClick={this.stopReload}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[0].nombre}</p>
                </div>

                <div class="item-descarga">
                <a  href="Ritmo Samba 80 bpm 1.mp3" download="Ritmo Samba 80 bpm 1.mp3">{authUser ? "caca" : "coco"}</a>
                </div> 

                <div class="item-duracion">
                  <p>{this.state[0].duracion}</p>
                </div>
              </div>

              <div class="item_2">
                <div class="item-play">
                  <button onClick={this.playPause2}>
                    {this.state.isPlaying2 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload2}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[1].nombre}</p>
                </div>

               <div class="item-descarga">
                <a href="Ritmo Samba 80 bpm 2.mp3" download="Ritmo Samba 80 bpm 2.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[1].duracion}</p>
                </div>
              </div>

              <div class="item_3">
                <div class="item-play">
                  <button onClick={this.playPause3}>
                    {this.state.isPlaying3 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload3}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[2].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo Samba 90 bpm 1.mp3" download="Ritmo Samba 90 bpm 1.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[2].duracion}</p>
                </div>
              </div>

              <div class="item_4">
                <div class="item-play">
                  <button onClick={this.playPause4}>
                    {this.state.isPlaying4 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload4}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[3].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo Samba 90 bpm 2.mp3" download="Ritmo Samba 90 bpm 2.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[3].duracion}</p>
                </div>
              </div>

              <div class="item_5">
                <div class="item-play">
                  <button onClick={this.playPause5}>
                    {this.state.isPlaying5 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload5}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[4].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo Coco 100 bpm 1.mp3" download="Ritmo Coco 100 bpm 1.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[4].duracion}</p>
                </div>
              </div>

              <div class="item_6">
                <div class="item-play">
                  <button onClick={this.playPause6}>
                    {this.state.isPlaying6 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload6}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[5].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo Coco 100 bpm 2.mp3" download="Ritmo Coco 100 bpm 2.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[5].duracion}</p>
                </div>
              </div>

              <div class="item_7">
                <div class="item-play">
                  <button onClick={this.playPause7}>
                    {this.state.isPlaying7 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload7}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[6].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo Afoxe 80 bpm 1.mp3" download="Ritmo Afoxe 80 bpm 1.mp3"><BotonDescargar/></a>
                </div>

                <div class="item-duracion">
                  <p>{this.state[6].duracion}</p>
                </div>
              </div>

              <div class="item_8">
                <div class="item-play">
                  <button onClick={this.playPause8}>
                    {this.state.isPlaying8 ? "Pausa" : "Play"}
                  </button>
                </div>
                {/* <div>
                  <button onClick={this.stopReload8}>Stop</button>
                </div> */}
                <div class="item-nombre">
                  <p>{this.state[7].nombre}</p>
                </div>

                <div class="item-descarga">
                <a href="Ritmo afoxe 80 bpm 2.mp3" download="Ritmo afoxe 80 bpm 2
                .mp3"><BotonDescargar/></a>
                </div>


                <div class="item-duracion">
                  <p>{this.state[7].duracion}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export { Perculoops };
