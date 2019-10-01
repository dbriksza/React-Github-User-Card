import React from "react";
import UserCard from "./UserCard";
import axios from "axios";

class GetFollowers extends React.Component {
  state = {
    follower: []
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/dbriksza/followers")
      .then(response => {
        console.log(response);
        this.setState({
          follower: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        {this.state.follower.forEach(follower => {
          axios
            .get(`https://api.github.com/users/${follower}`)
            .then(response => {
              <UserCard data={response.data} />;
            });
        })}
      </>
    );
  }
}

export default GetFollowers;
