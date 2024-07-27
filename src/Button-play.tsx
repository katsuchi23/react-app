import { useState } from "react";
import style from './Button.module.css';

function ButtonPlay() {
    const [button, setButton] = useState(style.button);
    const [flag, setFlag] = useState(true);

    function run() {
        setFlag(!flag);
        if (flag) {
            setButton(style.button_click);
            console.log("run");
        } else {
            setButton(style.button);
            console.log("stop");
        }
    }

    return (
        <>
            <button className={button}></button>
            <button className={style.button_blue} onClick={run}>play</button>
        </>
    );
}

export default ButtonPlay;
