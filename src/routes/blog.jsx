import styles from "../style/sobremi.module.css"
import styleblog from '../style/blog.module.css'
import { useTranslation } from "react-i18next"
import { Caja } from "../utils/cajablog.jsx"
import imagen from '../img/movil.jpg'
import imagend from '../img/luces.jpg'
import imagenq from '../img/a2-min.png'
import imagenf from '../img/calculadora.jpg'

export function Blog(){
    
    const [t] = useTranslation("global")
    //t("blog.description")
    return (
        <div className={styles.contenedorblog}>
            <h1 className={styleblog.h1}>{t("blog.title")}</h1>
            <section className={styleblog.blogcontainer}>
                <Caja descripcion={t("blog.description")} imagen={imagen}/>
                <Caja descripcion={t("blog.description")} imagen={imagend}/>
                <Caja descripcion={t("blog.description")} imagen={imagenq}/>
                <Caja descripcion={t("blog.description")} imagen={imagenf}/>
            </section>
        </div>
        
    )
}