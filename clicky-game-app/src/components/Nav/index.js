import React from "react";
import "./style.css";

function Nav(props) {
    return (
        <nav className="navbar">
            <ul>
                <li className="brand">The Clicky Game</li>
                <li>{props.text}</li>
                <li>Score: {props.score} | Top Score: {props.topScore}</li>
            </ul>
        </nav>
    )
}

export default Nav;