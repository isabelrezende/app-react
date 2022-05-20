import React from "react";
import './Header.css';

const Header= () => {
    return (

       <div className="header">
           <img src="" alt="avatar_usuario" />
           <div className="nav">
               <ul>
                   <li>Perfil</li>
                   <li>Preferências</li>
                   <li>Sair</li>
               </ul>
           </div>
       </div>
        
    );
}

export default Header;