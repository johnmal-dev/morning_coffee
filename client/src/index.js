import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Wallpaper from './components/Wallpaper';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <Wallpaper />
    <App />
  </div>
);
