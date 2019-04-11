import React from "react";
import "./style.css";

function Nav() {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">Clicky Game</li>
                <li>Click an image to begin!</li>
                <li>Score: 0 | Top Score: 0</li>
            </ul>
        </nav>
    )
}

export default Nav;