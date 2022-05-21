import React from "react";
import { Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
        <nav>
            
                <ul>
                <li>
                    <Link to="/">Início</Link>
                </li>
                <li>
                    <Link to="perfil">Perfil</Link>
                </li>
                </ul>
            </nav>
        </>
    )
}

export default Layout;