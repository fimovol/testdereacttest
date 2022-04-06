import { useState } from 'react';
import './App.scss';
import imagen from './img/a2-min.png';
import { Link } from "react-router-dom";
import { 
  Routes,
  Route,
  BrowserRouter, 
} from "react-router-dom";
import Sobremi from './routes/sobremi'
import Notfound from './routes/paginanoencontrada'
import Blog from './routes/blog'
import Contacto from './routes/contacto'
import Proyectos from './routes/mejoresproyectos'

function Fotossenalando (){
  return (
      <div className="contenedor">
        <div className="rojo">
            <img src={imagen} alt="" className="img"/>
        </div>
        <div className="verde">
            <img src={imagen} alt="" className="img imgderecha"/>
        </div>
      </div>
  )
}
function Contenidocentral(){
  setTimeout( function() {
    setestado({borderRight: "none"})
  },3000)
  const [estado,setestado] = useState({})
  return(
    <div className="centro">
      <span className='efectoescritura' style={estado}>Programador Front-end</span>
      <span className='efectoescrituraabajo'>en búsqueda de su primer empleo</span>
      <Link to="sobremi" className='parrafo'>sobre mi</Link>
      <Link to="contacto" className='parrafo'>contacto</Link>
      <Link to="proyectos" className='parrafo'>mejores proyectos</Link>
      <Link to="blog" className='parrafo'>Blog y publicaciones</Link>
    </div>
 )
}

function App(){
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Contenidocentral/>} />
          <Route path="/sobremi" element={<Sobremi/>} />
          <Route path="/contacto" element={<Contacto/>} />
          <Route path="/proyectos" element={<Proyectos/>} />
          <Route path="/blog" element={<Blog/>} />
          <Route path="*" element={<Notfound/>} />
        </Routes>
      </BrowserRouter>
      <Fotossenalando/>
    </div>
  );
}

export default App;
