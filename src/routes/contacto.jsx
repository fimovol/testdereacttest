import styles from "../style/sobremi.module.css"
import { useTranslation } from "react-i18next"
import { TituloDescriptivo } from "../components/tituloDescriptivo"
import { EnlaceContacto } from "../components/enlaces"

export function Contacto(){
    const [t] = useTranslation("global")

    return (
        <div className={styles.contenedorcontacto}>
            <TituloDescriptivo>{t("header.contact")}</TituloDescriptivo>
            <h3 className="uppercase my-2" >{t("contact.mail")}:</h3>
            <p> 
                <EnlaceContacto href='mailto:javiersanchezch@outlook.es'>
                    javiersanchezch
                </EnlaceContacto>
            </p>
            <h3 className="my-2">GITHUB : </h3>
            <p>
                <EnlaceContacto href='https://github.com/fimovol'>
                    github.com/fimovol
                </EnlaceContacto>
            </p>
            <h3 className="my-2">LINKEDIN : </h3>
            <p >
                <EnlaceContacto href='https://www.linkedin.com/in/javier-francisco-sanchez/'>
                    linkedin/javierfrancisco
                </EnlaceContacto>
            </p>
        </div>
        
    )
}