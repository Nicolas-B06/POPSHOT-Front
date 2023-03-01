import React from 'react';
import './App.css';
import Entry from './entry/entry.jsx';
import Header from './header/header.jsx';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>        
      </header>
      <Entry></Entry>
    </div>
  );
}

export default App;
