
const ProyectosQueRealice = ({src,href,alt="imagen",repositorio="https://www.google.com/"}) =>{
    return <div className="
    overflow-hidden inline-flex justify-center items-center relative group
    rounded-xl
     w-full my-4">
      <img className='
      group-hover:scale-110 transition group-hover:opacity-60
      ' alt={alt} src={src}/>
      <div className="absolute">
        <a href={href}>
          <div className='mb-4 text-center
          py-3 px-5 bg-blue-700 text-white rounded-full capitalize opacity-0 
          group-hover:opacity-100 transition font-sans z-10 hover:bg-blue-900
          '>website</div>
        </a>
        <a href={repositorio}>
          <div className='text-center
          py-3 px-5 bg-blue-700 text-white rounded-full capitalize opacity-0 
          group-hover:opacity-100 transition font-sans z-10 hover:bg-blue-900
          '>repositorio</div>
        </a>
        
      </div>
    </div>
  }

export default ProyectosQueRealice