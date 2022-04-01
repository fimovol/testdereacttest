import { useState } from 'react';
import './App.scss';
import imagen from './img/a2.png'

function App(){
  setTimeout( function() {
    setestado({"border-right": "none"})
  },3000)
  const [estado,setestado] = useState({})
  return (
    <div className="App">
      <div className="centro">
        <span className='efectoescritura' style={estado}>programador full stack</span>
        <span className='efectoescrituraabajo'>en busqeda de su primer empleo</span>
        <p className='parrafo'>sobre mi</p>
        <p className='parrafo'>contacto</p>
        <p className='parrafo'>mejores proyectos</p>
        <p className='parrafo'>esto es nada que ver aqui</p>
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
