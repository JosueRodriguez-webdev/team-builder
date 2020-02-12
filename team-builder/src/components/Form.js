import React, { useState } from "react";

export default function Form(props) {
  console.log(`this the props`, props);

  const [newUserCard, setNewUserCard] = useState({
    name: "",
    course: "",
    location: "",
    email: "",
    box: "False"
  });

  const preventD = (event) => {
    event.preventDefault();

    props.addNewMember({ ...newUserCard });

    setNewUserCard({
      name: "",
      course: "",
      location: "",
      email: "",
      box: "False"
    });
  };

  const changeHandler = (event) => {
    setNewUserCard({ ...newUserCard, [event.target.name]: event.target.value });
  };

  return (
    <div>
      <form onSubmit={preventD}>
        <label htmlFor="name">
          Name:
          <input
            name="name"
            onChange={changeHandler}
            placeholder="full name"
            value={newUserCard.name}
          />
        </label>{" "}
        <br />
        <label htmlFor="course">
          Pick your Course:
          <select
            name="course"
            onChange={changeHandler}
            value={newUserCard.course}
          >
            <option value="ux designer">UX Designer</option>
            <option value="full stack developer">Full-Stack Developer</option>
            <option value="ios developer">iOS Developer</option>
            <option value="senior developer">Senior Developer</option>
          </select>
        </label>
        <br />
        <label htmlFor="location">
          Location:
          <input
            name="location"
            onChange={changeHandler}
            value={newUserCard.location}
          ></input>
        </label>
        <br />
        <label htmlFor="email">
          email:
          <input
            name="email"
            onChange={changeHandler}
            value={newUserCard.email}
          ></input>
        </label>
        <br />
        <label htmlFor="checked">
          Box:
          <input
            type="checkbox"
            name="checked"
            onChange={changeHandler}
            value={newUserCard.box}
          ></input>
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
