import React from "react";
import Input from "./Input";



function LoginCard (){
    return (
        <form className="form">
            <Input type="text" placeholder="Username" />
            <Input type="password" placeholder="Password" />
            <button type="submit">Enviar</button>
        </form>
    );
}

export default LoginCard;