import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <input
        type="text"
        name="value"
        id="input-style"
        onChange={this.props.handleInput}
      />
    );
  }
}

export default Input;
