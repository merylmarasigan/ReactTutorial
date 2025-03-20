import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); //in index.html there's a div called root, this renders the App in that div
root.render(
  //renders out App component to the DOM
  <React.StrictMode>
    {/* App is a component that's being rendered 
    root points to an element with the id 'root' so App will be rendered there in index.html
    
    */}
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
