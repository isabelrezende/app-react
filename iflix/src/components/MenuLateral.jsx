import React from "react";
import { Link } from "react-router-dom";
import './MenuLateral.css';

const MenuLateral = () => {
    return (
        <div className="menulateral">
            <div className="flexrow">
                {/*botão criar playlist*/}
                <Link to="criarplaylist"><span>Criar Playlist</span></Link>
            </div>
            <div className="flexrow">
                {/*botão playlists*/}
                <Link to="playlists"><span>Playlist</span></Link>
            </div>
            <div>
                {/*playlists criadas*/}
            </div>
        </div>
    )
}

export default MenuLateral;