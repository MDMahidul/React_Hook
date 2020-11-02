import React from 'react';
import './App.css';
import CounterOneuseReducer from "./components/CounterOneuseReducer";
import CounterTwouseReducer from "./components/CounterTwouseReducer";
import CounterThreeuseReducer from "./components/CounterThreeuseReducer";


function App() {
  return (
    <div className="App">
        <CounterThreeuseReducer/>
    </div>
  );
}

export default App;
