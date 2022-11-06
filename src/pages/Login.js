import React from "react";
import "./login.css";
import Cookies from "js-cookie";

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
      error: "",
    };

    const access_token = Cookies.get("token");
    const isAuthenticated = !!access_token;

    if (isAuthenticated) {
      props.history.push("/dashboard");
    }
  }

  handleEmail = (e) => {
    this.setState({ ...this.state, email: e.target.value });
  };

  handlePassword = (e) => {
    this.setState({ ...this.state, password: e.target.value });
  };

  handleLogin = async (e) => {
    e.preventDefault();

    console.log("state", this.state);

    //hit the login api
    const res = await fetch(
      "https://webmaster-fake-api.herokuapp.com/auth/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: this.state.email,
          password: this.state.password,
        }),
      }
    );

    const result = await res.json();
    console.log("result", result);

    if (result.status === 401) {
      this.setState({ ...this.state, error: "Invalid username and password" });
    }

    if (result.status !== 401) {
      //save the access token into the browser
      Cookies.set("token", result.access_token);
      //redirect user to the dashboard
      this.props.history.push("/dashboard");
    }
  };

  render() {
    const inputStyle = {
      border: "1px solid #c7c7c7",
      width: "50%",
      padding: "10px",
      margin: "auto",
    };

    return (
      <div style={inputStyle}>
        <h1>Login</h1>
        <p>{this.state.error}</p>
        <form onSubmit={this.handleLogin}>
          <input
            type="text"
            name="email"
            placeholder="Email"
            className="input-element"
            onChange={this.handleEmail}
          />
          <input
            type="text"
            name="password"
            placeholder="Password"
            className="input-element"
            onChange={this.handlePassword}
          />
          <input
            type="submit"
            value="Login"
            id="login-button"
            style={{ backgroundColor: "red" }}
          />
        </form>
      </div>
    );
  }
}

export default Login;
