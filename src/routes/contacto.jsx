import styles from "../style/sobremi.module.css"

export default function contacto(){
    return (
        <div className={styles.contenedorcontacto}>
            <p className={styles.psincapitalize}>CORREO :</p>
            <p className={styles.psincapitalize}><a href="mailto:javiersanchezch@outlook.es">javiersanchezch@outlook.es</a> </p>
            <p className={styles.psincapitalize}>GITHUB : </p>
            <p className={styles.psincapitalize}><a href="https://github.com/fimovol" target="_blank" rel="noreferrer">github.com/fimovol</a> </p>
            <p className={styles.psincapitalize}>LINKEDIN : </p>
            <p className={styles.psincapitalize}><a href="https://www.linkedin.com/in/javier-francisco-s%C3%A1nchez-529605167/" target="_blank" rel="noreferrer">linkedin/javierfrancisco</a> </p>
        </div>
        
    )
}