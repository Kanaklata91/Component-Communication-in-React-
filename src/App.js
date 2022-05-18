import React, { Component } from 'react';
import './style.css';
import ParentComponent from './ParentComponent';

class App extends Component {
  constructor() {
    super();
    this.state = {
      id: 1,
      name: 'test',
      value: 'software engineer',
    };
  }

  render() {
    this.setState({
      id: 2,
      name: 'test1',
      val: 'test2',
    });
    return (
      <div>
        <ParentComponent />
        <p>{this.state.id}</p>
        <p>{this.state.name}</p>
        <p>{this.state.value}</p>
        <p>{this.state.val}</p>
      </div>
    );
  }
}

export default App;
