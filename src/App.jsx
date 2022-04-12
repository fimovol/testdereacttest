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
  const [elemento,setelemento]=useState(true)
  let estilos = null
  let navbarestilo = null
  if(elemento === true){

  }
  if(elemento === false){
    estilos = {
      display: 'block',
    }
    navbarestilo = {
      height: 'auto',
      justifyContent: 'center',
      flexDirection: 'column'
    }
  }
  return (
    <div className="App">
      <nav className='navbar' style={navbarestilo}>
        <div className='tres lineas'>
          <i className="fa fa-bars fa-3" aria-hidden="true" onClick={() => setelemento(!elemento)}></i>
        </div>
        <a href="#home" className='parrafo' style={estilos} onClick={() => setelemento(true)}>home</a>
        <a href="#sobremi" className='parrafo' style={estilos} onClick={() => setelemento(true)}>sobre mi</a>
        <a href="#contacto" className='parrafo' style={estilos} onClick={() => setelemento(true)}>contacto</a>
        <a href="#proyectos" className='parrafo' style={estilos} onClick={() => setelemento(true)}>mejores proyectos</a>
        <a href="#Blog" className='parrafo' style={estilos} onClick={() => setelemento(true)}>Blog y publicaciones</a>
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
