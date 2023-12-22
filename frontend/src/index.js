import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBi4irIORUCIBB33zU7mqgAn8gFX9wAsto",
  authDomain: "react-blog-553d2.firebaseapp.com",
  projectId: "react-blog-553d2",
  storageBucket: "react-blog-553d2.appspot.com",
  messagingSenderId: "614507901492",
  appId: "1:614507901492:web:3cba569dd235839b815061"
};

const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
