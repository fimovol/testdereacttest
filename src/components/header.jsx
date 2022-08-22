import {useTranslation} from "react-i18next"
import { useState } from 'react';
import { Buttonchangelenguaje } from "./buttonchangelenguaje";
import { ElementoHeader } from "./elementoHeader";

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
        cursor: "pointer",
        marginBotton: '20px',
        marginTop: '20px'
      }
      navbarestilo = {
        height: 'auto',
        justifyContent: 'center',
        flexDirection: 'column'
      }
  }
    return (
    <nav className='bg-morado w-screen h-[60px]
    flex items-center justify-center fixed top-0 z-10
    navbar' style={navbarestilo}>
      <div className='w-[90px] h-[60px] flex justify-center 
      items-center lg:hidden'>
        <i className={icono} style={{cursor:"pointer"}} onClick={() => setelemento(!elemento)}></i>
      </div>
      <ElementoHeader ruta='home' estilos={estilos} elemento={setelemento}>{t("header.home")}</ElementoHeader>
      <ElementoHeader ruta='sobremi' estilos={estilos} elemento={setelemento}>{t("header.about")}</ElementoHeader>
      <ElementoHeader ruta='contacto' estilos={estilos} elemento={setelemento}>{t("header.contact")}</ElementoHeader>
      <ElementoHeader ruta='proyectos' estilos={estilos} elemento={setelemento}>{t("header.proyects")}</ElementoHeader>
      <ElementoHeader ruta='Blog' estilos={estilos} elemento={setelemento}>{t("header.blog")}</ElementoHeader>
      <Buttonchangelenguaje estilos={estilos} idioma="es" cambiaridioma={i18n}>
        Español
      </Buttonchangelenguaje>
      <Buttonchangelenguaje estilos={estilos} idioma="en" cambiaridioma={i18n}>
        English
      </Buttonchangelenguaje>
  </nav>
  )
}