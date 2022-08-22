import styles from "../style/sobremi.module.css"
import {useTranslation} from "react-i18next"
import foto from '../img/foto2.png'
import { TituloDescriptivo } from "../components/tituloDescriptivo"
//import { Testimonio } from "../components/testimonio"

export const Sobremi = () =>{
    const {t} = useTranslation("global")
    return (
        <>
            <div className='flex justify-center items-center flex-col md:w-[33vw] w-[80vw] mt-14 '>
                <TituloDescriptivo>{t("header.about")}</TituloDescriptivo>
                <p className='
                font-sans font-bold select-none
                text-center 
                '>{t("about.complete")}</p>
                <div className={styles.fotosobremi}>
                    <img src={foto} alt="mi foto" className='w-full h-full object-cover'></img>
                </div>
            </div>
        </>
    )
}