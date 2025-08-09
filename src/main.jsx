import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx'; // Make sure it has './' at the start
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
