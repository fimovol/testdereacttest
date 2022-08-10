import { Link } from 'react-router-dom'


export const Caja = ({descripcion,imagen}) => {

    return <div className='w-[270px] h-[405px] rounded bg-blue-700
    mb-[48px] transition hover:-translate-y-4'>
    <Link to="jeje">
        <div className='h-full w-full'>
            <div className='w-full h-1/2 flex justify-center items-center'>
                <div className='w-[250px] h-[170px]'>
                    <img src={imagen} alt="asdadasd" 
                    className='w-full h-full object-cover rounded-lg '/>
                </div>
            </div>
            <div className='w-full h-1/2 overflow-hidden text-ellipsis '>
                <h1 className='font-mono text-white text-center  '>{descripcion}</h1>
                <p className='text-white mx-4 text-center tracking-wide '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, magni. Fugit laborum suscipit quia at quo repudiandae animi et, nihil reiciendis quas natus nemo id veniam est deserunt, reprehenderit optio.</p>
            </div>
        </div>
    </Link>
</div>
}