import styles from "../style/sobremi.module.css"
import styleblog from '../style/blog.module.css'
import { Link } from "react-router-dom"
import imagen from '../img/movil.jpg'
import { useTranslation } from "react-i18next"

export function Blog(){
    
    const [t] = useTranslation("global")
    return (
        <div className={styles.contenedorblog}>
            <h1 className={styleblog.h1}>{t("blog.title")}</h1>
            <section className={styleblog.blogcontainer}>
                <div className={styleblog.caja}>
                    <Link to="jeje">
                        <div className={styleblog.relleno}>
                            <div className={styleblog.arriba}>
                                <div className={styleblog.centrado}>
                                    <img src={imagen} alt="asdadasd" className={styleblog.imagen}/>
                                </div>
                            </div>
                            <div className={styleblog.abajo}>
                                <h1 className={styleblog.descripcion}>{t("blog.description")}</h1>
                            </div>
                        </div>
                    </Link>
                </div>
            </section>
        </div>
        
    )
}