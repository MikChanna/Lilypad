import React, { useState } from "react";
import "./style.css";
import API from "../../utils/UserAPI";
import NavbarNoLinks from "../../components/NavbarNoLinks"

function Signup() {
  const [userObject, setUserObject] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    username: "",
    password: "",
  });

  const register = (event) => {
    event.preventDefault();

    API.createUser({
      username: userObject.username,
      password: userObject.password,
      firstName: userObject.firstName,
      lastName: userObject.lastName,
      phoneNumber: userObject.phoneNumber,
      withCredentials: true,
    }).then((res) => {
      console.log("user created");
      window.location.replace("/");
    });
  };

  function handleInputChange(event) {
    const { name, value } = event.target;

    setUserObject({ ...userObject, [name]: value });
  }

  return (
    <div className = "ui container fluid">
      <NavbarNoLinks/>
      <div className="credForm">
      <form className="ui form ">
        <div className="field">
          <label>First Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="firstName"
            placeholder="First Name"
            id="firstName"
          />
        </div>
        <div className="field">
          <label>Last Name</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="lastName"
            placeholder="Last Name"
            id="lastName"
          />
        </div>
        <div className="field">
          <label>Phone Number</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="phoneNumber"
            placeholder="000-000-000"
            id="phoneNumber"
          />
        </div>
        <div className="field">
          <label>Username</label>
          <input
            onChange={handleInputChange}
            type="text"
            name="username"
            placeholder="username"
            id="username"
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            onChange={handleInputChange}
            type="password"
            name="password"
            placeholder="Password"
            id="password-input"
          />
        </div>
        <button onClick={register} className="ui button signup" type="submit">
          Sign Up
        </button>
      </form>
      <br />
      <p>
        Or log in <a href="/login">here</a>
      </p>
    </div>
    </div>
  );
}

export default Signup;
