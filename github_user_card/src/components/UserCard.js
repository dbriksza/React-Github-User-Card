import React from "react";

const UserCard = props => {
  return (
    <div className="card">
      <img src={props.data.avatar_url} />
      <div className="card-info">
        <h3 className="name">{props.data.name}</h3>
        <p className="username">Username: {props.data.login}</p>
        <p>Location: {props.data.location}</p>
        <p>
          Profile: <a href={props.data.html_url}>{props.data.html_url}</a>
        </p>
        <p>Followers: {props.data.followers}</p>
        <p>Following: {props.data.following}</p>
        <p>Bio: {props.data.bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
