import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import Form from "./components/Form";
import Card from "./components/Card";

function App() {
  const [team, setTeam] = useState([
    {
      name: "",
      course: "",
      location: "",
      email: "",
      box: "False"
    }
  ]);

  function addNewMember(userInfo) {
    setTeam([...team, userInfo]);
  }

  return (
    <div className="App">
      <h1>Team Member Forms:</h1>
      <Form addNewMember={addNewMember} />
      {team.map((member) => (
        <Card member={member} />
      ))}
    </div>
  );
}

export default App;
