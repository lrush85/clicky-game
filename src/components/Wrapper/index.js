import React from "react";
// import "./style.css";

function Wrapper(props) {  
    return <div style={wrapperStyle}>{props.children}</div>
}

const wrapperStyle = {
    paddingTop: "180px",
}


export default Wrapper;