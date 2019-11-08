import React from "react";
import "./App.css";
import GetUser from "./components/GetUsers";
import GetFollowers from "./components/GetFollowers";

function App() {
  return (
    <div className="App cards">
      <GetUser />
      <GetFollowers />
    </div>
  );
}

export default App;
