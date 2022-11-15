import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App.jsx'
import reportWebVitals from './reportWebVitals'
import Notfound from './routes/paginanoencontrada'
import { 
  Routes,
  Route,
  BrowserRouter, 
} from "react-router-dom";
import {Blog} from "./routes/blog"
import { I18nextProvider } from "react-i18next"
import i18next from "i18next"
import global_es from "./translate/es/global.json"
import global_en from "./translate/en/global.json"

i18next.init({
  interpolation:{ escapeValue: false},
  lng:"en",
  resources: {
    es:{
      global:global_es
    },
    en:{
      global: global_en
    }
  }
})

ReactDOM.render(
  <I18nextProvider i18n={i18next}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App />} />
        <Route path="/blog" element={ <Blog />} />
        <Route path="*" element={ <Notfound />} />
      </Routes>
    </BrowserRouter>
  </I18nextProvider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
