import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './sass/style.dark.scss';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
