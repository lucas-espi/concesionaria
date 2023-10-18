import './App.css';
import { Header } from './assets/components/header';
import { Slider } from './assets/components/slider';
import { GestoriaHome } from './assets/components/gestoria-seguros';
import { Whatsapp } from './assets/components/whatsapp-icon';
import { Footer } from './assets/components/footer';
import 'bootstrap/dist/css/bootstrap.css';


function App() {

  return (
    <>
    <Header/>
    <Slider/>
    {/* Va el filtro de vehiculos */}
    <GestoriaHome />
    <Whatsapp/>
    <Footer/>
    </>
  )
}

export default App
