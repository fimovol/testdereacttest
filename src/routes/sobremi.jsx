import styles from "../style/sobremi.module.css"
import {useTranslation} from "react-i18next"
import foto from '../img/foto2.png'

export const Sobremi = () =>{
    const {t} = useTranslation("global")
    return (
        <>
            <div className={styles.sobremicontenido}>
                <h2>{t("header.about")}</h2>
                <h3>¿cuantos candidatos tienen su propio dominio?</h3>
                <p className={styles.p}>{t("about.complete")}</p>
                <div className={styles.fotosobremi}>
                    <img src={foto} alt="mi foto" className={styles.foto}></img>
                </div>
                <div className={styles.testimonios}>
                    <div className={styles.testimonio}>
                        <h4>dashdkjahsdajsd</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam neque quaerat tempora. Illo necessitatibus repudiandae, quidem laboriosam </p>
                    </div>
                    <div className={styles.testimonio}>
                    <h4>dashdkjahsdajsd</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam neque quaerat tempora. Illo necessitatibus repudiandae, quidem laboriosam </p>
                    
                    </div>
                    <div className={styles.testimonio}>
                    <h4>dashdkjahsdajsd</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis laboriosam neque quaerat tempora. Illo necessitatibus repudiandae, quidem laboriosam </p>
                    
                    </div>
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