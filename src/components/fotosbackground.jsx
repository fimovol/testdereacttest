import imagen from "../img/a2-min.png"
import { useState } from 'react'
import {useTranslation} from "react-i18next"

export const FotosBackground = () => {
    const [t, i18n] =useTranslation("global")
    let estilos
    if(i18n.language === "es"){
      estilos=null
    }
    if(i18n.language === "en"){
      estilos = {
        width: "26ch",
        animation: "typing 3s steps(26),blink .5s infinite step-end alternate ,aparecer 0.1s infinite",
        animationDelay: "3.5s"
      }
    }
    
    setTimeout( function() {
        setestado({
          borderRight: "none"
        })
      },3000)
      const [estado,setestado] = useState({})

    return <section className='section' id='home'>
    <div className="rojo">
        <img src={imagen} alt="" className="img"/>
        <img src={imagen} alt="" className="img imgderecha"/>
    </div>
    <div className="centro">
      <span className='efectoescritura' style={estado}>{t("effectwrite._1")}</span>
      <span className='efectoescrituraabajo' style={estilos}>{t("effectwrite._2")}</span>
    </div>
  </section>
}