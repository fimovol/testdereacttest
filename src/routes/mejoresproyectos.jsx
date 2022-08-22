import ProyectosQueRealice from "../utils/proyectosjsx"
import calculadora from "../img/calculadora.jpg"
import luces from "../img/luces.jpg"
import movil from "../img/movil.jpg"
import googlemeet from "../img/googlemeet.png"
import scraping from "../img/scraping.jpg"
import {useTranslation} from "react-i18next"
import { TituloDescriptivo } from "../components/tituloDescriptivo"

export default function Mejoresproyectos(){
    const [t] = useTranslation("global")
    const calculadorahref = 'https://fimovol.github.io/calculadora/'
    const luceshref = 'https://fimovol.github.io/lucesnavide-as/'
    const movilhref = 'https://github.com/fimovol/fpr_interfaces_senati'
    const googlemeethref = 'https://google-meet-clone-2000-dev.twil.io/index.html'
    const scrapinghref = 'https://djasncjknweiacbaslcjk.herokuapp.com/'
    const repositoriogooglemeet = 'https://github.com/fimovol/google-clone-teclado'
    const repositorioscraper = 'https://github.com/fimovol/noticias_variadas_scraping_cliente'
    const repositorioluces = 'https://github.com/fimovol/lucesnavide-as'
    const repositoriocalculadora = 'https://github.com/fimovol/calculadora'
    return (
        <div className="flex items-center flex-col">
            <TituloDescriptivo>
                {t("header.proyects")}
            </TituloDescriptivo>
            <div className="p-3 md:w-2/5"> 
                <ProyectosQueRealice 
                    src={googlemeet}
                    href={googlemeethref} 
                    repositorio={repositoriogooglemeet} 
                    alt="docker"/>
                <ProyectosQueRealice 
                    src={scraping} 
                    href={scrapinghref} 
                    repositorio={repositorioscraper}
                    alt="scraping web"/> 
                <ProyectosQueRealice 
                    src={luces} 
                    href={luceshref} 
                    repositorio={repositorioluces}
                    alt="luces"/>
                <ProyectosQueRealice 
                    src={movil} 
                    href={movilhref}
                    repositorio={movilhref} 
                    alt="movil"/>
                <ProyectosQueRealice 
                    src={calculadora}
                    href={calculadorahref} 
                    repositorio={repositoriocalculadora}
                    alt="calculadora"/>
            </div>
        </div>
        
    )
}