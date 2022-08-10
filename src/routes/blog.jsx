import { useTranslation } from "react-i18next"
import { Caja } from "../utils/cajablog.jsx"
import imagen from '../img/movil.jpg'
import imagend from '../img/luces.jpg'
import imagenf from '../img/calculadora.jpg'

export function Blog(){
    
    const [t] = useTranslation("global")
    //t("blog.description")
    return (
        <div className='flex items-center justify-center flex-col '>
            <h1 className='mx-4 my-5 uppercase font-mono text-3xl font-extrabold tracking-wide underline'>{t("blog.title")}</h1>
            <section className='mt-10 w-[90vw] flex sm:justify-between flex-wrap justify-center '>
                <Caja descripcion={t("blog.description")} imagen={imagen}/>
                <Caja descripcion={t("blog.description")} imagen={imagend}/>
                <Caja descripcion={t("blog.description")} imagen={imagenf}/>
            </section>
        </div>
        
    )
}