import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import App from './App';
//import Footer from './components/Footer';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div>
      <Header />
      <div className='main'>{/*class declarada no MenuLateral.css*/}
        <MenuLateral />
        <App />
        </div>
      {/* <Footer /> */}
    </div>
  </React.StrictMode>
);