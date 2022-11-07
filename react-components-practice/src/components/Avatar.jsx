import React from "react";

function Avatar(props){
    return(
        <img className="circle-img" src ={props.imgURL} />
    );
}

export default Avatar;