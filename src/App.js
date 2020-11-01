import React from 'react';
import './App.css';
import IntervalClassCounter from "./components/IntervalClassCounter";
import IntervalHookCounter from "./components/IntervalHookCounter";
import DataFetching from "./components/DataFetching";
import ComponentC from "./components/ComponentC";

export const UserContext=React.createContext()
export const ChannelContext=React.createContext()

function App() {
  return (
    <div className="App">
      <UserContext.Provider value={'Mahidul'}>
          <ChannelContext.Provider value={'Islam'}>
              <ComponentC/>
          </ChannelContext.Provider>
      </UserContext.Provider>
    </div>
  );
}

export default App;
