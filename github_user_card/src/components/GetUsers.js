import React from "react";
import UserCard from "./UserCard";
import axios from "axios";

class GetUser extends React.Component {
  state = {
    user: {}
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/dbriksza")
      .then(response => {
        console.log(response);
        this.setState({
          user: response.data
        });
        {
          console.log(this.state.user);
        }
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <UserCard data={this.state.user} />
      </>
    );
  }
}

export default GetUser;
