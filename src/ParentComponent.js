import React, { Component } from 'react';
import ChildComponent from './ChildComponent';

class ParentComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        This is a ParentComponent.
        <ChildComponent name="Welcome User!!!" />
      </div>
    );
  }
}

export default ParentComponent;
