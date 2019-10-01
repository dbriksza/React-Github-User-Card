import React from "react";
import UserCard from "./UserCard";
import axios from "axios";

class GetFollowers extends React.Component {
  state = {
    follower: [],
    followerdata: []
  };
  componentDidMount() {
    axios
      .get("https://api.github.com/users/dbriksza/followers")
      .then(response => {
        console.log(response.data);
        this.setState({
          follower: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {
    return <></>;
  }
}

export default GetFollowers;
