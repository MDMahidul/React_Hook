import React,{useState,useEffect} from 'react';
import HookMouseuseEffect from "./HookMouseuseEffect";

function MouseContaineruseEffect(props) {
    const  [display,setDisplay]=useState(true)
    return (
        <div>
            <button onClick={()=>setDisplay(!display)}>Toggle Display</button>
            {display && <HookMouseuseEffect/>}
        </div>
    );
}

export default MouseContaineruseEffect;