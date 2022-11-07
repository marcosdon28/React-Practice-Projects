import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";
function ContactCard(props){
    return(
        <div className="card">
            <div className="top">
                <h1 className="name">{props.name}</h1>
                <Avatar imgURL = {props.imgURL}/>
                
            </div>
            <div className="bottom">
                <Detail detailInfo = {props.email}/>
                <Detail detailInfo = {props.phone}/>
                
            </div>  
        </div>
        
    );
}

export default ContactCard;