import React from "react";

import Form from "./Form.js";

export default function Card(props) {
  console.log(`Cards Component`, props);
  return (
    <div>
      <h1>Name is going here:</h1>
      <p>Course:</p>
      <p>Location:</p>
      <p>Email:</p>
      <p>Is the box checked?</p>
    </div>
  );
}
