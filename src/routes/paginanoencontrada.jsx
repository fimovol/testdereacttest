import { Link } from "react-router-dom"
import styles from "../style/sobremi.module.css"
export default function _(){
    return (
        <div className={styles.contenedorpaginanoencontrada}>
            <h1>lo siento no encontramos lo que buscas</h1>
            <Link to="/" className='z-10 text-azul
             hover:text-celestedark'>
                vamos a la pagina principal
            </Link> 
        </div>
        
    )
}