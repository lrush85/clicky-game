import React from "react";
import "./style.css";


function ClickyCard(props) {
    return (
            <div 
            className={`image`}
            style={{paddingTop: "10px"}}
            >

            <img 
                alt={props.name} 
                src={props.img}
                className={`clicky-image ${props.style}`}
                onClick ={() => {
                    props.handleClick(props);
                }}
            />

            </div>

    )
}

export default ClickyCard;