import { Component } from "react";
import "./index.css";

class Login extends Component {
  state = { email: "", password: "", admin: "", nonAdmin: "" };

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  };

  onChangePassword = (event) => {
    this.setState({ password: event.target.value });
  };

  success = () => {
    const { history } = this.props;
    history.replace("/");
  };

  login = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    const details = { email, password };
    console.log(details);

    const url = `https://bursting-gelding-24.hasura.app/api/rest/get-user-id/?email=${email}&password=${password}`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
      },
      method: "POST",
      body: JSON.stringify(details),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (data.get_user_id.id === 3) {
      this.setState({ admin: "AdminUser" });
      this.success();
    } else {
      this.setState({ nonAdmin: "NonAdmin" });
    }
  };

  onChangeUserId = (event) => {
    this.setState({ userId: event.target.value });
  };

  render() {
    const { email, password, admin, nonAdmin } = this.state;
    console.log(admin, nonAdmin);
    return (
      <div className="app">
        <div className="app-container">
          <h1>Bank App</h1>
          <br />
          <form onSubmit={this.login}>
            <label htmlFor="username">Email</label>
            <br />
            <input
              type="email"
              id="username"
              placeholder="Email"
              value={email}
              onChange={this.onChangeEmail}
              className="form-input"
            />
            <br />
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              placeholder="Password"
              value={password}
              onChange={this.onChangePassword}
              className="form-input"
            />
            <br />

            <button type="submit" className="login-btn">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
