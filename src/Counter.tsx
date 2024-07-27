import {useState} from "react";

function Counter(){
    const [count, setCount] = useState(0);

    const add = () => {
        setCount(count + 1);
    }

    const minus = () => {
        setCount(count - 1);
    }

    return(
        <>
            <h1 className="text">{count.toString()}</h1>
            <button className = "button" onClick={add}>Add</button>
            <button className = "button" onClick={minus}>Minus</button>
        </>
    )
}

export default Counter;
