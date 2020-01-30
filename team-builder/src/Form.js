import React, { useState, useEffect } from "react";

import Card from "./Card";

export default function Form() {
  const [emptyForm, setEmptyForm] = useState({
    name: "",
    course: "",
    location: "",
    email: "",
    box: "False"
  });

  const preventD = (event) => {
    event.preventDefault();
    setEmptyForm({
      name: "",
      course: "",
      location: "",
      email: "",
      box: "False"
    });
  };

  const changeHandler = (event) => {
    setEmptyForm({ ...emptyForm, [event.target.name]: event.target.value });
    console.log(emptyForm);
  };

  return (
    <>
      <div>
        <form onSubmit={preventD}>
          <label htmlFor="name">
            Name:
            <input
              name="name"
              onChange={changeHandler}
              placeholder="full name"
            />
          </label>{" "}
          <br />
          <label htmlFor="course">
            Pick your Course:
            <select name="course" onChange={changeHandler}>
              <option value="ux designer">UX Designer</option>
              <option value="full stack developer">Full-Stack Developer</option>
              <option value="ios developer">iOS Developer</option>
              <option value="senior developer">Senior Developer</option>
            </select>
          </label>
          <br />
          <label htmlFor="location">
            Location:
            <input name="location" onChange={changeHandler}></input>
          </label>
          <br />
          <label htmlFor="email">
            email:
            <input name="email" onChange={changeHandler}></input>
          </label>
          <br />
          <label htmlFor="checked">
            Box:
            <input
              type="checkbox"
              name="checked"
              onChange={changeHandler}
            ></input>
          </label>
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
      <Card emptyForm={emptyForm} />
    </>
  );
}
