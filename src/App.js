import './App.css'
// import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './Components/About/About'
import { Contacto } from './Components/Contacto/Contacto'
import { Footer } from './Components/Footer/Footer'
import { Galeria } from './Components/Galeria/Galeria'
import { Navbar } from './Components/Navbar/Navbar'
import { Perculoops } from './Components/Perculoops/Perculoops'
import { Sesionista } from './Components/Sesionista/Sesionista'

function App() {

  
  return (
    <div className="App">
      <Navbar />
      <About />
      <Galeria />
      <Perculoops /> 
      <Sesionista />
      <Contacto />
      <Footer />
    </div>
  )
}

export default App