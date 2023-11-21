import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './search-components/search-App';
import data from './data/pokemon.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App pokemon={data}/>
);