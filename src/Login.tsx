import { useState } from "react";
import style from './Login.module.css';
import sound from './assets/login/nakiri-ayame-yo-dazo.mp3';

function Login() {
    
   const [count, setCount] = useState(0);

   const buttonsound = () =>{
        // if (count > 0) return;

        const audio: any = new Audio(sound);
        audio.play();
        setCount(c => c + 1);
        console.log(count);
        // document.getElementById("playbutton")?.style.setProperty("--button-height", "100%");
        
    }

    return(
    <>
    <div className= {style.box}>
        <div className= {style.loginpicture}>

        </div>

        <div className= {style.loginpage}>
            <h1 className= {style.title}>Sign Up</h1>
            <div className={style.playbuttondiv}>
                <button className={style.playbutton} id = "playbutton"  onClick={buttonsound}></button>
                <hr />
            </div>
            
            <div className= {style.inputcontainer}>
                <input type="text" className= {style.input}/>
                <input type="text" className= {style.input}/>
            </div>
            <button className= {style.button}>Submit</button>
        </div>
        
    </div>
    </>
    )
}

export default Login;