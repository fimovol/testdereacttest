import styles from "../style/sobremi.module.css"
import { useTranslation } from "react-i18next"

export function Contacto(){
    const [t] = useTranslation("global")

    let estilos = {
        textTransform : "uppercase"
    }
    return (
        <div className={styles.contenedorcontacto}>
            <h2>{t("header.contact")}</h2>
            <h3 style={estilos}>{t("contact.mail")}:</h3>
            <p><a className={styles.psincapitalize} href="mailto:javiersanchezch@outlook.es">javiersanchezch@outlook.es</a> </p>
            <h3 >GITHUB : </h3>
            <p><a className={styles.psincapitalize} href="https://github.com/fimovol" target="_blank" rel="noreferrer">github.com/fimovol</a> </p>
            <h3>LINKEDIN : </h3>
            <p ><a className={styles.psincapitalize} href="https://www.linkedin.com/in/javier-francisco-s%C3%A1nchez-529605167/" target="_blank" rel="noreferrer">linkedin/javierfrancisco</a> </p>
        </div>
        
    )
}