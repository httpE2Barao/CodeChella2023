import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import IngressoProvider from './components/ingresso/ingresso_provider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
