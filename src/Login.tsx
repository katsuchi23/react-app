import { useState } from "react";
import style from './Login.module.css';
import sound from './assets/login/nakiri-ayame-yo-dazo.mp3';
import credential from './assets/target/login.tsx';

function Login() {
   
    // add time and also video on the right side
    function updateClock(){
        const date = new Date();
        const hours = date.getHours().toString().padStart(2, "0");
        const minutes = date.getMinutes().toString().padStart(2, "0");
        const seconds = date.getSeconds().toString().padStart(2, "0");
        const clockElement = document.getElementById("clock");
        if (clockElement) {
            clockElement.textContent = `${hours}:${minutes}:${seconds}`;
          }

    }

    setInterval(updateClock, 1000);

//    const [count, setCount] = useState(0);

   const buttonsound = () => {
        // if (count > 0) return;

        const audio: any = new Audio(sound);
        audio.play();
        // setCount(c => c + 1);
        // console.log(count);
        // document.getElementById("playbutton")?.style.setProperty("--button-height", "100%");
        
    }

    const {username, password} = credential;

    const check = () => {
        const usernameElement = document.getElementById("username") as HTMLInputElement;
        const passwordElement = document.getElementById("password") as HTMLInputElement;

        const user = usernameElement?.value ?? '';
        const pass = passwordElement?.value ?? '';

        if (user === username && pass === password){
            return;
            // add sound later here
        }
        else{
            alert("wrong credentials");
        }
    }

    return(
    <>
    <div className= {style.box}>
        <div className= {style.loginpicture}>
            <input type="text" className={style.search} />
            <div className={style.date} id = "clock"></div>
        </div>

        <div className= {style.loginpage}>
            <h1 className= {style.title}>Sign Up</h1>
            <div className={style.playbuttondiv}>
                <button className={style.playbutton} id = "playbutton"  onClick={buttonsound}></button>

                <button className={style.playbutton2} id = "playbutton"  onClick={buttonsound}></button>

                <button className={style.playbutton3} id = "playbutton"  onClick={buttonsound}></button>

                <button className={style.playbutton4} id = "playbutton"  onClick={buttonsound}></button>
            </div>
            
            <div className= {style.inputcontainer}>
                <input type="text" className= {style.input} id = "username" autoComplete="off"/>
                <input type="password" className= {style.input} id = "password" autoComplete="off"/>
            </div>
            <button className= {style.button} onClick={check}>Submit</button>
        </div>
        
    </div>
    </>
    )
}

export default Login;
