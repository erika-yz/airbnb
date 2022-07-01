import React from 'react';
// import ReactDOM from 'react-dom';
import {createRoot} from 'react-dom/client'
import App from './App';
import style from './styles/style.css'

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App />);