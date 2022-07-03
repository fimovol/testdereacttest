export const EnlaceContacto =({href,children})=> {
    return <a className='
    font-sans decoration-transparent text-2xl text-neutral-100
    transition select-none hover:text-neutral-800 py-6
    ' href={href} target="_blank" rel="noreferrer">
        {children}
    </a> 
}