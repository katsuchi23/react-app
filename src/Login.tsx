import { useState } from "react";
import style from './Login.module.css';

function Login() {

    return(
    <>
    <div className= {style.box}>
        <h1 className= {style.title}>Sign Up</h1>
        <button className={style.playbutton}></button>
        <div className= {style.inputcontainer}>
            <input type="text" className= {style.input}/>
            <input type="text" className= {style.input}/>
        </div>
        <button className= {style.button}>Submit</button>
    </div>
    </>
    )
}

export default Login;