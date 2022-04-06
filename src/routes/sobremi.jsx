import styles from "../style/sobremi.module.css"
import foto1 from "../img/foto1.png"

export default function sobremi(){
    return (
        <>
            <div className={styles.contenido} >
                <p className={styles.p}>adasdadasjbd</p>
                <p className={styles.p}>adasdadasjbd</p>
                <p className={styles.p}>adasdadasjbd</p>
                <p className={styles.p}>adasdadasjbd</p>
                <p className={styles.p}>adasdadasjbd</p>
                <p className={styles.p}>adasdadasjbd</p>
                <div className={styles.block}> </div>
            </div>
            <div className={styles.cuadrado}>
                <img src={foto1} alt="" className={styles.imagen} />
            </div>
        </>
    )
}