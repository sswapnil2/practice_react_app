import React, { Component } from 'react';
import FunctionSelect from "./FunctionSelect";
import ClassSelect from "./ClassSelect";
import A from "./details";

// import './style.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <React.Fragment>
        {/* <FunctionSelect /> */}
        <A />

        {/* <ClassSelect /> */}
      </React.Fragment>
    );
  }
}

export default App;