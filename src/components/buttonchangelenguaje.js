import {useTranslation} from "react-i18next"

export const Buttonchangelenguaje = ({estilos, idioma, children}) => {
    const [t,i18n] =useTranslation("global")

    return <button className="
    text-indigo-900 bg-indigo-400  py-2 px-3 rounded-full border-2 border-indigo-900
    hover:text-indigo-400 hover:bg-indigo-900 hover:border-indigo-900 transition mx-1
    " style={estilos} onClick={() => i18n.changeLanguage(idioma)}>
        {children}
    </button>
}