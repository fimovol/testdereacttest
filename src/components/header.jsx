import {useTranslation} from "react-i18next"
import { useState } from 'react';

export default function _(){
    const [t,i18n] =useTranslation("global")
    let icono
    const [elemento,setelemento]=useState(true)
    let estilos = {
      cursor: "pointer"
    }
    let navbarestilo = null
    if(elemento === true){
      icono = "fa fa-bars fa-3"
    }
    if(elemento === false){
      icono = "fa fa-times"
      estilos = {
        display: 'block',
        cursor: "pointer"
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
        <i className={icono} style={{cursor:"pointer"}} onClick={() => setelemento(!elemento)}></i>
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