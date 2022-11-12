import React from "react";
import { connect } from "react-redux";
import { storeValue } from "./actions";
class Input extends React.Component {
  constructor(props) {
    super(props);

    console.log("props", props);
  }

  handleInput = (e) => {
    // this.setState({ ...this.state, value: e.target.value });
    this.props.storeValue(e.target.value);
  };

  render() {
    return (
      <input
        type="text"
        name="value"
        id="input-style"
        onChange={this.handleInput}
        value={this.props.value}
      />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    value: state.currency.value,
  };
};

const mapDispatchToProps = {
  storeValue: storeValue,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
