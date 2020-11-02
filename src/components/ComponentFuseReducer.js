import React, {useContext} from 'react';
import {CountContext} from "../App";

function ComponentFuseReducer(props) {
    const countContext = useContext(CountContext)
    return (
        <div>
            Component F - {countContext.countState}
            <button onClick={()=>countContext.countDispatch('reset')}>Reset</button>
            <button onClick={()=>countContext.countDispatch('increment')}>Increment</button>
            <button  onClick={()=>countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    );
}

export default ComponentFuseReducer;