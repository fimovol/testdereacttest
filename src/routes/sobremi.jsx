import styles from "../style/sobremi.module.css"
import {useTranslation} from "react-i18next"
import foto from '../img/foto2.png'
import { TituloDescriptivo } from "../components/tituloDescriptivo"
//import { Testimonio } from "../components/testimonio"

export const Sobremi = () =>{
    const {t} = useTranslation("global")
    return (
        <>
            <div className={styles.sobremicontenido}>
                <TituloDescriptivo>{t("header.about")}</TituloDescriptivo>
                <p className='
                font-sans font-bold text-neutral-900 select-none
                text-center 
                '>{t("about.complete")}</p>
                <div className={styles.fotosobremi}>
                    <img src={foto} alt="mi foto" className={styles.foto}></img>
                </div>
                <div className={styles.testimonios}>
                    {/* <Testimonio nombre="vamos a cembrar el caos dasd asdasd" parrafo="asdasdasdkjsd"/>
                    <Testimonio nombre="dasuih dasihdkjhdasjkl d" parrafo="asdasdasdkjsd"/>
                    <Testimonio nombre="sad pásdiaiudhasfyagfg asaksjf" parrafo="asdasdasdkjsd"/>
                    <Testimonio nombre="carlos el magnifico" parrafo="Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis vel voluptate id accusamus quos accusantium porro aliquam! Sed quasi molestias placeat velit asperiores hic, quod cum? Eos accusantium atque dolore!"/>
                    <Testimonio nombre="aoidua asjdajsdlajd aslj aldjalsdlk" parrafo="asdasdasdkjsd"/> */}
                </div>
            </div>
                {/* <p className={styles.p}>{t("about.line-2")} </p>
                <p className={styles.p}>{t("about.line-3")}</p>
                <p className={styles.p}>{t("about.line-4")}</p>
                <p className={styles.p}>{t("about.line-5")}</p>
                <p className={styles.p}>{t("about.line-6")}</p> */}
        </>
    )
}