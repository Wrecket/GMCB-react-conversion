import React from "react";

const Scroll = (props) => {
    return (
        <div class="tc" style={{overflowY: "scroll", border: "5px solid black", width: "600px", height: "700px", marginLeft: "30%", marginTop: "2%" }}>
            {props.children}
        </div>
    )
}

export default Scroll 