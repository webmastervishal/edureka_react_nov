import React from "react";
import Input from "./Input";
import List from "./List";
import "./currency.css";
import Cookies from "js-cookie";

class Container extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
      currencies: [],
    };
  }

  async componentDidMount() {
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/currencies",
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );

    const result = await res.json();
    this.setState({
      ...this.state,
      currencies: result,
    });
  }

  handleInput = (e) => {
    // console.log("data", e.target.value);
    this.setState({ ...this.state, value: e.target.value });
  };

  render() {
    // console.log("state", this.state);
    return (
      <div id="wrapper">
        <Input handleInput={this.handleInput} />
        <List value={this.state.value} currencies={this.state.currencies} />
      </div>
    );
  }
}

export default Container;
