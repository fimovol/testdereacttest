import styles from "../style/sobremi.module.css"
import {useTranslation} from "react-i18next"

export const Sobremi = () =>{
    const {t} = useTranslation("global")
    return (
        <>
            <div className={styles.contenido}>
                <h2>{t("header.about")}</h2>
                <p className={styles.p}>{t("about.line-1")}</p>
                <p className={styles.p}>{t("about.line-2")} </p>
                <p className={styles.p}>{t("about.line-3")}</p>
                <p className={styles.p}>{t("about.line-4")}</p>
                <p className={styles.p}>{t("about.line-5")}</p>
                <p className={styles.p}>{t("about.line-6")}</p>
            </div>
        </>
    )
}