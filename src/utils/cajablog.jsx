import styleblog from '../style/blog.module.css'
import { Link } from 'react-router-dom'


export const Caja = ({descripcion,imagen}) => {

    return <div className={styleblog.caja}>
    <Link to="jeje" className={styleblog.href}>
        <div className={styleblog.relleno}>
            <div className={styleblog.arriba}>
                <div className={styleblog.centrado}>
                    <img src={imagen} alt="asdadasd" className={styleblog.imagen}/>
                </div>
            </div>
            <div className={styleblog.abajo}>
                <h1 className={styleblog.descripcion}>{descripcion}</h1>
                <p className={styleblog.texto}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni. Fugit laborum suscipit quia at quo repudiandae animi et, nihil reiciendis quas natus nemo id veniam est deserunt, reprehenderit optio.</p>
            </div>
        </div>
    </Link>
</div>
}