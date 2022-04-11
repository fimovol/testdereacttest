import { useState } from 'react';
import './App.scss';
import imagen from './img/a2-min.png';
import Sobremi from './routes/sobremi'
import Blog from './routes/blog'
import Contacto from './routes/contacto'
import Proyectos from './routes/mejoresproyectos'

function Fotossenalando (){
  setTimeout( function() {
    setestado({borderRight: "none"})
  },3000)
  const [estado,setestado] = useState({})
  return (
      <section id='home' className="contenedor">
        <div className="rojo">
            <img src={imagen} alt="" className="img"/>
            <img src={imagen} alt="" className="img imgderecha"/>
        </div>
        <div className="centro">
          <span className='efectoescritura' style={estado}>Programador Front-end</span>
          <span className='efectoescrituraabajo'>en búsqueda de su primer empleo</span>
        </div>
      </section>
  )
}

function App(){
  return (
    <div className="App">
      <nav>
        <a href="#home" className='parrafo'>home</a>
        <a href="#sobremi" className='parrafo'>sobre mi</a>
        <a href="#contacto" className='parrafo'>contacto</a>
        <a href="#proyectos" className='parrafo'>mejores proyectos</a>
        <a href="#Blog" className='parrafo'>Blog y publicaciones</a>
      </nav>
      <Fotossenalando/>
      <section id='sobremi'><Sobremi/></section>
      <section id='contacto'><Contacto/></section>
      <section id='proyectos'><Proyectos/></section>
      <section id='Blog'><Blog/></section>
    </div>
  );
}

export default App;
