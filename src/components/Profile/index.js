import { Component } from "react";
import "./index.css";

class Profile extends Component {
  state = { profileList: [] };

  componentDidMount() {
    this.getData();
  }

  getData = async () => {
    const url = `https://bursting-gelding-24.hasura.app/api/rest/profile`;
    const options = {
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret":
          "g08A3qQy00y8yFDq3y6N1ZQnhOPOa4msdie5EtKS1hFStar01JzPKrtKEzYY2BtF",
        "x-hasura-role": "user",
        "x-hasura-user-id": 1,
      },
      method: "GET",
    };
    const response = await fetch(url, options);
    const data = await response.json();
    const updated = {
      name: data.users.name,
      dateOfBirth: data.users.date_of_birth,
      email: data.users.email,
      permanentAddress: data.users.permanent_address,
      presentAddress: data.users.present_address,
      postalCode: data.users.postal_code,
      city: data.users.city,
      country: data.users.country,
      id: data.users.id,
    };
    this.setState({});
  };

  render() {
    return (
      <div>
        <div>
          <img src="" alt="profile" />
        </div>
        <from>
          <label>YourName</label>
          <br />
          <input type="text" />
          <br />
          <label>Email</label>
          <br />
          <input type="email" />
          <br />
          <label>Date of Birth</label>
          <br />
          <input type="date" />
          <br />
          <label>PostCode</label>
          <br />
          <input type="text" />
          <br />
        </from>
      </div>
    );
  }
}

export default Profile;
