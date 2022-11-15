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
        width: "29ch",
        animation: "typing 3s steps(29),blink .5s infinite step-end alternate ,aparecer 0.1s infinite",
        animationDelay: "3.5s"
      }
    }
    
    setTimeout( function() {
        setestado({
          borderRight: "none"
        })
      },3000)
      const [estado,setestado] = useState({})

    return <>
      <section className='section' id='home'>
      <div className="h-screen w-screen relative 
      flex justify-center items-center flex-col text-center">
        <h1 className='efectoescritura' style={estado}>{t("effectwrite._1")}</h1>
        <span className='efectoescrituraabajo' style={estilos}>{t("effectwrite._2")}</span>
      </div>
    </section>
    </>
}