import React from 'react';
import logo from './logo.svg';
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

  reset() {
    this.setState({
      count: 0
    });
  }

  increment() {
    this.setState((state) => ({
      count: state.count + 1
    }));
  }

  decrement() {
    this.setState((state) => ({
      count: state.count - 1
    }));
  }

  render() {
    return (
      <div>
        <button className="inc" onClick={this.increment}>
          Increment!
        </button>
        <button className="dec" onClick={this.decrement}>
          Decrement!
        </button>
        <button className="reset" onClick={this.reset}>
          Reset
        </button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
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
          Learn React By A Simple Counter
        </a>
        
        <Counter />
      </header>
    </div>
  );
}

export default App;
