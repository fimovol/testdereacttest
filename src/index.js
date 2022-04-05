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

ReactDOM.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path='/hola' element={<h1>hola pagina de ejemplo</h1>}/>
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
