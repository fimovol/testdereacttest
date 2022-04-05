import React from 'react';
import { 
  Routes,
  Route,
  HashRouter, 
} from "react-router-dom";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import Notfound from './routes/paginanoencontrada'
import Blog from './routes/blog'
import Contacto from './routes/contacto'
import Proyectos from './routes/mejoresproyectos'
import Sobremi from './routes/sobremi'

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/sobremi" element={<Sobremi />} />
      <Route path="/contacto" element={<Contacto />} />
      <Route path="/proyectos" element={<Proyectos />} />
      <Route path='/blog' element={<Blog/>}/>
      <Route path="*" element={<Notfound />} />
    </Routes>
  </HashRouter>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
