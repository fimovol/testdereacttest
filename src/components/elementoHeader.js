export const ElementoHeader = ({estilos,children,elemento,ruta}) => {
    return  <a href={`#${ruta}`}
     className={`
     font-sans capitalize text-neutral-800 hidden lg:block transition duration-200 select-none
     px-4 bg-slate-400 rounded-full mx-3 border border-slate-400 font-bold
     hover:border hover:text-neutral-300 hover:bg-neutral-800
     `}
     onClick={() => elemento(true)}
     style={estilos}
       >
        {children}
    </a>
}