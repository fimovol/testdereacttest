import { useState } from 'react';
import './App.scss';
import imagen from './img/a2-min.png';
import Sobremi from './routes/sobremi'
import Contacto from './routes/contacto'
import Proyectos from './routes/mejoresproyectos'
import { Link } from 'react-router-dom';
import {useTranslation} from "react-i18next"

function Fotossenalando (){
  setTimeout( function() {
    setestado({borderRight: "none"})
  },3000)
  const [estado,setestado] = useState({})
  return (
      <section className='section' id='home'>
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
  const [t,i18n] =useTranslation("global")

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
        <a href="#home" className='parrafo' style={estilos} onClick={() => setelemento(true)}>{t("header.home")}</a>
        <a href="#sobremi" className='parrafo' style={estilos} onClick={() => setelemento(true)}>{t("header.about")}</a>
        <a href="#contacto" className='parrafo' style={estilos} onClick={() => setelemento(true)}>{t("header.contact")}</a>
        <a href="#proyectos" className='parrafo' style={estilos} onClick={() => setelemento(true)}>{t("header.proyects")}</a>
        <a href="#Blog" className='parrafo' style={estilos} onClick={() => setelemento(true)}>{t("header.blog")}</a>
        <button style={estilos} onClick={() => i18n.changeLanguage("es")}>Español</button>
        <button style={estilos} onClick={() => i18n.changeLanguage("en")}>English</button>
      </nav>
      <Fotossenalando/>
      <section className='section' id='sobremi'><Sobremi/></section>
      <section className='section' id='contacto'><Contacto/></section>
      <section className='section' id='proyectos'><Proyectos/></section>
      <section className='section' id='Blog'>
        <Link className='link blog' to="/b">vamos a mi blog</Link>
      </section>
      
    </div>
  );
}

export default App;
