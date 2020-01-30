import React from "react";

export default function Card({ member }) {
  const { name, course, location, email, box } = member;
  return (
    <div>
      <h1>Name is going here: {name}</h1>
      <p>Course: {course}</p>
      <p>Location: {location}</p>
      <p>Email: {email}</p>
      <p>Is the box checked? {box}</p>
    </div>
  );
}
