import React from "react";

class FormElements extends React.Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };

    // this.handleOnChange = this.handleOnChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  //   handleOnChange(e) {
  //     // console.log("event", e);
  //     this.setState({
  //       name: e.target.value,
  //     });
  //   }

  handleFormSubmit(e) {
    e.preventDefault();
    console.log("event", e.target[0].value);
    this.setState({
      name: e.target["name"].value,
    });
  }

  render() {
    return (
      <>
        <h1>Register yourself</h1>
        <p>My name is: {this.state.name}</p>
        <form onSubmit={this.handleFormSubmit}>
          <input type="text" name="name" />
          <input type="submit" />
        </form>
      </>
    );
  }
}

export default FormElements;
