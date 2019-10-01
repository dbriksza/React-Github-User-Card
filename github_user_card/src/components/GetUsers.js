import React from "react";
import UserCard from "./UserCard";
import axios from "axios";

class GetUser extends React.Component {
  state = {
    user
  };
  componentDidMount() {
    axios.get("https://api.github.com/users/dbriksza").then(response => {
      console.log(response);
      this.state.user = response.data;
    });
  }

  render() {
    return (
      <div>
        <UserCard data={this.state.user} />
      </div>
    );
  }
}

export default GetUser;
