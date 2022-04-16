import {useTranslation} from "react-i18next"
import { useState } from 'react';

export default function _(){
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
  )
}