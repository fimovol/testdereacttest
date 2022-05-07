import styles from "../style/sobremi.module.css"
import ProyectosQueRealice from "../utils/proyectosjsx"
import calculadora from "../img/calculadora.jpg"
import luces from "../img/luces.jpg"
import movil from "../img/movil.jpg"
import googlemeet from "../img/googlemeet.png"
import scraping from "../img/scraping.jpg"
import {useTranslation} from "react-i18next"

export default function Mejoresproyectos(){
    const [t] = useTranslation("global")
    const calculadorahref = 'https://fimovol.github.io/calculadora/'
    const luceshref = 'https://fimovol.github.io/lucesnavide-as/'
    const movilhref = 'https://github.com/fimovol/fpr_interfaces_senati'
    const googlemeethref = 'https://google-meet-clone-2566-dev.twil.io/index.html'
    const scrapinghref = 'https://djasncjknweiacbaslcjk.herokuapp.com/'
    return (
        <div className={styles.contenedormejoresproyectos}>
            <h2 className={styles.h2}>{t("header.proyects")}</h2>
            <div className={styles.divproyectos}> 
                <ProyectosQueRealice src={googlemeet} href={googlemeethref} alt="docker"/>
                <ProyectosQueRealice src={scraping} href={scrapinghref} alt="scraping web"/> 
                <ProyectosQueRealice src={luces} href={luceshref} alt="luces"/>
                <ProyectosQueRealice src={movil} href={movilhref} alt="movil"/>
                <ProyectosQueRealice src={calculadora} href={calculadorahref} alt="calculadora"/>
            </div>
        </div>
        
    )
}