import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Filmes from './pages/Filmes/home';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
 <Filmes/>
  </React.StrictMode>
);
