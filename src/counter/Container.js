import React from "react";
import CounterUI from "./CounterUI";

class Container extends React.Component {
  constructor() {
    super();
    //initialse the state
    this.state = {
      count: 0,
    };

    //to bind the functions dynamically
    this.increment = this.increment.bind(this);

    console.log("calling construcotr...");
  }

  static getDerivedStateFromProps() {
    console.log("calling getDerivedStateFromProps...");
  }

  shouldComponentUpdate() {
    console.log("calling shouldComponentUpdate...");
    return true;
  }

  increment() {
    // console.log("increment", this);
    // this.state.count = this.state.count + 1;
    this.setState({
      count: this.state.count + 1,
    });
  }

  decrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    console.log("calling render...");
    return (
      <CounterUI
        count={this.state.count}
        increment={this.increment}
        decrement={this.decrement}
      />
    );
    // return (
    //   <>
    //     <h1>Counter: {this.state.count}</h1>
    //     <button onClick={this.increment}>+</button>
    //     <button onClick={this.decrement}>-</button>
    //   </>
    // );
  }

  componentDidMount() {
    console.log("calling componentDidMount...");
  }

  getSnapshotBeforeUpdate() {
    console.log("calling getSnapshotBeforeUpdate...");
  }

  componentDidUpdate() {
    console.log("calling componentDidUpdate...");
  }
}

export default Container;
