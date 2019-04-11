import React from "react";

function ClickyCard(props) {
    return (
            <div className="img-responsive col-md-4" style={{paddingTop: "150px"}}>
                <img alt="the office cast" src={props.img}className="clicky-image" style={imageStyles} />
            </div>
    )
}

const imageStyles = {
    width: "200px",
    height: "260px",
    border: "3px solid #333",
    boxShadow: "1px 2px 20px #333",
    cursor: "pointer"
};

export default ClickyCard;