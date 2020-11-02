import React from 'react';
import './App.css';
import CounterOneuseReducer from "./components/CounterOneuseReducer";
import CounterTwouseReducer from "./components/CounterTwouseReducer";


function App() {
  return (
    <div className="App">
        <CounterTwouseReducer/>
    </div>
  );
}

export default App;
