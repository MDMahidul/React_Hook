import React,{useReducer} from 'react';
import './App.css';
import ComponentC from "./components/ComponentC";
import ComponentCuseReducer from "./components/ComponentCuseReducer";
import ComponentAuseReducer from "./components/ComponentAuseReducer";
import ComponentBuseReducer from "./components/ComponentBuseReducer";

export const CountContext=React.createContext()
export const ChannelContext=React.createContext()
export const UserContext=React.createContext()

const initialState=0;
const reducer=(state,action)=>{
    switch (action){
        case 'increment':
            return state+1
        case 'decrement':
            return state-1
        case 'reset':
            return initialState
        default:
            return state
    }
}

function App() {
    const [count,dispatch]=useReducer(reducer,initialState)
  return (
    <CountContext.Provider value={{countState:count,countDispatch:dispatch}}>
        <div className="App">
            <div>Count - {count}</div>
            <ComponentAuseReducer/>
            <ComponentBuseReducer/>
            <ComponentCuseReducer/>
        </div>
    </CountContext.Provider>
  );
}

export default App;
