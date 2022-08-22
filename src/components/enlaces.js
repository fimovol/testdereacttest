export const EnlaceContacto =({href,children})=> {
    return <a className='
    font-sans decoration-transparent text-2xl text-celeste
    transition select-none hover:text-azul py-6
    ' href={href} target="_blank" rel="noreferrer">
        {children}
    </a> 
}