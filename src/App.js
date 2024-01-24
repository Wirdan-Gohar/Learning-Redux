import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decCounter, incCounter, ownerName } from './store/action';

function App() {
  const [inputName, setInputName] = useState('');
  const name = useSelector(state => state.nameObj.name);
  const counter = useSelector(state => state.valueObj.counter);
  const dispatch = useDispatch();
  console.log('counter in store', counter);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <input
            type="text"
            value={inputName}
            onChange={e => setInputName(e.target.value)}
          />
          <button onClick={() => dispatch(ownerName(inputName))}>Set Name</button>
          <div>
            <button onClick={() => dispatch(incCounter(1))}>+</button>
            <button onClick={() => dispatch(decCounter(1))}>-</button>
          </div>
          <h2>Name: {name}</h2>
          <h2>Counter: {counter}</h2>
        </div>
      </header>
    </div>
  );
}

export default App;
