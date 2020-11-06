import React, {useState} from "react";
import "./style.css";
import API from "../../utils/UserAPI"
import NavbarNoLinks from "../../components/NavbarNoLinks"

function Login () {

  const [loginUser, setloginUser] = useState({
    username:"",
    password:"",
  })

  const loginRequest = (event) => {
    event.preventDefault();

    API.loginUser({
        username: loginUser.username,
        password: loginUser.password,
        withCredentials: true,
    }).then((res) => {
      console.log(res)
      window.location.replace("/home")}
    )
  };
    
  function handleInputChange(event) {
    const { name, value } = event.target;

    setloginUser({ ...loginUser, [name]: value });
  }



  return <div className = "ui container fluid">
    <NavbarNoLinks/>
    <div className = "credForm">
      <form className = "ui form">
          <div className = "field">
              <label>Username</label>
              <input  onChange={handleInputChange}type = "text" name="username" placeholder = "uesrname" id="username" />
          </div>
          <div className = "field">
              <label>Password</label>
              <input  onChange={handleInputChange}type = "password" name = "password" placeholder = "Password" id="password-input" />
          </div>
          <button className="ui button" onClick={loginRequest} type="submit">Log in</button>
      </form>
      <br/>
      <p>Or sign up <a href="/signup">here</a></p>
  </div>
  </div>

}

export default Login;


