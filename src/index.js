import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Remova temporariamente a importação de CSS
// import './estilos/Global.css'; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);