
export const Buttonchangelenguaje = ({estilos, idioma, children,cambiaridioma}) => {

    return <button className="
    text-morado bg-celeste py-2 px-3 rounded-full border-2 border-morado
    hover:text-celeste hover:bg-morado hover:border-celeste transition mx-1
    " style={estilos} onClick={() => cambiaridioma.changeLanguage(idioma)}>
        {children}
    </button>
}