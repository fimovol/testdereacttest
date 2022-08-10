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
    <div className="bg-slate-500 w-screen">
      <Header/>
      <FotosBackground/>
      <section className='sectionsobremi' id='sobremi'><Sobremi/></section>
      <section className='section' id='contacto'><Contacto/></section>
      <section id='proyectos'><Proyectos/></section>
      <section className='section' id='Blog'>
        <Link className='
        py-3 px-5 bg-blue-700 text-white rounded-full capitalize
        transition font-sans z-10 hover:bg-blue-900 font-bold hover:scale-110
        ' to="/b">{t("blog.text")}</Link>
      </section>
    </div>
  );
}

export default App;
