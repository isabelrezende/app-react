import React from "react";
import './MenuLateral.css';

const MenuLateral = () => {
    return (
        <div className="menulateral">
            <div className="flexrow">
                {/*botão criar playlist*/}
                <span>Criar Playlist</span>
            </div>
            <div className="flexrow">
                {/*botão playlists*/}
                <span>Playlists</span>
            </div>
            <div>
                {/*playlists criadas*/}
            </div>
        </div>
    )
}

export default MenuLateral;