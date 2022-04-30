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
    <div className="App">
      <Header/>
      <FotosBackground/>
      <section className='sectionsobremi' id='sobremi'><Sobremi/></section>
      <section className='section' id='contacto'><Contacto/></section>
      <section className='section' id='proyectos'><Proyectos/></section>
      <section className='section' id='Blog'>
        <Link className='link blog' to="/b">{t("blog.text")}</Link>
      </section>
    </div>
  );
}

export default App;
