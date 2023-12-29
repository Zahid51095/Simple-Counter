import React from 'react';
import './App.css';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };

    this.increment = this.increment.bind(this); 
    this.decrement = this.decrement.bind(this); 
    this.reset = this.reset.bind(this); 
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React By Making A Simple Counter 
        </a>

      </header>
    </div>
  );
}

export default App;
