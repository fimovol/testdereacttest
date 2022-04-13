import styles from "../style/sobremi.module.css"
import styleblog from '../style/blog.module.css'
import { Link,Outlet } from "react-router-dom"

export default function blog(){
    
    
    return (
        <div className={styles.contenedorblog}>
            <h1 className={styleblog.h1}>ten algunos articulos recomendados</h1>
            <section className={styleblog.blogcontainer}>
                
                    <Link to="jeje">
                        <div className={styleblog.caja}> 
                        </div>
                    </Link>
                <div className={styleblog.caja}></div>
                <div className={styleblog.caja}></div>
                <div className={styleblog.caja}></div>
            </section>
        </div>
        
    )
}