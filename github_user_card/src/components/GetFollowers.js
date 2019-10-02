import React from "react";
import UserCard from "./UserCard";
import axios from "axios";

class GetFollowers extends React.Component {
  state = {
    follower: [],
    followerinfo: []
  };
  componentWillMount() {
    axios
      .get("https://api.github.com/users/dbriksza/followers")
      .then(response => {
        console.log("first axios", response.data);
        console.log("somethingdon'tmaater", response.data);
        this.setState({
          follower: response.data.map(el => el.login)
        });
        {
          this.state.follower.map(follower =>
            axios
              .get(`https://api.github.com/users/${follower}`)
              .then(response => {
                this.setState({
                  followerinfo: [...this.state.followerinfo, response.data]
                });
              })
          );
        }
      });
  }

  render() {
    console.log(this.state.followerinfo);
    return (
      <>
        {this.state.followerinfo.map(please => (
          <UserCard data={please} />
        ))}
      </>
    );
  }
}

export default GetFollowers;
