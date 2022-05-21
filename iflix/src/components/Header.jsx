import React from "react";
import { Link } from "react-router-dom";
import './Header.css';

const Header= () => {
    return (

       <div className="header">
           <img src="" alt="avatar_usuario" />
           <div className="nav">
               <ul>
                   <li>
                       <Link to="/">Início</Link>
                   </li>
                   <li>
                       <Link to = "perfil">Perfil</Link>
                   </li>
                   <li>
                       <Link to = "preferencias">Preferências</Link>
                   </li>
                   <li>
                       <Link to ="broken">Sair</Link>
                   </li>
               </ul>
           </div>
       </div>
        
    );
}

export default Header;