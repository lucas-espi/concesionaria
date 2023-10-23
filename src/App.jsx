import './App.css';
import { Header } from './assets/components/header';
import { Whatsapp } from './assets/components/whatsapp-icon';
import { Footer } from './assets/components/footer';
import { Route, Routes } from "react-router-dom";
import { GestoriaHome} from './assets/peages/home/gestoria-seguros';
import {Empresa} from './assets/peages/empresa/empresa'
import {Gestoria} from './assets/peages/gestoria/gestoria'
import { Seguros } from './assets/peages/seguros/seguros';
import { Financiacion } from './assets/peages/financiacion/financiacion';
import { Contacto } from './assets/peages/conacto/contacto';
import { Vehiculos } from './assets/peages/vehiculos/vehiculos';



function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<GestoriaHome />}></Route>
      <Route exact path="/empresa" element={<Empresa />}></Route>
      <Route exact path="/vehiculos" element={<Vehiculos/>}></Route>
      <Route exact path="/gestoria" element={<Gestoria />}></Route>
      <Route exact path="/seguros" element={<Seguros />}></Route>
      <Route exact path="/financiacion" element={<Financiacion />}></Route>
      <Route exact path="/contacto" element={<Contacto/>}></Route>
    </Routes>
    <Whatsapp/>
    <Footer/>
    </>
  )
}

export default App
