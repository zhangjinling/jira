import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Name from './Name';
import Test1 from './Test1';

function App() {
  const name = 'seven'
  const [searchValue, setSearchValue] =  useState('')
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchValue(e.target.value);
  }
  return (
    <div className="App">
      <header className="App-header">
      <input value={searchValue} onChange={handleChange}></input>

        <Test1 name={name} searchValue={searchValue} >
          <h3 className="thisIsNameCls">hahahah</h3>
          <p>this is a p tag</p>
          <hr></hr>
        </Test1>
        <Name></Name>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
