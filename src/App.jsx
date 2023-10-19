import './App.css';
import { Header } from './assets/components/header';
import { Whatsapp } from './assets/components/whatsapp-icon';
import { Footer } from './assets/components/footer';
import { Route, Routes } from "react-router-dom";
import { GestoriaHome} from './assets/peages/home/gestoria-seguros';
import {Empresa} from './assets/peages/empresa/empresa'


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route exact path="/" element={<GestoriaHome />}></Route>
      <Route exact path="/empresa" element={<Empresa />}></Route>
    </Routes>
    <Whatsapp/>
    <Footer/>
    </>
  )
}

export default App
