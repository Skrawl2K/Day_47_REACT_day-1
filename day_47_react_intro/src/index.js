//library import
// import yourName from 'react';
import React from 'react';
import ReactDOM from 'react-dom/client';

//file import

// bei css import benötigen wir keinen extra namen
import './index.css';
// lokaler import einer component
import App from './App';




// Hier wird das Root Element erstellt
const root = ReactDOM.createRoot(document.getElementById('root'));


// Hier wird eine React Komponente an die render funktion übergeben
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

