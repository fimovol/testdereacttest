import { useState } from 'react';
import './App.scss';
import imagen from './img/a2.png';
import { Link } from "react-router-dom";

function App(){
  setTimeout( function() {
    setestado({borderRight: "none"})
  },3000)
  const [estado,setestado] = useState({})
  return (
    <div className="App">
      <div className="centro">
        <span className='efectoescritura' style={estado}>Programador full-stack</span>
        <span className='efectoescrituraabajo'>en búsqueda de su primer empleo</span>
        <p className='parrafo'>sobre mi</p>
        <p className='parrafo'>contacto</p>
        <p className='parrafo'>mejores proyectos</p>
        <p className='parrafo'>esto es nada q</p>
        <Link to="hola">ejemplo</Link>
    </div>
    <div className="contenedor">
        <div className="rojo">
            <img src={imagen} alt="" className="img"/>
        </div>
        <div className="verde">
            <img src={imagen} alt="" className="img imgderecha"/>
        </div>
    </div>
    </div>
  );
}

export default App;
