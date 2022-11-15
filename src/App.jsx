import './App.scss';
import {Sobremi} from './routes/sobremi'
import {Contacto} from './routes/contacto'
import Proyectos from './routes/mejoresproyectos'
import { Link } from 'react-router-dom'
import Header from "./components/header"
import { FotosBackground } from './components/fotosbackground';
import {useTranslation} from "react-i18next"

function App(){
  const [t] = useTranslation("global")
  return (
    <div className="bg-celestedark w-screen">
      <header>
        <Header/>
      </header>
      <main>
        <FotosBackground/>
        <section className='sectionsobremi' id='sobremi'><Sobremi/></section>
        <section className='section' id='contacto'><Contacto/></section>
        <section id='proyectos'><Proyectos/></section>
        <section className='section' id='Blog'>
          <Link className='
          py-1 px-4 bg-celeste text-morado border-4 border-morado rounded-full
          transition font-sans hover:bg-morado hover:text-celeste uppercase
          hover:border-celeste font-extrabold hover:scale-110 tracking-wider
          ' to="/blog">{t("blog.text")}</Link>
        </section>
      </main>
      <footer className='p-6 italic bg-amarillodark'>
        <h3>esta es una pagina creada por <span>javier sanchez</span></h3>
      </footer>
    </div>
  );
}

export default App;
