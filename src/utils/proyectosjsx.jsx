import styles from "../style/sobremi.module.css"

const ProyectosQueRealice = ({src,href,alt="imagen"}) =>{
    return <div className={styles.elementosproyectos}>
      <a href={href} target="_blank" rel="noreferrer">
        <img className={styles.proyectosimagen} alt={alt} src={src}/>
      </a>
    </div>
  }

export default ProyectosQueRealice