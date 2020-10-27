import React from "react";
import "./style.css";
import API from "../../utils/API"

function Login () {

    var emailInput = document.querySelector("#email-input");
    var passwordInput = document.querySelector("#password-input");

function loginUser(event, email, password) {
    event.preventDefault();
    var userData = {
      email: emailInput.value.trim(),
      password: passwordInput.value.trim()
    };

    if (!userData.email || !userData.password) {
      return;
    }
      console.log("calling API");
      API.login({
        email: email,
        password:password
      })
        .then(function() {
          
          window.location.replace("/");
          
        //   // If there's an error, handle it by throwing up a bootstrap alert
        })
        .catch(err => console.log(err));
    
}


return <div className = "credForm">
    <form className = "ui form">
        <div className = "field">
            <label>Email Address</label>
            <input type = "text" name="email" placeholder = "Email Address" id="email-input" />
        </div>
        <div className = "field">
            <label>Password</label>
            <input type = "password" name = "password" placeholder = "Password" id="password-input" />
        </div>
        <button className="ui button" onClick={loginUser} type="submit">Log in</button>
    </form>
    <br/>
    <p>Or sign up <a href="/signup">here</a></p>
</div>

}

export default Login;


