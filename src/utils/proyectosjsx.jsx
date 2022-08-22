
const ProyectosQueRealice = ({src,href,alt="imagen",repositorio="https://www.google.com/"}) =>{
    return <div className="
    overflow-hidden inline-flex justify-center items-center relative group
    rounded-xl
     w-full my-4">
      <img className='
      group-hover:scale-110 transition group-hover:opacity-60
      ' alt={alt} src={src}/>
      <div className="absolute flex items-center flex-col">
        <a href={href} >
          <div className='text-center mb-4
          py-1 px-4 bg-celeste text-morado border-2 border-morado rounded-full capitalize opacity-0 
          group-hover:opacity-100 transition font-sans z-10 font-bold inline-block
          '>website</div>
        </a>
        <a href={repositorio}>
          <div className='text-center
          py-1 px-4 bg-morado text-celeste border-2 border-celeste rounded-full capitalize opacity-0 
          group-hover:opacity-100 transition font-sans z-10 font-bold inline-block
          '>repositorio</div>
        </a>
        
      </div>
    </div>
  }

export default ProyectosQueRealice