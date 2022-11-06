import React from "react";
import Item from "./Item";

class List extends React.Component {
  render() {
    return (
      <>
        {this.props.currencies.map((currency) => (
          <Item currency={currency} value={this.props.value} />
        ))}
      </>
    );
  }
}

export default List;
