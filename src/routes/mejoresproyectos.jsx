import styles from "../style/sobremi.module.css"
import ProyectosQueRealice from "../utils/proyectosjsx"
import calculadora from "../img/calculadora.jpg"
import luces from "../img/luces.jpg"
import movil from "../img/movil.jpg"
import gqldocker from "../img/gql.jpg"
import scraping from "../img/scraping.jpg"

export default function mejoresproyectos(){
    const calculadorahref = 'https://fimovol.github.io/calculadora/'
    const luceshref = 'https://fimovol.github.io/lucesnavide-as/'
    const movilhref = 'https://github.com/fimovol/fpr_interfaces_senati'
    const gqldockerhref = 'https://github.com/fimovol/test_gql_api_mongo'
    const scrapinghref = 'https://github.com/fimovol/noticias_variadas_scraping_cliente'
    return (
        <div className={styles.contenedormejoresproyectos}>
            <div className={styles.divproyectos}>
                <ProyectosQueRealice src={calculadora} href={calculadorahref} alt="calculadora"/>
                <ProyectosQueRealice src={luces} href={luceshref} alt="luces"/>
                <ProyectosQueRealice src={movil} href={movilhref} alt="movil"/>
                <ProyectosQueRealice src={gqldocker} href={gqldockerhref} alt="docker"/>
                <ProyectosQueRealice src={scraping} href={scrapinghref} alt="scraping web"/> 
            </div>
        </div>
        
    )
}