export const ElementoHeader = ({estilos,children,elemento,ruta}) => {
    return  <a href={`#${ruta}`}
     className='
     font-sans capitalize text-morado hidden lg:block transition duration-200 select-none
     px-4 bg-celeste rounded-full mx-3 border-2 border-morado font-bold
     hover:border-celeste hover:text-celeste hover:bg-transparent
     
     '
     onClick={() => elemento(true)}
     style={estilos}
       >
        {children}
    </a>
}