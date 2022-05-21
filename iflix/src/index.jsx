import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from './components/Header';
import MenuLateral from './components/MenuLateral';
import Inicio from './pages/Inicio';
import Layout from './pages/Layout';
import Perfil from './pages/Perfil';
import Preferencias from './pages/Preferencias';
import Playlist from './pages/Playlists';
import CriarPlaylist from './pages/CriarPlaylist';
import NotFound from './pages/NotFound';
import './index.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <div>
      <Header />
      <div className='main'>class declarada no MenuLateral.css
        <MenuLateral />
        <App />
        </div>
      <Footer /> 
    </div> */}
    <BrowserRouter>
    <Header />
    <MenuLateral />
      <Routes>
        <Route path="/" element={<Layout />}/>
        <Route index element={<Inicio />} />
        <Route path="perfil" element={<Perfil />} />
        <Route path="preferencias" element={<Preferencias />} />
        <Route path="criarplaylist" element={<CriarPlaylist />} />
        <Route path="playlists" element={<Playlist />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

