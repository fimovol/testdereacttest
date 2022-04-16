import styles from "../style/sobremi.module.css"
import styleblog from '../style/blog.module.css'
import { Link,Outlet } from "react-router-dom"
import imagen from '../img/movil.jpg'

export default function blog(){
    
    
    return (
        <div className={styles.contenedorblog}>
            <h1 className={styleblog.h1}>ten algunos articulos recomendados</h1>
            <section className={styleblog.blogcontainer}>
                
                   
                 
                
                <div className={styleblog.caja}>
                    <Link to="jeje">
                        <div className={styleblog.relleno}>
                            <div className={styleblog.arriba}>
                                <div className={styleblog.centrado}>
                                    <img src={imagen} alt="asdadasd" className={styleblog.imagen}/>
                                </div>
                                
                            </div>
                            <div className={styleblog.abajo}></div>
                        </div>
                    </Link>
                </div>
                
                
            </section>
        </div>
        
    )
}